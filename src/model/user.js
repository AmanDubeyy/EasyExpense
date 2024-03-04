import mongoose, { Schema } from "mongoose";

const user = new Schema({
    name : String,
    email : String,
    phone : Number
})