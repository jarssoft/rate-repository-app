import { FlatList } from "react-native";
import { View, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native";
import RepositoryItem from "./ReporsityItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
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
          <RepositoryItem item={item} />
        </TouchableHighlight>
      )}
    />
  );
};

export default RepositoryListContainer;