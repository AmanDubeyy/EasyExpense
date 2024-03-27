import { NextResponse } from "next/server";
import Expense from "../../../model/expense";
import connectDB from "@/lib/connectDB";

export async function GET() {
  try {
  
    connectDB();

    var data = await Expense.find({});

    return NextResponse.json({ code: "success", data: data });
  } catch (e) {
    return NextResponse.json({ code: "failed", message: e.message });
  }
}
