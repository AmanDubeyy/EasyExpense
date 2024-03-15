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

    mongoose.disconnect();

    const data = await req.json();

    var expense = new Expense(data);

    expense
      .save()
      .then((item) => {
        return NextResponse.json({ code: "success", data: item });
      })
      .catch((err) => {
        return NextResponse.json({ code: "failed", message: err });
      });
  } catch (e) {
    return NextResponse.json({ code: "failed", message: e.message });
  }
}
