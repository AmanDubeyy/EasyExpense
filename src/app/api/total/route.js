import mongoose from "mongoose";
import { NextResponse } from "next/server";
import MONGO_URL from "@/lib/db";
import Expense from "../../../model/expense";

export async function GET() {
  try {
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    var data = await Expense.find({});

    mongoose.disconnect();
    
    return NextResponse.json({ code: "success", data: data });
  } catch (e) {
    return NextResponse.json({ code: "failed", message: e.message });
  }
}
