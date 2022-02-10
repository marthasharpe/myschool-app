import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useTheme } from "react-native-paper";
import HomeScreen from "../screens/HomeScreen";
import ResourcesScreen from "../screens/ResourcesScreen";
import SubjectsScreen from "../screens/SubjectsScreen";
import TodosScreen from "../screens/TodosScreen";

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator barStyle={{ backgroundColor: colors.primary, height: 72 }}>
      <Tab.Screen
        name="Dashboard"
        options={{ tabBarIcon: "home-account" }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Resources"
        options={{ tabBarIcon: "book-open-variant" }}
        component={ResourcesScreen}
      />
      <Tab.Screen
        name="Subjects"
        options={{ tabBarIcon: "folder-open" }}
        component={SubjectsScreen}
      />
      <Tab.Screen
        name="Todos"
        options={{ tabBarIcon: "format-list-checkbox" }}
        component={TodosScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
