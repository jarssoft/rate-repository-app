import { useNavigate } from "react-router-native";
import CreateReviewContainer from "./CreateReviewContainer";
import useCreateReview from "../hooks/useCreateRepository";

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    try {
      const { data } = await createReview({
        ownerName,
        repositoryName,
        rating,
        text,
      });
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
