import { ReactNode, createContext, useReducer } from "react";
import { IExpense } from "../components/global/ExpensesOutput/ExpensesOutput.props";

interface IContext {
  readonly expenses: IExpense[];

  setExpenses(expenses: IExpense[]): void;
  addExpense({ title, amount, date }: IExpense): void;
  deleteExpense(id: string): void;
  updateExpense(ex: IExpense): void;
}

export const ExpensesContext = createContext<IContext>({
  expenses: [],

  setExpenses: () => {},
  addExpense: () => {},
  deleteExpense: () => {},
  updateExpense: () => {},
});

enum ACTIONS {
  SET_EXPENSES = "SET_EXPENSES",
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
    case ACTIONS.SET_EXPENSES:
      const inverted = action.payload.reverse();
      return inverted;
    case ACTIONS.ADD:
      return [{ ...action.payload }, ...state];
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
  const [state, dispatch] = useReducer(reducer, []);

  const setExpenses = (data: IExpense[]) => {
    dispatch({ type: ACTIONS.SET_EXPENSES, payload: data });
  };

  const addExpense = (expData: IExpense) => {
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
      value={{
        expenses: state,
        setExpenses,
        addExpense,
        deleteExpense,
        updateExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
}
