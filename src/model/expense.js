import mongoose, { Schema } from "mongoose";

const ExpenseSchema = new Schema({
    'title' : String,
    'amount' : Number,
    'category' : String,
    'paid_by' : String,
    'paid_by_user_id' : String,
    'split_between': Array, // [{user_id -> amount }, {..}] 
    'group_name' : String,
    'group_id' : Number
}, {strict : false})

const Expense = mongoose.models.expense || mongoose.model('expense', ExpenseSchema);

export default Expense;