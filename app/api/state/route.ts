export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { loadGameState } from "../../../game/state/persist";
import { initialGameState } from "../../../game/state/gameState";

export async function GET() {
  const state = await loadGameState();

  return NextResponse.json(state ?? initialGameState);
}
