import { Link } from "react-router-native";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Constants from "expo-constants";

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
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text style={styles.text}>Repositories</Text>
      </Link>
      <Link to="/signin">
        <Text style={styles.text}>Sign in</Text>
      </Link>
    </View>
  );
};

export default AppBar;
