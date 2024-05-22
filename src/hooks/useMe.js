//import { useState } from "react";
import { useQuery } from "@apollo/client";
//import { useContext } from "react";
import { GET_ME } from "../graphql/queries";
//import AuthStorageContext from "../context/AuthStorageContext";

const useMe = (variables) => {
  //const authStorage = useContext(AuthStorageContext);
  //const [repositories, setRepositories] = useState();
  //const [loading, setLoading] = useState(false);

  const { data, loading } = useQuery(GET_ME, {
    fetchPolicy: "cache-and-network",
    variables,
    onError: (error) => {
      console.log("useMe error " + error.graphQLErrors[0].message);
    },
  });

  return {
    //me: data,
    me: data ? data.me : undefined,
    loading: loading,
  };
};

export default useMe;
