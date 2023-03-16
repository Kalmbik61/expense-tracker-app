import React, { useContext, useState } from "react";
import { Alert, Text, View } from "react-native";
import Input from "../../../global/Input/Input";
import styles from "./IExpenseForm.styles";
import IconButton from "../../../global/IconButton/IconButton";
import { STYLES } from "../../../../styles/variables";
import { IExpenseFormProps } from "./ExpenseForm.props";
import { ExpensesContext } from "../../../../Context/ExpensesContext";

interface IValues {
  amount: string;
  date: string;
  title: string;
}

export default function ExpenseForm({ expense, onCancel }: IExpenseFormProps) {
  const { addExpense, updateExpense } = useContext(ExpensesContext);
  const [values, setValues] = useState<IValues>({
    amount: expense?.amount.toString() || "",
    date:
      expense?.date.toISOString().slice(0, 10) ||
      new Date().toISOString().slice(0, 10),
    title: expense?.title || "",
  });
  const [error, setError] = useState<string>();
  const isEditing = !!expense;

  const onChangeValue = (value: string, valueKey: keyof IValues) => {
    setValues((prev) => ({ ...prev, [valueKey]: value }));
  };

  const onSubmitHandler = () => {
    const data = {
      amount: +values.amount,
      date: new Date(values.date),
      title: values.title,
    };

    let err = false;

    Object.values(data).forEach((item) => {
      if (!item) err = true;
    });

    if (err) {
      // Alert.alert("Error", "Amout, Date and Description are required!");
      setError("Amout, Date and Description are required!");
      return;
    }

    if (isEditing) {
      updateExpense({ ...data, id: expense.id });
    } else {
      addExpense(data);
    }
    onCancel();
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Your Expense</Text>
        <Input
          label='Amount'
          textInputOptions={{
            keyboardType: "decimal-pad",
            onChangeText: (v) => onChangeValue(v, "amount"),
            value: values.amount,
          }}
        />
        <Input
          label='Date'
          textInputOptions={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (v) => onChangeValue(v, "date"),
            value: values.date,
          }}
        />
        <Input
          label='Description'
          textInputOptions={{
            multiline: true,
            autoCorrect: false,
            onChangeText: (v) => onChangeValue(v, "title"),
            value: values.title,
          }}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}

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
          onPress={onSubmitHandler}
        />
      </View>
    </View>
  );
}
