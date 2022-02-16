import { useLoginMutation } from "app/api";
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
import { useDispatch } from "react-redux";
import { setAuthData } from "./AuthSlice";
import { useStyles } from "./styles";

const AuthScreen = () => {
  const [emailInput, setEmailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");
  const [isPasswordHidden, setIsPasswordHidden] = React.useState(true);
  const styles = useStyles();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const result = await login({
        email: emailInput,
        password: passwordInput,
      });
      if ("data" in result) {
        const token = result.data.token;
        const user = result.data.user;
        dispatch(setAuthData({ token, user }));
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.screen}
    >
      <SafeAreaView style={styles.screen}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <TextInput
              label="Email"
              mode="outlined"
              autoCapitalize="none"
              autoComplete={false}
              value={emailInput}
              onChangeText={(text) => setEmailInput(text)}
              style={styles.input}
            />
            <TextInput
              label="Password"
              mode="outlined"
              autoCapitalize="none"
              autoComplete={false}
              value={passwordInput}
              secureTextEntry={isPasswordHidden}
              onChangeText={(text) => setPasswordInput(text)}
              style={styles.input}
              right={
                <TextInput.Icon
                  name="eye"
                  onPress={() => setIsPasswordHidden(!isPasswordHidden)}
                />
              }
            />
            <Button
              mode="contained"
              loading={isLoading}
              style={styles.button}
              onPress={handleLogin}
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
