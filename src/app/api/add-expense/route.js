import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Expense from "@/model/expense";
import connectDB from "@/lib/connectDB";

export async function POST(req, res) {
  try {

    connectDB();

    const data = await req.json();

    var expense = new Expense(data);

    expense.save();

    return NextResponse.json({ code: "success", data: data });
  } catch (e) {
    return NextResponse.json({ code: "failed", message: e.message });
  }
}
