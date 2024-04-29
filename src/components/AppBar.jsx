import { View, StyleSheet, Text, Pressable } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    // ...
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
      <Pressable onPress="console.log()">
        <Text style={styles.text}>Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
