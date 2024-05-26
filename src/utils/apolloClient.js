import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import Constants from "expo-constants";
import { setContext } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";
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

  const cache = new InMemoryCache({
    typePolicies: {
      Query: { fields: { repositories: relayStylePagination() } },
      Repository: { fields: { reviews: relayStylePagination() } },
    },
  });

  console.log("authLink: " + JSON.stringify(authLink));

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  });
};

export default createApolloClient;
