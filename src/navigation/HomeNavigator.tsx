import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "features/home/HomeScreen";
import NewResourceScreen from "features/resources/NewResourceScreen";
import NewSubjectScreen from "features/subjects/NewSubjectScreen";
import { IconButton } from "react-native-paper";

export type HomeStackParamList = {
  Home: undefined;
  NewSubject: undefined;
  NewResource: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  const navigation = useNavigation();
  return (
    <HomeStack.Navigator>
      <HomeStack.Group screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="Home" component={HomeScreen} />
      </HomeStack.Group>
      <HomeStack.Group
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
        <HomeStack.Screen name="NewResource" component={NewResourceScreen} />
        <HomeStack.Screen name="NewSubject" component={NewSubjectScreen} />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
