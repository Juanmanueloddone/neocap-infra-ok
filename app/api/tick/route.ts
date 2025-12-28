import { runTick } from "../../../game/ticks/runTick";

export async function GET() {
  await runTick();
  return Response.json({ ok: true });
}
