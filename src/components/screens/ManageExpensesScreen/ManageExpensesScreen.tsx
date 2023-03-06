import { useContext, useLayoutEffect } from "react";
import { Pressable, View } from "react-native";
import styles from "./ManageExpensesScreen.styles";
import IconButton from "../../global/IconButton/IconButton";
import { STYLES } from "../../../styles/variables";
import { ExpensesContext } from "../../../Context/ExpensesContext";

export default function ManageExpensesScreen({ route, navigation }: any) {
  const { addExpense, deleteExpense, updateExpense, expenses } =
    useContext(ExpensesContext);
  const id = route.params?.expenseId;
  const isEditing = !!id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const onDeleteExpense = () => {
    deleteExpense(id);
    navigation.goBack();
  };
  const onCancel = () => {
    navigation.goBack();
  };
  const onComfirm = () => {
    if (isEditing) {
      // updateExpense({})
    } else {
      addExpense({ date: new Date(), amount: 29.99, title: "test" });
    }
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.btns}>
        <IconButton
          icon={"arrow-undo-outline"}
          color={STYLES.COLORS.error50}
          size={24}
          onPress={onCancel}
        />
        <IconButton
          icon={"add-circle"}
          color={STYLES.COLORS.primary200}
          size={24}
          onPress={onComfirm}
        />
      </View>
      {isEditing && (
        <View style={styles.delete_container}>
          <IconButton
            icon={"trash"}
            color={STYLES.COLORS.error500}
            size={36}
            onPress={onDeleteExpense}
          />
        </View>
      )}
    </View>
  );
}
