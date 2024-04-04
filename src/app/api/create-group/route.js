import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Group from "@/model/group";

export async function POST(req, res) {
  try {
  
    connectDB();

    const data = await req.json();

    const group = new Group(data);

    group.save();

    return NextResponse.json({ code: "success", data: data });
  } catch (e) {
    return NextResponse.json({ code: "failed", message: e.message });
  }
}
