import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (repositoryId) => {
  const { data, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: {
      repositoryId,
    },
    onError: (error) => {
      console.log("useRepository error " + error.graphQLErrors[0].message);
    },
  });

  return {
    repository: data ? data.repository : undefined,
    loading: loading,
  };
};

export default useRepository;
