import { Recurrence } from "./recurrence";

export type Expense = {
    id: string;
    amount: number;
    recurrence: Recurrence;
    date: Date;
    note: string;
    category: any;
}