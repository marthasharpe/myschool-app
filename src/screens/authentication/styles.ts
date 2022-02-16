import { StyleSheet } from "react-native";

export const useStyles = () =>
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
    input: {
      marginTop: 20,
    },
    button: {
      marginTop: 20,
      borderRadius: 20,
      padding: 4,
    },
  });
