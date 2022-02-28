import * as React from "react";
import { Button, Paragraph, Dialog, Portal } from "react-native-paper";

interface Props {
  message: string;
  isVisible: boolean;
  hideDialog: () => void;
}
const ErrorDialog = ({ message, isVisible, hideDialog }: Props) => {
  return (
    <Portal>
      <Dialog visible={isVisible} onDismiss={hideDialog}>
        <Dialog.Title>Oops</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{message}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ErrorDialog;
