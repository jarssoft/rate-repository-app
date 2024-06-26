import Text from "./Text";
import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { useFormik } from "formik";
import theme from "../theme";
import * as yup from "yup";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignInContainer = ({ onSubmit }) => {
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
        placeholder="Username"
        style={[
          styles.input,
          formik.touched.password && formik.errors.username && styles.error,
        ]}
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ marginLeft: 20, color: theme.colors.error }}>
          {formik.errors.username}
        </Text>
      )}
      <TextInput
        secureTextEntry
        style={[
          styles.input,
          formik.touched.password && formik.errors.password && styles.error,
        ]}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ marginLeft: 20, color: theme.colors.error }}>
          {formik.errors.password}
        </Text>
      )}
      <Pressable style={styles.submit} onPress={formik.handleSubmit}>
        <Text style={styles.submittext}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignInContainer;
