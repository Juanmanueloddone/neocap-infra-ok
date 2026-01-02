import type { GameState } from "./types";

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
