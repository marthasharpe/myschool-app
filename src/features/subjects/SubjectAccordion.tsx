import * as React from "react";
import { FlatList, ListRenderItem } from "react-native";
import { IconButton, List } from "react-native-paper";
import { Resource, Subject } from "types/types";
import DeleteSubjectButton from "./DeleteSubject";

interface Props {
  item: ListRenderItem<Subject>;
  resources: Resource[];
}

const SubjectAccordion = ({ item, resources }: Props) => {
  const [expanded, setExpanded] = React.useState(false);
  const handlePress = () => setExpanded(!expanded);

  const subjectResources = resources?.filter((resource: Resource) => {
    return resource.subject === item.name;
  });

  return (
    <List.Accordion
      title={item.name}
      left={(props) => <List.Icon {...props} icon="folder" />}
      right={(props) => (
        <IconButton {...props} icon={expanded ? "minus" : "plus"} />
      )}
      expanded={expanded}
      onPress={handlePress}
    >
      <FlatList
        data={subjectResources}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <List.Item
            title={item.title}
            titleNumberOfLines={2}
            onPress={() => console.log("resource details")}
            description={item.description}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
        )}
        ListEmptyComponent={<DeleteSubjectButton subjectId={item._id} />}
      />
    </List.Accordion>
  );
};

export default SubjectAccordion;
