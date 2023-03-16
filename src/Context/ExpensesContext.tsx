import { ReactNode, createContext, useReducer } from "react";
import { IExpense } from "../components/global/ExpensesOutput/ExpensesOutput.props";

interface IContext {
  readonly expenses: IExpense[];

  addExpense({ title, amount, date }: Omit<IExpense, "id">): void;
  deleteExpense(id: string): void;
  updateExpense(ex: IExpense): void;
}

export const ExpensesContext = createContext<IContext>({
  expenses: [],
  addExpense: () => {},
  deleteExpense: () => {},
  updateExpense: () => {},
});

enum ACTIONS {
  ADD = "ADD",
  DELETE = "DELETE",
  UPDATE = "UPDATE",
}

interface ActionType {
  type: ACTIONS;
  payload: any;
}

function reducer(state = MOCK, action: ActionType) {
  switch (action.type) {
    case ACTIONS.ADD:
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];
    case ACTIONS.UPDATE:
      const updItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      const newArr = [
        ...state.slice(0, updItemIndex),
        action.payload,
        ...state.slice(updItemIndex + 1),
      ];
      return newArr;
    case ACTIONS.DELETE:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

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
  {
    id: "14",
    title: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-03-01"),
  },
  {
    id: "25",
    title: "Macbook Pro",
    amount: 1999.99,
    date: new Date("2023-03-06"),
  },
  {
    id: "32",
    title: "IPhone 14 pro",
    amount: 800.99,
    date: new Date("2023-03-01"),
  },
  {
    id: "11",
    title: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-03-05"),
  },
  {
    id: "22",
    title: "Macbook Pro",
    amount: 1999.99,
    date: new Date("2023-03-06"),
  },
  {
    id: "33",
    title: "IPhone 14 pro",
    amount: 800.99,
    date: new Date("2023-03-07"),
  },
];

export default function ExpensesContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, MOCK);

  const addExpense = (expData: Omit<IExpense, "id">) => {
    dispatch({ type: ACTIONS.ADD, payload: expData });
  };

  const deleteExpense = (id: string) => {
    dispatch({ type: ACTIONS.DELETE, payload: id });
  };

  const updateExpense = (expData: IExpense) => {
    dispatch({ type: ACTIONS.UPDATE, payload: expData });
  };

  return (
    <ExpensesContext.Provider
      value={{ expenses: state, addExpense, deleteExpense, updateExpense }}
    >
      {children}
    </ExpensesContext.Provider>
  );
}
