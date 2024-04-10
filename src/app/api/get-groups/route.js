import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import GroupMember from "@/model/group_members";

export async function POST(req, res) {
    try {
        await connectDB(); 

        var {user_id} = await req.json();

        if (!user_id) {
            return NextResponse.json({ code: "failed", message: "Missing user_id parameter" });
        }
        
        const data = await GroupMember.find({ "user_id": user_id }).select('group_id group_name');        

        return NextResponse.json({ code: "success", data : data });

    } catch (e) {
        return NextResponse.json({ code: "failed", message: e.message });
    }
}
