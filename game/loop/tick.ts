import { loadGameState, saveGameState } from "../state/persist";
import { initialGameState } from "../state/gameState";

export async function runTick() {
  const state = (await loadGameState()) ?? initialGameState;

  const nextState = {
    ...state,
    tick: state.tick + 1,
  };

  await saveGameState(nextState);

  return nextState;
}
