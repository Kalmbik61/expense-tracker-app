import { useContext, useLayoutEffect, useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import styles from "./ManageExpensesScreen.styles";
import IconButton from "../../global/IconButton/IconButton";
import { STYLES } from "../../../styles/variables";
import { ExpensesContext } from "../../../Context/ExpensesContext";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import { deleteExpenseApi } from "../../../utils/api/http";
import Loading from "../../global/Loading/Loading";
import ErrorOverlay from "../../global/ErrorOverlay/ErrorOverlay";

export default function ManageExpensesScreen({ route, navigation }: any) {
  const { deleteExpense, expenses } = useContext(ExpensesContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const id = route.params?.expenseId;
  const isEditing = !!id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const onDeleteExpense = async () => {
    //fake situation when request will be always OK
    setLoading(true);
    try {
      await deleteExpenseApi(id);
      deleteExpense(id);
      navigation.goBack();
    } catch (e) {
      setError("Could not delete expense - please try again later!");
      setLoading(false);
    }
  };
  const onCancel = () => {
    navigation.goBack();
  };

  if (!!error && !loading)
    return <ErrorOverlay message={error} onConfirm={() => setError("")} />;

  return loading ? (
    <Loading />
  ) : (
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
