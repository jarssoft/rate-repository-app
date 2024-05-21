import { useNavigate } from "react-router-native";
import SignUpContainer from "./SignUpContainer";
import useSignUp from "../hooks/useSignUp";
import useSignIn from "../hooks/useSignIn";

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signUp({ username, password });
      if (data) {
        await signIn({ username, password });
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit}></SignUpContainer>;
};

export default SignUp;
