import * as React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useStyles } from "./styles";

const AuthScreen = () => {
  const [emailInput, setEmailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");
  const [error, setError] = React.useState(false);
  const styles = useStyles();

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

export default AuthScreen;
