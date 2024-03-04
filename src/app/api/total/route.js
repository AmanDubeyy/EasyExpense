import mongoose from "mongoose"
import { NextResponse } from "next/server"
import MONGO_URL from "@/lib/db"
import Expense from "../../../model/expense";

export async function GET() {
  try{

    mongoose.connect(MONGO_URL);
    
    const data = await Expense.find({});

    return NextResponse.json({code : 'success', data : data})
  } catch(e){
    return NextResponse.json({code : 'failed', message : e.message})
  }
  
}