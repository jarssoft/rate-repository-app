import { FlatList } from "react-native";
import { Pressable } from "react-native";
import { TouchableHighlight, View } from "react-native";
import RepositoryItem from "./ReporsityItem";
import ItemSeparator from "./ItemSeparator";
import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  input: {
    padding: 20,
    fontSize: theme.fontSizes.subheading,
    margin: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
  },
  error: {
    borderColor: theme.colors.error,
    borderWidth: 2,
  },
  submit: {
    padding: 20,
    fontSize: theme.fontSizes.subheading,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    margin: 10,
  },
  submittext: {
    color: "white",
    textAlign: "center",
    fontWeight: theme.fontWeights.bold,
  },
});

export class RepositoryListContainer extends React.Component {
  // Add constructor
  constructor({ repositories }) {
    super();
    this.state = {
      repositories,
    };
  }

  renderHeader = () => {
    return this.props.search ? (
      <View style={{ backgroundColor: theme.colors.primary }}>
        <TextInput
          placeholder="Search"
          style={styles.input}
          onChangeText={this.props.onChangeText}
        />
      </View>
    ) : (
      <></>
    );
  };

  render() {
    //console.log(JSON.stringify(this.state.repositories));

    const repositoryNodes = this.props.repositories
      ? this.props.repositories.edges.map((edge) => edge.node)
      : [];

    //console.log(this.props);

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={this.renderHeader}
        renderItem={({ item, index, separators }) => (
          <TouchableHighlight
            name={index}
            onPress={() => this._onPress(item)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
          >
            <Pressable onPress={() => this.props.navigate(`single/${item.id}`)}>
              <RepositoryItem item={item} />
            </Pressable>
          </TouchableHighlight>
        )}
        stickyHeaderIndices={[0]}
      />
    );
  }
}

export default RepositoryListContainer;
