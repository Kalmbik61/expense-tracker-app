import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../../global/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../../../Context/ExpensesContext";
import { getDateMinusDays } from "../../../utils/date";
import { fetchExpenses } from "../../../utils/api/http";
import Loading from "../../global/Loading/Loading";
import ErrorOverlay from "../../global/ErrorOverlay/ErrorOverlay";

export default function RecentExpensesScreen() {
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const resentExpenses = expenses.filter((ex) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return ex.date >= date7DaysAgo && ex.date <= today;
  });

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const expenses = await fetchExpenses();
        if (!expenses) return;
        setExpenses(expenses);
      } catch (e) {
        console.error(e);
        setError("Could not fetch expenses!");
        setLoading(false);
      }
      setLoading(false);
    })();
  }, []);

  const onErrHandler = () => setError("");

  if (!!error && !loading)
    return <ErrorOverlay message={error} onConfirm={onErrHandler} />;

  return loading ? (
    <Loading />
  ) : (
    <ExpensesOutput expenses={resentExpenses} expensesPeriod='Last 7 Days' />
  );
}
