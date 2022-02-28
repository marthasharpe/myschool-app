import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB, Portal } from "react-native-paper";

const FABButton = () => {
  return (
    <Portal>
      <FAB
        style={styles.fab}
        visible={true}
        icon="plus"
        onPress={() => console.log("Add Resource")}
      />
    </Portal>
  );
};
const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 16,
    bottom: 88,
  },
});

export default FABButton;
