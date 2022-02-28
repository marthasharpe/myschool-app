import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "navigation/HomeNavigator";
import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB, Portal } from "react-native-paper";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  "Home"
>;

const FABButton = () => {
  const [isOpen, setisOpen] = React.useState<boolean>(false);
  const onStateChange = () => setisOpen(!isOpen);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <Portal>
      <FAB.Group
        style={{ marginBottom: 72 }}
        open={isOpen}
        visible={true}
        icon="plus"
        actions={[
          {
            icon: "folder-open",
            label: "New Subject",
            onPress: () => navigation.navigate("NewSubject"),
          },
          {
            icon: "book-open-variant",
            label: "New Resource",
            onPress: () => navigation.navigate("NewResource"),
          },
        ]}
        onStateChange={onStateChange}
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
