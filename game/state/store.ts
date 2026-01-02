import { GameState } from "./gameState";

let state: GameState = {
  players: {},
  tick: 0,
};

export function getState(): GameState {
  return state;
}

export function setState(next: GameState) {
  state = next;
}
