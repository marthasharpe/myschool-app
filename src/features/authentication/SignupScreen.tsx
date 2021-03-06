import { useSignupMutation } from "app/api";
import ErrorDialog from "components/ErrorDialog";
import * as React from "react";
import { useCallback } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import { TextInput, Button, Title, useTheme, Portal } from "react-native-paper";
import { useDispatch } from "react-redux";
import { setAuthData } from "./AuthSlice";
import { useStyles } from "./styles";

const SignupScreen = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const dispatch = useDispatch();
  const [signup, { isLoading }] = useSignupMutation();

  const [emailInput, setEmailInput] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [passwordInput, setPasswordInput] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = React.useState(true);
  const [errorDialogVisible, setErrorDialogVisible] = React.useState(false);
  const [errorDialogMessage, setErrorDialogMessage] = React.useState("");

  const showErrorDialog = () => setErrorDialogVisible(true);
  const hideErrorDialog = () => setErrorDialogVisible(false);

  const handleEmailChange = useCallback((text: string) => {
    setEmailError(false);
    setEmailInput(text);
  }, []);

  const handlePasswordChange = useCallback((text: string) => {
    setPasswordError(false);
    setPasswordInput(text);
  }, []);

  const handleValidation = useCallback(() => {
    const password = passwordInput.trim();
    const email = emailInput.trim();
    //email validation
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setEmailError(true);
      return;
    }
    //password validation
    if (password.length === 0 || password.length < 8) {
      setPasswordError(true);
      return;
    }
    handleSignup(password, email);
  }, [emailInput, passwordInput]);

  const handleSignup = useCallback(async (password: string, email: string) => {
    try {
      const result = await signup({
        email: email,
        password: password,
      });
      if ("data" in result) {
        const token = result.data.token;
        const user = result.data.user;
        dispatch(setAuthData({ token, user }));
      }
      if ("error" in result) {
        setErrorDialogMessage(result.error.data.message);
        showErrorDialog();
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Portal.Host>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.screen}
      >
        <ErrorDialog
          isVisible={errorDialogVisible}
          hideDialog={hideErrorDialog}
          message={errorDialogMessage}
        />
        <SafeAreaView style={styles.screen}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Title>Sign Up</Title>
              <TextInput
                label="Email"
                keyboardType="email-address"
                mode="outlined"
                autoCapitalize="none"
                error={emailError}
                autoComplete={false}
                value={emailInput}
                onChangeText={(text) => handleEmailChange(text)}
                style={styles.input}
              />
              <View style={styles.helperTextContainer}>
                {emailError ? (
                  <Text style={styles.helperText}>Enter a valid email.</Text>
                ) : null}
              </View>
              <TextInput
                label="Password"
                mode="outlined"
                autoCapitalize="none"
                error={passwordError}
                autoComplete={false}
                value={passwordInput}
                secureTextEntry={isPasswordHidden}
                onChangeText={(text) => handlePasswordChange(text)}
                style={styles.input}
                right={
                  <TextInput.Icon
                    name="eye"
                    onPress={() => setIsPasswordHidden(!isPasswordHidden)}
                  />
                }
              />
              <View style={styles.helperTextContainer}>
                {passwordError ? (
                  <Text style={styles.helperText}>
                    Password must be at least 8 characters long.
                  </Text>
                ) : null}
              </View>
              <Button
                mode="contained"
                loading={isLoading}
                disabled={isLoading}
                style={styles.button}
                onPress={handleValidation}
              >
                Signup
              </Button>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Portal.Host>
  );
};

export default SignupScreen;
