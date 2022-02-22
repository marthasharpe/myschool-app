import { useGetResourcesQuery } from "app/api";
import { RootState } from "app/store";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";
import ResourceListItem from "components/ResourceListItem";

const ResourcesScreen = () => {
  const userId = useSelector((state: RootState) => state.auth.user?.userId);
  const { data, error, isLoading, refetch } = useGetResourcesQuery(userId);
  if (error) {
    return (
      <View style={styles.container}>
        <Text>Failed to load resources</Text>
        <Button onPress={refetch}>Retry</Button>
      </View>
    );
  }
  return (
    <SafeAreaView>
      {data && (
        <FlatList
          data={data.resources}
          renderItem={({ item }) => <ResourceListItem item={item} />}
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

export default ResourcesScreen;
