import mongoose, { Schema } from "mongoose";

const ExpenseSchema = new Schema({
    'title' : String,
    'amount' : Number,
    'category' : String,
    'paid_by' : String,
    'user_id' : Number,
    'split_between': Array, // [user_id -> amount ] 
    'group_name' : String,
    'group_id' : Number
})

const Expense = mongoose.models.expense || mongoose.model('expense', ExpenseSchema);

export default Expense;