import techData from "@/data/techData.json";
import { NextResponse } from "next/server";

export const GET = () => {
  console.log("API Response Data:", techData);
  return NextResponse.json(techData);
};