import { GameState, initialGameState } from "./gameState";

let state: GameState = initialGameState;

export function getGameState(): GameState {
  return state;
}

export function setGameState(next: GameState) {
  state = next;
}
