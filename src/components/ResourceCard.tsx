import * as React from "react";
import { ListRenderItem, StyleSheet } from "react-native";
import { Card, IconButton } from "react-native-paper";
import { Resource } from "types/types";

const ResourceCard: ListRenderItem<Resource> = ({ item }) => {
  return (
    <Card style={styles.card}>
      <Card.Title
        title={item.title}
        titleNumberOfLines={2}
        subtitle={item.description}
        subtitleNumberOfLines={3}
        right={(props) => (
          <IconButton {...props} icon="arrow-right" onPress={() => {}} />
        )}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 12,
    marginHorizontal: 12,
    padding: 16,
  },
});

export default ResourceCard;
