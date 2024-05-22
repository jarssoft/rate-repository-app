import { useMutation } from "@apollo/client";
import { DELETEREVIEW } from "../graphql/mutations";

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETEREVIEW, {
    onError: (error) => {
      console.log("useSignIn error " + error.graphQLErrors[0].message);
    },
  });

  const deleteReview = async ({ reviewId }) => {
    if (reviewId) {
      //call the mutate function here with the right arguments

      console.log(`createReview:`);

      const r = await mutate({
        variables: {
          deleteReviewId: reviewId,
        },
      });

      console.log(`useDeleteReview: r = ${JSON.stringify(r)}`);

      if (r && r.data) {
        //console.log("useCreateRepository r " + r.data.authenticate.accessToken);
        //apolloClient.resetStore();
      }

      return r;
    }
  };

  return [deleteReview, result];
};

export default useDeleteReview;
