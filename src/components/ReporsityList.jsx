import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./ReporsityListContainer";
import { useState } from "react";
import * as React from "react";
import { Pressable, View } from "react-native";
import Text from "./Text";
import { StyleSheet } from "react-native";
import theme from "../theme";
import { useNavigate } from "react-router-native";
import { useDebounce } from "use-debounce";

const orders = [
  { by: "CREATED_AT", direction: "ASC" },
  { by: "RATING_AVERAGE", direction: "DESC" },
  { by: "RATING_AVERAGE", direction: "ASC" },
];

const styles = StyleSheet.create({
  select: {
    padding: 10,
    fontSize: theme.fontSizes.subheading,
    margin: 4,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
  },
  selecttext: {
    padding: 10,
    fontSize: theme.fontSizes.subheading,
    margin: 4,
    borderRadius: 4,
  },
});

const RepositoryList = () => {
  const [order, setOrder] = useState(orders[0]);
  const [search, setSearch] = useState(undefined);
  const [searchDebounce] = useDebounce(search, 1000);
  const { repositories } = useRepositories(
    order.by,
    order.direction,
    searchDebounce
  );
  const navigate = useNavigate();

  console.log(search);

  return (
    <>
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Text style={styles.selecttext}>Sort: </Text>
        <Pressable
          onPress={() => {
            setOrder(orders[0]);
          }}
        >
          <Text
            style={styles.select}
            fontWeight={order == orders[0] ? "bold" : ""}
          >
            Latest
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setOrder(orders[1]);
          }}
        >
          <Text
            style={styles.select}
            fontWeight={order == orders[1] ? "bold" : ""}
          >
            Highest rated
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setOrder(orders[2]);
          }}
        >
          <Text
            style={styles.select}
            fontWeight={order == orders[2] ? "bold" : ""}
          >
            Lowest rated{" "}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setSearch(search != null ? undefined : "");
          }}
        >
          <Text
            style={[styles.select, { marginLeft: 45 }]}
            fontWeight={search != null ? "bold" : ""}
          >
            Search
          </Text>
        </Pressable>
      </View>

      <RepositoryListContainer
        repositories={repositories}
        navigate={navigate}
        onChangeText={(value) => setSearch(value != "" ? value : undefined)}
        search={search != null}
      />
    </>
  );
};

export default RepositoryList;
