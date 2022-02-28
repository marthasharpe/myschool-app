import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useTheme } from "react-native-paper";
import DashboardScreen from "features/dashboard/DashboardScreen";
import ResourcesScreen from "features/resources/ResourcesScreen";
import SubjectsScreen from "features/subjects/SubjectsScreen";

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator barStyle={{ backgroundColor: colors.primary, height: 72 }}>
      <Tab.Screen
        name="Dashboard"
        options={{ tabBarIcon: "home-account" }}
        component={DashboardScreen}
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
    </Tab.Navigator>
  );
};

export default BottomTabs;
