import { useGetSubjectsQuery } from "app/api";
import { RootState } from "app/store";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Subject } from "types/types";

const SubjectsScreen = () => {
  const userId = useSelector((state: RootState) => state.auth.user?.userId);
  const { data, error, isLoading } = useGetSubjectsQuery(userId);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        data &&
        data.subjects.map((subject: Subject) => (
          <Text key={subject._id}>{subject.name}</Text>
        ))
      )}
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
