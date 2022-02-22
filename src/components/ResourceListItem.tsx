import * as React from "react";
import { ListRenderItem, StyleSheet } from "react-native";
import { Avatar, Card, IconButton, List, useTheme } from "react-native-paper";
import { Resource } from "types/types";

interface Props {
  item: Resource;
}

const ResourceListItem = ({ item }: Props) => {
  const theme = useTheme();
  return (
    <List.Item
      title={item.title}
      titleNumberOfLines={2}
      titleStyle={styles.title}
      onPress={() => console.log("resource details")}
      description={item.description}
      left={(props) => (
        <List.Icon {...props} color={theme.colors.primary} icon="book" />
      )}
      right={(props) => <List.Icon {...props} icon="chevron-right" />}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default ResourceListItem;
