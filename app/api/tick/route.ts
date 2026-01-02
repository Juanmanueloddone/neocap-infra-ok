import { runTick } from "../../../game/ticks/runTick";

export async function POST() {
  await runTick();
  return Response.json({ ok: true });
}
