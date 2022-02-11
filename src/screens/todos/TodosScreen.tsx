import { StyleSheet, Text, View } from "react-native";

const TodosScreen = () => {
  return (
    <View style={styles.container}>
      <Text>My Todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TodosScreen;
