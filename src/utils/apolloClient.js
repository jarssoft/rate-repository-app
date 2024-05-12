import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import Constants from "expo-constants";
import { setContext } from "@apollo/client/link/context";

/*
const createApolloClient = () => {
  console.log(Constants.expoConfig.extra.apolloUri);
  return new ApolloClient({
    //uri: "http://192.168.1.100:4000/graphql",
    //uri: "http://192.168.1.109:4000/graphql",
    uri: Constants.expoConfig.extra.apolloUri,
    cache: new InMemoryCache(),
  });
};
*/
// You might need to change this depending on how you have configured the Apollo Server's URI
const { apolloUri } = Constants.expoConfig.extra;

const httpLink = createHttpLink({
  uri: apolloUri,
});

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
      };
    } catch (e) {
      console.log(e);
      return { headers };
    }
  });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
