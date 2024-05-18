//import { useState } from "react";
import { useQuery } from "@apollo/client";
//import { useContext } from "react";
import { GET_ME } from "../graphql/queries";
//import AuthStorageContext from "../context/AuthStorageContext";

const useMe = () => {
  //const authStorage = useContext(AuthStorageContext);
  //const [repositories, setRepositories] = useState();
  //const [loading, setLoading] = useState(false);

  const { data, error, loading } = useQuery(GET_ME, {
    fetchPolicy: "cache-and-network",
    // Other options
    onError: (error) => {
      console.log("useMe error " + error.graphQLErrors[0].message);
    },
  });

  if (data) {
    console.log("useMe: useQuery:");
    //console.log("getAccessToken: " + (await authStorage.getAccessToken()));
    console.log("data.me: " + JSON.stringify(data));
    console.log(error);
    console.log(loading);
  }

  return {
    //me: data,
    me: data ? data.me : undefined,
    loading: loading,
  };
};

export default useMe;