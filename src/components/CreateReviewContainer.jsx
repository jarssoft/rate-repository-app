import Text from "./Text";
import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { useFormik } from "formik";
import theme from "../theme";
import * as yup from "yup";

const initialValues = {
  ownerName: "jaredpalmer",
  repositoryName: "formik",
  rating: "50",
  text: "Lorem ipsum dolor sit amet, mi lacus risus eget, arcu pretium non enim, sit commodo lorem est vitae, mattis sem neque. Et justo mauris odio vestibulum, diam nonummy. Nulla ante egestas fringilla pretium urna, justo dolor nunc ac a morbi faucibus, amet eget quaerat ipsum. Volutpat dolor sed ut, in sapien est tincidunt ut id, nulla et. Mauris vel malesuada. Eget accumsan urna dolor wisi, in ac amet aliquam non augue sed, fusce magna auctor, nec mauris tortor sed quis. Nunc tellus, quis volutpat. Quia molestie imperdiet pellentesque, nascetur elementum, aenean turpis volutpat libero et urna. Risus ullamcorper facilisis eros mattis. In magnis taciti, ipsum libero rhoncus massa, sit nulla.",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Username is required"),
  repositoryName: yup.string().required("Password is required"),
  rating: yup
    .number()
    .min(0, "Rating most be 0 or higher.")
    .max(100, "Rating most be 100 or lower.")
    .required("Rating is required"),
  text: yup.string(),
});

const CreateReviewContainer = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

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

  return (
    <View>
      <TextInput
        placeholder="Reporsity's owner"
        style={[
          styles.input,
          formik.touched.password && formik.errors.username && styles.error,
        ]}
        value={formik.values.ownerName}
        onChangeText={formik.handleChange("ownerName")}
      />
      {formik.touched.ownerName && formik.errors.ownerName && (
        <Text style={{ marginLeft: 20, color: theme.colors.error }}>
          {formik.errors.ownerName}
        </Text>
      )}
      <TextInput
        style={[
          styles.input,
          formik.touched.password && formik.errors.password && styles.error,
        ]}
        placeholder="Name of reporsity"
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange("repositoryName")}
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text style={{ marginLeft: 20, color: theme.colors.error }}>
          {formik.errors.repositoryName}
        </Text>
      )}
      <TextInput
        style={[
          styles.input,
          formik.touched.password && formik.errors.password && styles.error,
        ]}
        placeholder="Rating 0–100"
        value={formik.values.rating}
        onChangeText={formik.handleChange("rating")}
      />
      {formik.touched.rating && formik.errors.rating && (
        <Text style={{ marginLeft: 20, color: theme.colors.error }}>
          {formik.errors.rating}
        </Text>
      )}
      <TextInput
        style={[
          styles.input,
          formik.touched.password && formik.errors.password && styles.error,
        ]}
        placeholder="Review"
        value={formik.values.text}
        multiline={true}
        onChangeText={formik.handleChange("text")}
      />
      {formik.touched.text && formik.errors.text && (
        <Text style={{ marginLeft: 20, color: theme.colors.error }}>
          {formik.errors.text}
        </Text>
      )}
      <Pressable style={styles.submit} onPress={formik.handleSubmit}>
        <Text style={styles.submittext}>Create a review</Text>
      </Pressable>
    </View>
  );
};

export default CreateReviewContainer;
