import { COOKIE_ITEMS } from "@/features/cookieClicker/constants/item";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(COOKIE_ITEMS);
}
