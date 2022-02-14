import { StyleSheet } from "react-native";

export const useStyles = () =>
  StyleSheet.create({
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
