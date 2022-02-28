import { useDeleteSubjectMutation } from "app/api";
import { RootState } from "app/store";
import ConfirmDialog from "components/ConfirmDialog";
import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";

interface Props {
  subjectId: string;
  refresh: () => void;
}

const DeleteSubjectButton = ({ subjectId, refresh }: Props) => {
  const userId = useSelector((state: RootState) => state.auth.user?.userId);
  const [deleteSubject, { isLoading }] = useDeleteSubjectMutation();
  const [confirmDialogVisible, setConfirmDialogVisible] = React.useState(false);

  const showConfirmDialog = () => setConfirmDialogVisible(true);
  const hideConfirmDialog = () => setConfirmDialogVisible(false);

  const handleDeleteSubject = () => {
    deleteSubject({ userId, subjectId });
    hideConfirmDialog();
    refresh();
  };

  return (
    <>
      <ConfirmDialog
        message="Are you sure you want to delete this subject?"
        isVisible={confirmDialogVisible}
        hideDialog={hideConfirmDialog}
        completeAction={handleDeleteSubject}
      />
      <Button loading={isLoading} onPress={showConfirmDialog}>
        Delete Subject
      </Button>
    </>
  );
};

const styles = StyleSheet.create({});

export default DeleteSubjectButton;
