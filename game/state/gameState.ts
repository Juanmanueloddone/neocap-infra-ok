import type { Wallet, PlayerId } from "../economy/neoc";

export interface PlayerState {
  id: PlayerId;
  wallet: Wallet;
  lastSeenTick: number; // ← ESTE ES EL CAMPO QUE FALTABA
}

export interface GameState {
  players: Record<PlayerId, PlayerState>;
  tick: number;
}

export const initialGameState: GameState = {
  players: {},
  tick: 0,
};
