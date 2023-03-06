import React, { useContext } from "react";
import ExpensesOutput from "../../global/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../../../Context/ExpensesContext";

export default function AllExpensesScreen() {
  const { expenses } = useContext(ExpensesContext);

  return <ExpensesOutput expenses={expenses} expensesPeriod='Total' />;
}
