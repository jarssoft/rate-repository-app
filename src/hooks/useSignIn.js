import { useMutation } from "@apollo/client";
import SIGNIN from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGNIN, {
    onError: (error) => {
      console.log("useSignIn error " + error.graphQLErrors[0].message);
    },
  });

  const signIn = async ({ username, password }) => {
    //call the mutate function here with the right arguments
    const r = await mutate({
      variables: { authenticateCredentials: { username, password } },
    });
    //console.log("useSignIn r " + JSON.stringify(r.data.authenticate));
    return r;
  };

  return [signIn, result];
};

export default useSignIn;
