import mongoose from "mongoose"
import { NextResponse } from "next/server"
import MONGO_URL from "@/lib/db"

export async function GET() {
  try{

    mongoose.connect(MONGO_URL);
    /*
      
    */

    mongoose.disconnect();
  } catch(e){
    NextResponse.json({code : 'failed', message : e.message})
  }
  
}