import {
  Appbar,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./navigation/BottomTabs";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#006b24",
    accent: "#fbba32",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Appbar.Header>
          <Appbar.Content title="MySchool" />
        </Appbar.Header>
        <BottomTabs />
        <StatusBar style="light" />
      </NavigationContainer>
    </PaperProvider>
  );
}
