import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Group from "@/model/group";
import GroupMember from "@/model/group_members";

export async function POST(req, res) {
  try {
    connectDB();

    const data = await req.json();

    const group = new Group(data.data);
    const savedGroup = await group.save();
    GroupMember.addMember(savedGroup._id, savedGroup.group_name, data?.data?.user_id, data?.data?.user_id);

    return NextResponse.json({ code: "success", data: data });  
  } catch (e) {
    return NextResponse.json({ code: "failed", message: e.message });
  }
}
