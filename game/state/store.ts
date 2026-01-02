import { initialGameState, GameState } from "./gameState";

let state: GameState = initialGameState;

export function getState(): GameState {
  return state;
}

export function setState(next: GameState) {
  state = next;
}
