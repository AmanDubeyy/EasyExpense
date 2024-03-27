import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";

export async function POST(req, res) {
  try {
    connectDB();

    const data = await req.json();

    return NextResponse.json({ code: "success", data: data });
  } catch (e) {
    return NextResponse.json({ code: "failed", message: e.message });
  }
}
