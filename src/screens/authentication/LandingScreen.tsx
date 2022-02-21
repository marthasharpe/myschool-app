import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { AuthStackParamList } from "navigation/AuthNavigator";
import * as React from "react";
import { SafeAreaView, View } from "react-native";
import { Button, Title, useTheme } from "react-native-paper";
import { useStyles } from "./styles";

type Props = NativeStackScreenProps<AuthStackParamList, "Landing">;

const LandingScreen = ({ navigation }: Props) => {
  const theme = useTheme();
  const styles = useStyles();

  return (
    <LinearGradient
      colors={[theme.colors.primary, theme.colors.background]}
      locations={[0.2, 0.8]}
      style={styles.screen}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Title style={styles.title}>MySchool</Title>
        </View>
        <View style={styles.buttonGroup}>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Button>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => navigation.navigate("Signup")}
          >
            Signup
          </Button>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LandingScreen;
