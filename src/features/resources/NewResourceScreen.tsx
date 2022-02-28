import { useLoginMutation } from "app/api";
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
import { useStyles } from "./styles";

const NewResourceScreen = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const [nameInput, setNameInput] = React.useState("");
  const [errorDialogVisible, setErrorDialogVisible] = React.useState(false);
  const [errorDialogMessage, setErrorDialogMessage] = React.useState("");

  const showErrorDialog = () => setErrorDialogVisible(true);
  const hideErrorDialog = () => setErrorDialogVisible(false);

  // const handleLogin = useCallback(async (password: string, email: string) => {
  //   try {
  //     const result = await login({
  //       email: email,
  //       password: password,
  //     });
  //     if ("data" in result) {
  //       const token = result.data.token;
  //       const user = result.data.user;
  //       dispatch(setAuthData({ token, user }));
  //     }
  //     if ("error" in result) {
  //       setErrorDialogMessage(result.error.data.message);
  //       showErrorDialog();
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }, []);

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
              <Title>New Resource</Title>
              <TextInput
                label="name"
                mode="outlined"
                autoCapitalize="words"
                autoComplete={false}
                value={nameInput}
                onChangeText={(text) => setNameInput(text)}
                style={styles.input}
              />
              <Button
                mode="contained"
                loading={isLoading}
                disabled={isLoading}
                style={styles.button}
                onPress={() => console.log("create Resource")}
              >
                Create Resource
              </Button>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Portal.Host>
  );
};

export default NewResourceScreen;
