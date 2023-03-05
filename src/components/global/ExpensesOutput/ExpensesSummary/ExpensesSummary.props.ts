import { IExpense } from "../ExpensesOutput.props";

export interface IExpensesSummaryProps {
  readonly periodName: string;
  readonly expenses: IExpense[];
}
