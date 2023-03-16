import axios from "axios";
import { IExpense } from "../../components/global/ExpensesOutput/ExpensesOutput.props";

const URL = "https://react-native-test-39974-default-rtdb.firebaseio.com";

export const storeExpenseApi = async (data: Omit<IExpense, "id">) => {
  const res = await axios.post(`${URL}/expenses.json`, {
    data,
  });
  return res.data.name as string;
};

export const updateExpensesApi = (id: string, data: Omit<IExpense, "id">) => {
  return axios.put(`${URL}/expenses/${id}.json`, {
    data,
  });
};

export const deleteExpenseApi = (id: string) => {
  return axios.delete(`${URL}/expenses/${id}.json`);
};

export const fetchExpenses = async () => {
  const expenses: IExpense[] = [];

  const res = await axios.get(`${URL}/expenses.json`);
  for (const key in res.data) {
    const ex = {
      id: key,
      amount: res.data[key].data.amount,
      date: new Date(res.data[key].data.date),
      title: res.data[key].data.title,
    };
    expenses.push(ex as unknown as IExpense);
  }

  return expenses;
};
