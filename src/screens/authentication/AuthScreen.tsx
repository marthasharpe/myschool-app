import * as React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { TextInput, Button } from "react-native-paper";

const AuthScreen = () => {
  const [emailInput, setEmailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");
  const [error, setError] = React.useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <TextInput
              label="Email"
              mode="outlined"
              autoCapitalize="none"
              autoComplete={false}
              autoFocus
              error={error}
              value={emailInput}
              onChangeText={(text) => setEmailInput(text)}
              style={styles.input}
            />
            <TextInput
              label="Password"
              mode="outlined"
              autoCapitalize="none"
              autoComplete={false}
              error={error}
              value={passwordInput}
              secureTextEntry
              onChangeText={(text) => setPasswordInput(text)}
              style={styles.input}
            />
            <Button
              mode="contained"
              style={styles.button}
              onPress={() => console.log("Login")}
            >
              Login
            </Button>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginVertical: 20,
    width: "80%",
    maxWidth: 320,
    alignSelf: "center",
  },
  button: {
    marginVertical: 20,
    width: "80%",
    maxWidth: 320,
    alignSelf: "center",
    borderRadius: 20,
    padding: 4,
  },
});

export default AuthScreen;
