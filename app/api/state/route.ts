import { NextResponse } from "next/server";
import { loadGameState } from "../../../game/state/persist";

export async function GET() {
  const state = await loadGameState();

  return NextResponse.json(
    state ?? {
      players: {},
      tick: 0,
    }
  );
}
