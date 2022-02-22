import * as React from "react";
import { ListRenderItem } from "react-native";
import { List } from "react-native-paper";
import { Subject } from "types/types";

const SubjectAccordion: ListRenderItem<Subject> = ({ item }) => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  return (
    <List.Accordion
      title={item.name}
      left={(props) => <List.Icon {...props} icon="folder" />}
      expanded={expanded}
      onPress={handlePress}
    >
      <List.Item title="First item" />
      <List.Item title="Second item" />
    </List.Accordion>
  );
};

export default SubjectAccordion;
