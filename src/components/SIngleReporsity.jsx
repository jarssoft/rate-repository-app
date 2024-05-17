import useRepository from "../hooks/useRepository";
import RepositoryItem from "./ReporsityItem";
import Text from "./Text";

const SingleReporsity = () => {
  const { repository, loading } = useRepository();

  if (loading) {
    return <Text>Loading</Text>;
  }

  return <RepositoryItem item={repository}></RepositoryItem>;
};

export default SingleReporsity;
