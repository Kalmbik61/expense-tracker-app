import { View, Text } from "react-native";
import styles from "./ExpensesSummary.styles";
import { IExpensesSummaryProps } from "./ExpensesSummary.props";

export default function ExpensesSummary({
  expenses,
  periodName,
}: IExpensesSummaryProps) {
  const expensesSum = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}
