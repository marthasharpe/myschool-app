import {
  Appbar,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./store";
import { Provider } from "react-redux";
import BottomTabs from "navigation/BottomTabs";
import FABButton from "components/FABButton";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#006b24",
    accent: "#fbba32",
  },
};

export default function App() {
  console.log("running");
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Appbar.Header statusBarHeight={32}>
            <Appbar.Content title="MySchool" />
          </Appbar.Header>
          <FABButton />
          <BottomTabs />
          <StatusBar style="light" />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
