import { View } from "react-native";
import { StyleSheet, Pressable } from "react-native";
import theme from "../theme";
import Text from "./Text";

function parseISOString(s) {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    display: "flex",
    gap: 20,
    padding: 20,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  mybuttons: {
    display: "flex",
    flexDirection: "row",
  },
  maincontainer: {
    display: "flex",
    gap: 5,
    width: 0,
    flexGrow: 1,
    flex: 1,
    flexShrink: 1,
  },
  ratingMargin: {
    gap: 5,
  },
  ratingText: {
    color: theme.colors.primary,
    borderRadius: 20,
    width: 40,
    height: 40,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    textAlign: "center",
    verticalAlign: "middle",
  },
  submit: {
    padding: 20,
    fontSize: theme.fontSizes.subheading,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10,
  },
  submittext: {
    color: "white",
    textAlign: "center",
    fontWeight: theme.fontWeights.bold,
  },
});

const ReviewItem = ({ review, myButtons }) => {
  // Single review item
  return (
    <View style={styles.main}>
      <View style={styles.info}>
        <View>
          <Text style={styles.ratingText} fontWeight="bold">
            {review.rating}
          </Text>
        </View>
        <View style={styles.maincontainer}>
          <Text fontSize="subheading" fontWeight="bold">
            {review.user.username}
          </Text>
          <Text color="textSecondary">
            {parseISOString(review.createdAt).toDateString()}
          </Text>
          <Text style={{ flexShrink: 1 }}>{review.text}</Text>
        </View>
      </View>
      {myButtons ? (
        <View style={styles.mybuttons}>
          <Pressable
            style={styles.submit}
            onPress={() => console.log("ReviewItem: View repositor")}
          >
            <Text style={styles.submittext}>View repository</Text>
          </Pressable>
          <Pressable
            style={[styles.submit, { backgroundColor: theme.colors.error }]}
            onPress={() => console.log("ReviewItem: Delete review")}
          >
            <Text style={styles.submittext}>Delete review</Text>
          </Pressable>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default ReviewItem;
