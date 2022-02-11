import { StyleSheet, Text, View } from "react-native";

const SubjectsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>My Subjects</Text>
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

export default SubjectsScreen;
