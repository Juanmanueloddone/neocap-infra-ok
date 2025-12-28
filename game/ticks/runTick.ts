import { loadGameState, saveGameState } from "../state/persist";
import { gameTick } from "./gameTick";
import { initialGameState } from "../state/gameState";

export async function runTick() {
  const state = (await loadGameState()) ?? initialGameState;
  const next = gameTick(state);
  await saveGameState(next);
  return next;
}
