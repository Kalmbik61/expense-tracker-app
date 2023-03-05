import ExpensesOutput from "../../global/ExpensesOutput/ExpensesOutput";
import { MOCK } from "../AllExpensesScreen/AllExpensesScreen";

export default function RecentExpensesScreen() {
  return <ExpensesOutput expenses={MOCK} expensesPeriod='Last 7 Days' />;
}
