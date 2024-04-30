import { View, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    gap: 5,
  },
  item: {
    textAlign: "center",
  },
});

const formatnumber = (value) => {
  return value < 1000 ? value : (value / 1000).toFixed(1) + "k";
};

const KeyValue = ({ name, value }) => {
  return (
    <View style={styles.flexContainer}>
      <Text fontWeight="bold" style={styles.item}>
        {formatnumber(value)}
      </Text>
      <Text color="textSecondary" style={styles.item}>
        {name}
      </Text>
    </View>
  );
};

export default KeyValue;
