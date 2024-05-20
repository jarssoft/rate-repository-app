import { useNavigate } from "react-router-native";
import useSignIn from "../hooks/useSignIn";
import CreateReviewContainer from "./CreateReviewContainer";

const CreateReview = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      if (data) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return <CreateReviewContainer onSubmit={onSubmit}></CreateReviewContainer>;
};

export default CreateReview;
