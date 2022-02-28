import { StyleSheet } from "react-native";
import { Theme } from "react-native-paper/lib/typescript/types";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const useStyles = (props?: Theme) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: "center",
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignSelf: "center",
      width: "80%",
      maxWidth: 320,
    },
    helperTextContainer: {
      marginTop: 4,
    },
    helperText: {
      color: props?.colors.error,
    },
    titleContainer: {
      flex: 1,
      justifyContent: "center",
      alignSelf: "center",
    },
    title: {
      fontSize: 40,
      padding: 24,
      lineHeight: 0,
    },
    buttonGroup: {
      justifyContent: "flex-end",
    },
    input: {
      marginTop: 20,
    },
    button: {
      marginTop: 20,
      borderRadius: 20,
      padding: 4,
    },
  });
