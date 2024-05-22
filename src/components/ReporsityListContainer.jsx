import { FlatList } from "react-native";
import { Pressable } from "react-native";
import { TouchableHighlight } from "react-native";
import RepositoryItem from "./ReporsityItem";
import ItemSeparator from "./ItemSeparator";
import React from "react";

export class RepositoryListContainer extends React.Component {
  // Add constructor
  constructor({ repositories }) {
    super();
    this.state = {
      repositories,
    };
    //this.myFunction = this.myFunction.bind(this);
  }

  renderHeader = () => {
    // this.props contains the component's props
    //const props = this.props;

    // ...

    return <></>;
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
      />
    );
  }
}

export default RepositoryListContainer;
