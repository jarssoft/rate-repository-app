import useRepository from "../hooks/useRepository";
import Text from "./Text";
import { FlatList } from "react-native";
import ItemSeparator from "./ItemSeparator";
import ReviewItem from "./ReviewItem";

const MyReviews = () => {
  let userId = "zeit.swr";
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
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={ItemSeparator}
      // ...
    />
  );
};

export default MyReviews;
