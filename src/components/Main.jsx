import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import RepositoryList from "./ReporsityList";
import AppBar from "./AppBar";
import { Route, Routes, Navigate } from "react-router-native";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SingleReporsity from "./SIngleReporsity";
import CreateReview from "./CreateReview";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <Routes>
        <Route path="/" element={<RepositoryList />} />{" "}
        <Route path="/signin" element={<SignIn />} />{" "}
        <Route path="/signup" element={<SignUp />} />{" "}
        <Route path="/createreview" element={<CreateReview />} />{" "}
        <Route path="/single">
          <Route path=":userId" element={<SingleReporsity />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />{" "}
      </Routes>
    </View>
  );
};

export default Main;
