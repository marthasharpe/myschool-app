import * as React from "react";
import { FAB, Portal } from "react-native-paper";

const FABButton = () => {
  const [isOpen, setisOpen] = React.useState<boolean>(false);

  const onStateChange = () => setisOpen(!isOpen);

  return (
    <Portal>
      <FAB.Group
        style={{ marginBottom: 72 }}
        open={isOpen}
        visible={true}
        icon="plus"
        actions={[
          {
            icon: "format-list-checkbox",
            label: "New Todo",
            onPress: () => console.log("Add Todo"),
          },
          {
            icon: "folder-open",
            label: "New Subject",
            onPress: () => console.log("Add Subject"),
          },
          {
            icon: "book-open-variant",
            label: "New Resource",
            onPress: () => console.log("Add Resource"),
          },
        ]}
        onStateChange={onStateChange}
      />
    </Portal>
  );
};

export default FABButton;
