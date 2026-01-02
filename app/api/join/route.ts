import { NextResponse } from "next/server";
import { addPlayer } from "../../../game/state/gameState";

export async function POST(req: Request) {
  const formData = await req.formData();
  const playerId = formData.get("playerId");

  if (typeof playerId !== "string") {
    return NextResponse.json({ error: "playerId required" }, { status: 400 });
  }

  addPlayer(playerId);

  return NextResponse.json({ ok: true });
}
