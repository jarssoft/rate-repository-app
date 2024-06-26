import Text from "./Text";
import { FlatList } from "react-native";
import ItemSeparator from "./ItemSeparator";
import ReviewItem from "./ReviewItem";
import useMe from "../hooks/useMe";

const MyReviews = () => {
  const { me, loading, refetch } = useMe({ includeReviews: true });

  if (loading) {
    return <Text>Loading</Text>;
  }

  const reviewNodes = me.reviews
    ? me.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <ReviewItem item={item} myButtons={true} refetch={refetch} />
      )}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={ItemSeparator}
      // ...
    />
  );
};

export default MyReviews;
