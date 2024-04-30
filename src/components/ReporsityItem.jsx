import { View, Image, StyleSheet } from "react-native";
import KeyValue from "./KeyValue";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  reporsity: {
    backgroundColor: "white",
    padding: 10,
  },
  main: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  maincontainer: {
    display: "flex",
    justifyContent: "flex-start",
    gap: 5,
  },
  keyvaluecontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: "white",
    padding: 4,
    alignSelf: "flex-start",
    borderRadius: 4,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.reporsity}>
      <View style={styles.main}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: item.ownerAvatarUrl,
          }}
        ></Image>
        <View style={styles.maincontainer}>
          <Text fontWeight="bold">{item.fullName}</Text>
          <Text color="textSecondary">{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.keyvaluecontainer}>
        <KeyValue name="Stars" value={item.stargazersCount}></KeyValue>
        <KeyValue name="Forks" value={item.forksCount}></KeyValue>
        <KeyValue name="Reviews" value={item.reviewCount}></KeyValue>
        <KeyValue name="Rating" value={item.ratingAverage}></KeyValue>
      </View>
    </View>
  );
};

export default RepositoryItem;
