import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IconButton } from "react-native-paper";
import LandingScreen from "screens/authentication/LandingScreen";
import LoginScreen from "screens/authentication/LoginScreen";
import SignupScreen from "screens/authentication/SignupScreen";

export type AuthStackParamList = {
  Landing: undefined;
  Login: undefined;
  Signup: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  const navigation = useNavigation();
  return (
    <AuthStack.Navigator>
      <AuthStack.Group screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Landing" component={LandingScreen} />
      </AuthStack.Group>
      <AuthStack.Group
        screenOptions={{
          headerLeft: () => (
            <IconButton
              icon="close"
              size={32}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitle: "",
          headerTransparent: true,
          presentation: "modal",
        }}
      >
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Signup" component={SignupScreen} />
      </AuthStack.Group>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
