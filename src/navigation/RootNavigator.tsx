import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { RootState } from "app/store";
import AuthScreen from "screens/authentication/AuthScreen";
import HomeScreen from "screens/home/HomeScreen";

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!token ? (
        <RootStack.Screen name="Auth" component={AuthScreen} />
      ) : (
        <RootStack.Screen name="Home" component={HomeScreen} />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
