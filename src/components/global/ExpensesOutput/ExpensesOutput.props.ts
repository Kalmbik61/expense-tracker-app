export interface IExpense {
  readonly amount: number;
  readonly id: string;
  readonly title: string;
  readonly date: Date;
}

export interface IExpensesOutputProps {
  readonly expenses: IExpense[];
  readonly expensesPeriod: string;
}
