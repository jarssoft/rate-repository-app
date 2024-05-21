import { useNavigate } from "react-router-native";
import SignUpContainer from "./SignUpContainer";
import useSignUp from "../hooks/useSignUp";

const SignUp = () => {
  const [signUp] = useSignUp();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signUp({ username, password });
      if (data) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit}></SignUpContainer>;
};

export default SignUp;
