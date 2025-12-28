import { GameState } from "../state/gameState";

export function gameTick(state: GameState): GameState {
  return {
    ...state,
    tick: state.tick + 1,
  };
}
