import { NextResponse } from "next/server";

export async function POST() {
  // más adelante: insertar en Supabase
  console.log("Player joined");

  return NextResponse.redirect(new URL("/", process.env.NEXT_PUBLIC_BASE_URL));
}
