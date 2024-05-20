import useRepository from "../hooks/useRepository";
import { useParams } from "react-router-native";
import RepositoryItem from "./ReporsityItem";
import Text from "./Text";
import { FlatList } from "react-native";

const ReporsityInfo = ({ repository }) => {
  return (
    <RepositoryItem item={repository} githubbutton={true}></RepositoryItem>
  );
};

const ReviewItem = ({ review }) => {
  // Single review item
  return <Text>{review.text}</Text>;
};

const SingleReporsity = () => {
  let { userId } = useParams();
  const { repository, loading } = useRepository(userId);

  if (loading) {
    return <Text>Loading</Text>;
  }

  const reviewNodes = repository.reviews
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <ReporsityInfo repository={repository} />}
      // ...
    />
  );
};

export default SingleReporsity;
