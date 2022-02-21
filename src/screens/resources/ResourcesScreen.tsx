import { useGetResourcesQuery } from "app/api";
import { RootState } from "app/store";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";
import { useSelector } from "react-redux";
import { Resource } from "types/types";

const ResourcesScreen = () => {
  const userId = useSelector((state: RootState) => state.auth.user?.userId);
  const { data, error, isLoading, refetch } = useGetResourcesQuery(userId);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator />}
      {error && (
        <>
          <Text>Failed to load resources</Text>
          <Button onPress={() => refetch()}>Retry</Button>
        </>
      )}
      {data &&
        data.resources.map((resource: Resource) => (
          <Text key={resource._id}>{resource.title}</Text>
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

export default ResourcesScreen;
