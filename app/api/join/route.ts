import { NextResponse } from "next/server";
import { getGameState, setGameState } from "@/game/state/store";
import { joinGame } from "@/game/actions/joinGame";

export async function POST(req: Request) {
  const formData = await req.formData();
  const playerId = formData.get("playerId");

  if (typeof playerId !== "string") {
    return NextResponse.json({ error: "playerId required" }, { status: 400 });
  }

  const state = getGameState();
  const next = joinGame(state, playerId);
  setGameState(next);

  return NextResponse.json({ ok: true });
}
