import Text from "./Text";
import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { useFormik } from "formik";
import theme from "../theme";
import * as yup from "yup";

const initialValues = {
  username: "",
  password: "password",
  confirm: "password",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(5, "Username is too short")
    .max(30, "Username is too long"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password is too short")
    .max(50, "Password is too long"),
  confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Confirmation must match to password.")
    .required("Confirmation is required"),
});

const SignUpContainer = ({ onSubmit }) => {
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
      <TextInput
        secureTextEntry
        style={[
          styles.input,
          formik.touched.password && formik.errors.password && styles.error,
        ]}
        placeholder="Confirm Password"
        value={formik.values.confirm}
        onChangeText={formik.handleChange("confirm")}
      />
      {formik.touched.confirm && formik.errors.confirm && (
        <Text style={{ marginLeft: 20, color: theme.colors.error }}>
          {formik.errors.confirm}
        </Text>
      )}
      <Pressable style={styles.submit} onPress={formik.handleSubmit}>
        <Text style={styles.submittext}>Sign up</Text>
      </Pressable>
    </View>
  );
};

export default SignUpContainer;
