import { FlatList } from "react-native";
import { Pressable } from "react-native";
import { TouchableHighlight } from "react-native";
import RepositoryItem from "./ReporsityItem";
import { useNavigate } from "react-router-native";
import ItemSeparator from "./ItemSeparator";

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
