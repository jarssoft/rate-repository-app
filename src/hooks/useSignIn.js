import { useMutation } from "@apollo/client";
import SIGNIN from "../graphql/mutations";
import { useContext } from "react";
import AuthStorageContext from "../context/AuthStorageContext";
import { useApolloClient } from "@apollo/client";

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const [mutate, result] = useMutation(SIGNIN, {
    onError: (error) => {
      console.log("useSignIn error " + error.graphQLErrors[0].message);
    },
  });

  const signIn = async ({ username, password }) => {
    if (username && password) {
      //call the mutate function here with the right arguments
      const r = await mutate({
        variables: {
          authenticateCredentials: { username, password },
        },
      });

      console.log(`r:${JSON.stringify(r)}`);

      if (r && r.data) {
        console.log("useSignIn r " + r.data.authenticate.accessToken);
        authStorage.setAccessToken(r.data.authenticate.accessToken);
        apolloClient.resetStore();
      }

      console.log(
        "signin getAccessToken: " + (await authStorage.getAccessToken())
      );

      return r;
    } else {
      await authStorage.removeAccessToken();
      apolloClient.resetStore();
      console.log(
        "signout getAccessToken: " + (await authStorage.getAccessToken())
      );
    }
  };

  return [signIn, result];
};

export default useSignIn;
