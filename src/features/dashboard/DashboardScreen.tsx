import { StyleSheet, Text, View } from "react-native";

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text>My Dashboard</Text>
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

export default DashboardScreen;
