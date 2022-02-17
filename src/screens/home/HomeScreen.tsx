import { Appbar } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import BottomTabs from "navigation/BottomTabs";
import FABButton from "components/FABButton";
import { persistor } from "app/store";
import { useDispatch } from "react-redux";
import { logout } from "screens/authentication/AuthSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    persistor.purge();
    dispatch(logout());
  };

  return (
    <>
      <Appbar.Header statusBarHeight={32}>
        <Appbar.Content title="MySchool" />
        <Appbar.Action icon="logout" onPress={handleLogout} />
      </Appbar.Header>
      <FABButton />
      <BottomTabs />
      <StatusBar style="light" />
    </>
  );
};

export default HomeScreen;
