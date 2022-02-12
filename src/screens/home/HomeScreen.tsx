import { Appbar } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import BottomTabs from "navigation/BottomTabs";
import FABButton from "components/FABButton";

const HomeScreen = () => {
  return (
    <>
      <Appbar.Header statusBarHeight={32}>
        <Appbar.Content title="MySchool" />
      </Appbar.Header>
      <FABButton />
      <BottomTabs />
      <StatusBar style="light" />
    </>
  );
};

export default HomeScreen;
