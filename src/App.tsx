import {
  Appbar,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./navigation/BottomTabs";
import FABButton from "./components/FABButton";

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
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Appbar.Header statusBarHeight={32}>
          <Appbar.Content title="MySchool" />
        </Appbar.Header>
        <FABButton />
        <BottomTabs />
        <StatusBar style="light" />
      </PaperProvider>
    </NavigationContainer>
  );
}
