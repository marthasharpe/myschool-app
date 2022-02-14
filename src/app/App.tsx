import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./store";
import { Provider } from "react-redux";
import { registerRootComponent } from "expo";
import RootNavigator from "navigation/RootNavigator";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#006b24",
    accent: "#fbba32",
  },
};

const App = () => {
  console.log("running");
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default registerRootComponent(App);