import { FlatList } from "react-native";
import { View, StyleSheet, Pressable } from "react-native";
import { TouchableHighlight } from "react-native";
import RepositoryItem from "./ReporsityItem";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate();
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item, index, separators }) => (
        <TouchableHighlight
          name={index}
          onPress={() => this._onPress(item)}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight}
        >
          <Pressable onPress={() => navigate(`single/${item.id}`)}>
            <RepositoryItem item={item} />
          </Pressable>
        </TouchableHighlight>
      )}
    />
  );
};

export default RepositoryListContainer;
