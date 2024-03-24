import mongoose from "mongoose";
import { NextResponse } from "next/server";
import MONGO_URL from "@/lib/db";

export async function POST(req, res) {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const data = await req.json();

    return NextResponse.json({ code: "success", data: data });
  } catch (e) {
    return NextResponse.json({ code: "failed", message: e.message });
  }
}
