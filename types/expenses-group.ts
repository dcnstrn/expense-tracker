import { Expense } from "./expenses";

export type ExpensesGroup = {
    day: string;
    expenses: Expense[];
    total: number;
  };