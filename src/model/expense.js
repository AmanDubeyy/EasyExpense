import mongoose, { Schema } from "mongoose";

const ExpenseSchema = new Schema({
    title : String,
    amount : Number,
    group_id : Number,
    category : String,
    paid_by : String,   // user_id who paid
    split_between : Array, // [{user_id -> amount }, {..}] 
    comments : Array
}, {strict : false})

const Expense = mongoose.models.expense || mongoose.model('expense', ExpenseSchema);

export default Expense;