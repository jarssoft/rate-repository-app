import { Link } from "react-router-native";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import useMe from "../hooks/useMe";
import useSignIn from "../hooks/useSignIn";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    display: "flex",
    flexDirection: "row",
  },
  text: {
    color: "#EEEEEE",
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 10,
    textDecorationStyle: "solid",
    fontWeight: "bold",
  },
  // ...
});

const AppBar = () => {
  const [signIn] = useSignIn();
  const { me } = useMe();

  //if (me.loading) {
  //  return <></>;
  // }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>
        {me ? (
          <>
            <Link to="/createreview">
              <Text style={styles.text}>Create a review</Text>
            </Link>
            <Link to="/signout" onPress={signIn}>
              <Text style={styles.text}>Sign out</Text>
            </Link>
          </>
        ) : (
          <Link to="/signin">
            <Text style={styles.text}>Sign in</Text>
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
