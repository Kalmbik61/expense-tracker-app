import { useContext, useLayoutEffect } from "react";
import { Pressable, ScrollView, View } from "react-native";
import styles from "./ManageExpensesScreen.styles";
import IconButton from "../../global/IconButton/IconButton";
import { STYLES } from "../../../styles/variables";
import { ExpensesContext } from "../../../Context/ExpensesContext";
import ExpenseForm from "./ExpenseForm/ExpenseForm";

export default function ManageExpensesScreen({ route, navigation }: any) {
  const { deleteExpense, expenses } = useContext(ExpensesContext);
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

  return (
    <ScrollView style={styles.container}>
      <ExpenseForm
        expense={expenses.find((item) => item.id === id)}
        onCancel={onCancel}
      />

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
    </ScrollView>
  );
}
