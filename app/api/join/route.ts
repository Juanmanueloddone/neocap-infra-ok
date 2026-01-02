import { NextResponse } from "next/server";
import { joinGame } from "../../../game/actions/joinGame";

export async function POST(req: Request) {
  const formData = await req.formData();
  const playerId = formData.get("playerId");

  if (typeof playerId !== "string") {
    return NextResponse.json({ error: "playerId required" }, { status: 400 });
  }

  await joinGame(playerId);

  return NextResponse.json({ ok: true });
}
