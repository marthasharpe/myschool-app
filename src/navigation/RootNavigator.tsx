import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { RootState } from "app/store";
import AuthScreen from "screens/authentication/AuthScreen";
import HomeScreen from "screens/home/HomeScreen";
import { useEffect } from "react";

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  // const getToken = async (token) => {
  //   let result = await SecureStore.getItemAsync(token);
  // };

  useEffect(() => {
    // check SecureStore for a valid token and set state accordingly
  }, []);

  // if (state.isLoading) {
  // // haven't finished checking for token
  //   return <SplashScreen />;
  // }

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
