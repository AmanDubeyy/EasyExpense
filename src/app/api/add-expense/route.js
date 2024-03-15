import mongoose from "mongoose";
import { NextResponse } from "next/server";
import MONGO_URL from "@/lib/db";
import Expense from "@/model/expense";

export async function POST(req, res) {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const data = await req.json();

    var expense = new Expense();

    expense.save();

    return NextResponse.json({ code: "success", data: data });
  } catch (e) {
    return NextResponse.json({ code: "failed", message: e.message });
  }
}
