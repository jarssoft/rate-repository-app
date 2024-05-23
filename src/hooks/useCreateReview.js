import { useMutation } from "@apollo/client";
import { CREATEREVIEW } from "../graphql/mutations";
import { useContext } from "react";
import AuthStorageContext from "../context/AuthStorageContext";

const useCreateReview = () => {
  const authStorage = useContext(AuthStorageContext);

  const [mutate, result] = useMutation(CREATEREVIEW, {
    onError: (error) => {
      console.log("useSignIn error " + error.graphQLErrors[0].message);
    },
  });

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    if (ownerName && repositoryName && rating) {
      //call the mutate function here with the right arguments

      console.log(`createReview:`);

      const r = await mutate({
        variables: {
          review: { ownerName, repositoryName, rating: Number(rating), text },
        },
      });

      console.log(`useCreateReview: r = ${JSON.stringify(r)}`);

      if (r && r.data) {
        //console.log("useCreateRepository r " + r.data.authenticate.accessToken);
        //apolloClient.resetStore();
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
