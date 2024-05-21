//import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  //const [repositories, setRepositories] = useState();
  //const [loading, setLoading] = useState(false);

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      orderDirection: "ASC",
      orderBy: "RATING_AVERAGE",
    },
  });

  //useEffect(() => {
  //fetchRepositories();
  //}, []);

  return {
    repositories: data ? data.repositories : undefined,
    loading2: loading,
  };
};

export default useRepositories;
