import React from "react";
import { View, Text } from "react-native";
import ExpensesOutput from "../../global/ExpensesOutput/ExpensesOutput";

export const MOCK = [
  {
    id: "1",
    title: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-03-05"),
  },
  {
    id: "2",
    title: "Macbook Pro",
    amount: 1999.99,
    date: new Date("2023-03-06"),
  },
  {
    id: "3",
    title: "IPhone 14 pro",
    amount: 800.99,
    date: new Date("2023-03-07"),
  },
];

export default function AllExpensesScreen() {
  return <ExpensesOutput expenses={MOCK} expensesPeriod='Total' />;
}
