import useRepository from "../hooks/useRepository";
import { useParams } from "react-router-native";
import RepositoryItem from "./ReporsityItem";
import Text from "./Text";

const SingleReporsity = () => {
  let { userId } = useParams();
  const { repository, loading } = useRepository(userId);
  console.log(userId);

  if (loading) {
    return <Text>Loading</Text>;
  }

  return <RepositoryItem item={repository}></RepositoryItem>;
};

export default SingleReporsity;
