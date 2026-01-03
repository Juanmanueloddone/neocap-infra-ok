export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { loadGameState } from "../../../game/state/persist";
import { initialGameState } from "../../../game/state/gameState";

export async function GET() {
  return NextResponse.json({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    state: (await loadGameState()) ?? initialGameState,
  });
}
