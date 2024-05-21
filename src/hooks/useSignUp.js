import { useMutation } from "@apollo/client";
import { CREATEUSER } from "../graphql/mutations";

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATEUSER, {
    onError: (error) => {
      console.log("useSignUp error " + error.graphQLErrors[0].message);
    },
  });

  const signUp = async ({ username, password }) => {
    if (username && password) {
      //call the mutate function here with the right arguments
      const r = await mutate({
        variables: {
          user: { username, password },
        },
      });

      console.log(`r:${JSON.stringify(r)}`);

      return r;
    }
  };

  return [signUp, result];
};

export default useSignUp;
