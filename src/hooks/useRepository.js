import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: {
      repositoryId: "jaredpalmer.formik",
    },
    onError: (error) => {
      console.log("useRepository error " + error.graphQLErrors[0].message);
    },
  });

  if (error) {
    //  console.log(`Error! ${error}`);
  }

  console.log("useRepository: loading = " + JSON.stringify(loading));
  console.log(GET_REPOSITORY);
  console.log("useRepository: data = " + JSON.stringify(data));

  return {
    repository: data ? data.repository : undefined,
    loading: loading,
  };
};

export default useRepository;
