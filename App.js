import { StatusBar } from "expo-status-bar";
import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/apolloClient";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/context/AuthStorageContext";
import { NavigationContainer } from "@react-navigation/native";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <NavigationContainer>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
            <StatusBar style="auto" />
          </AuthStorageContext.Provider>
        </NavigationContainer>
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;
