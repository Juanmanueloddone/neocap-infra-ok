import { NextResponse } from "next/server";
import { claimNEOC } from "../../../game/actions/claimNEOC";

export async function POST(req: Request) {
  const { playerId } = await req.json();

  if (!playerId) {
    return NextResponse.json({ error: "playerId required" }, { status: 400 });
  }

  await claimNEOC(playerId);

  return NextResponse.json({ ok: true });
}
