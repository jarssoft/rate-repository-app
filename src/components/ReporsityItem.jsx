import { View, Text } from "react-native";

const RepositoryItem = ({ item }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <Text>Fullname: {item.fullName}</Text>
      <Text>Descrption: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
