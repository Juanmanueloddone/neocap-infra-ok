import { initialGameState, GameState } from "./gameState";

let state: GameState = structuredClone(initialGameState);

export function getState() {
  return state;
}

export function setState(next: GameState) {
  state = next;
}
