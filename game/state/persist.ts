import { supabase } from "../../lib/supabase";
import { GameState } from "./gameState";

export async function saveGameState(state: GameState) {
  await supabase.from("game_state").upsert({
    id: "global",
    state,
    updated_at: new Date().toISOString(),
  });
}

export async function loadGameState(): Promise<GameState | null> {
  const { data } = await supabase
    .from("game_state")
    .select("state")
    .eq("id", "global")
    .single();

  return data?.state ?? null;
}
