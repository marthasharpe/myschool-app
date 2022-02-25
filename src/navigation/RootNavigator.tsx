import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { persistor, RootState } from "app/store";
import HomeScreen from "screens/home/HomeScreen";
import AuthNavigator from "./AuthNavigator";
import jwt_decode from "jwt-decode";
import { logout } from "screens/authentication/AuthSlice";
// import * as SplashScreen from "expo-splash-screen";
import React from "react";

interface JWTToken {
  email: string;
  userId: string;
  exp: number;
  iat: number;
}

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

  const handleLogout = () => {
    persistor.purge();
    dispatch(logout());
  };

  React.useEffect(() => {
    // const loadApp = async () => {
    // await SplashScreen.preventAutoHideAsync();
    if (token) {
      const decodedToken: JWTToken = jwt_decode(token);
      if (Date.now() >= decodedToken.exp * 1000) {
        handleLogout();
      }
    }
    // await SplashScreen.hideAsync();
    // };
    // loadApp();
  }, [token]);

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!token ? (
        <RootStack.Screen name="Auth" component={AuthNavigator} />
      ) : (
        <RootStack.Screen name="Home" component={HomeScreen} />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
