import { useContext } from "react";
import ExpensesOutput from "../../global/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../../../Context/ExpensesContext";
import { getDateMinusDays } from "../../../utils/date";

export default function RecentExpensesScreen() {
  const { expenses } = useContext(ExpensesContext);

  const resentExpenses = expenses.filter((ex) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return ex.date >= date7DaysAgo && ex.date <= today;
  });
  // console.log(expenses);
  return (
    <ExpensesOutput expenses={resentExpenses} expensesPeriod='Last 7 Days' />
  );
}
