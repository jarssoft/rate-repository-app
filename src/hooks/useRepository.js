import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (repositoryId) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: {
      repositoryId,
    },
    onError: (error) => {
      console.log("useRepository error " + error.graphQLErrors[0].message);
    },
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }
    console.log("useRepository: fetchMore()");
    console.log(
      `useRepository: fetchMore() ${data.repository.reviews.pageInfo.endCursor}`
    );

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        repositoryId,
      },
    });
  };

  return {
    repository: data ? data.repository : undefined,
    loading: loading,
    fetchMore: handleFetchMore,
    ...result,
  };
};

export default useRepository;
