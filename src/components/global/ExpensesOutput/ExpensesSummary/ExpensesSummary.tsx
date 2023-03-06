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
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}
