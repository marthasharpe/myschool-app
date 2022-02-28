import * as React from "react";
import { Button, Paragraph, Dialog, Portal } from "react-native-paper";

interface Props {
  message: string;
  isVisible: boolean;
  hideDialog: () => void;
  completeAction: () => void;
}

const ConfirmDialog = ({
  message,
  isVisible,
  hideDialog,
  completeAction,
}: Props) => {
  return (
    <Portal>
      <Dialog visible={isVisible} onDismiss={hideDialog}>
        <Dialog.Title>Just in case...</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{message}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={completeAction}>Yes, do it</Button>
          <Button onPress={hideDialog}>No, go back</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ConfirmDialog;
