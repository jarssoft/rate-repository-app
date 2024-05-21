import { useMutation } from "@apollo/client";
import { CREATEREVIEW } from "../graphql/mutations";
import { useContext } from "react";
import AuthStorageContext from "../context/AuthStorageContext";
import { useApolloClient } from "@apollo/client";

const useCreateReview = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const [mutate, result] = useMutation(CREATEREVIEW, {
    onError: (error) => {
      console.log("useSignIn error " + error.graphQLErrors[0].message);
    },
  });

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    if (ownerName && repositoryName && rating && text) {
      //call the mutate function here with the right arguments
      const r = await mutate({
        variables: {
          review: { ownerName, repositoryName, rating: 5, text },
        },
      });

      console.log(`r:${JSON.stringify(r)}`);

      if (r && r.data) {
        console.log("useCreateRepository r " + r.data.authenticate.accessToken);
        apolloClient.resetStore();
      }

      console.log(
        "useCreateRepository getAccessToken: " +
          (await authStorage.getAccessToken())
      );

      return r;
    }
  };

  return [createReview, result];
};

export default useCreateReview;
