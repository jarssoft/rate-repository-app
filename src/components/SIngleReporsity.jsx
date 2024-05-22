import useRepository from "../hooks/useRepository";
import { useParams } from "react-router-native";
import RepositoryItem from "./ReporsityItem";
import Text from "./Text";
import { FlatList } from "react-native";
import ItemSeparator from "./ItemSeparator";
import ReviewItem from "./ReviewItem";

const ReporsityInfo = ({ repository }) => {
  return (
    <RepositoryItem item={repository} githubbutton={true}></RepositoryItem>
  );
};

const SingleReporsity = () => {
  let { repositoryId } = useParams();
  const { repository, loading } = useRepository(repositoryId);

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
      ListHeaderComponent={() => (
        <>
          <ReporsityInfo repository={repository} />
          <ItemSeparator></ItemSeparator>
        </>
      )}
      // ...
    />
  );
};

export default SingleReporsity;
