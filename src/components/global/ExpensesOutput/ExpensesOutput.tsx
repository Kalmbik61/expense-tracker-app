import { View } from "react-native";
import styles from "./ExpensesOutput.styles";
import { IExpensesOutputProps } from "./ExpensesOutput.props";
import ExpensesSummary from "./ExpensesSummary/ExpensesSummary";
import ExpensesList from "./ExpensesList/ExpensesList";

export default function ExpensesOutput({
  expenses,
  expensesPeriod,
}: IExpensesOutputProps) {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}
