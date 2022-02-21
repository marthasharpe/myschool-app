import { useGetResourcesQuery, useGetSubjectsQuery } from "app/api";
import { RootState } from "app/store";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";
import { useSelector } from "react-redux";
import { Subject } from "types/types";

const SubjectsScreen = () => {
  const userId = useSelector((state: RootState) => state.auth.user?.userId);
  const {
    data: subjectData,
    error,
    isLoading,
    refetch,
  } = useGetSubjectsQuery(userId);
  // const { data: resourceData } = useGetResourcesQuery(userId);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator />}
      {error && (
        <>
          <Text>Failed to load subjects</Text>
          <Button onPress={() => refetch()}>Retry</Button>
        </>
      )}
      {subjectData &&
        subjectData.subjects.map((subject: Subject) => (
          <Text key={subject._id}>{subject.name}</Text>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SubjectsScreen;
