import { IExpense } from "../../../global/ExpensesOutput/ExpensesOutput.props";

export interface IExpenseFormProps {
  readonly expense?: IExpense;

  onCancel(): void;
}
