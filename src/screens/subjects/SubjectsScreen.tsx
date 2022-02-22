import { useGetResourcesQuery, useGetSubjectsQuery } from "app/api";
import { RootState } from "app/store";
import { StyleSheet, Text, FlatList, SafeAreaView, View } from "react-native";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";
import SubjectAccordion from "components/SubjectAccordion";

const SubjectsScreen = () => {
  const userId = useSelector((state: RootState) => state.auth.user?.userId);
  const {
    data: subjectData,
    error,
    isLoading,
    refetch,
  } = useGetSubjectsQuery(userId);
  const { data: resourceData } = useGetResourcesQuery(userId);

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Failed to load subjects</Text>
        <Button onPress={refetch}>Retry</Button>
      </View>
    );
  }

  return (
    <SafeAreaView>
      {subjectData && (
        <FlatList
          data={subjectData.subjects}
          renderItem={({ item }) => (
            <SubjectAccordion resources={resourceData.resources} item={item} />
          )}
          keyExtractor={(item) => item._id}
          onRefresh={refetch}
          refreshing={isLoading}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SubjectsScreen;
