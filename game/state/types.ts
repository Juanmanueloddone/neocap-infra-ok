import type { Wallet, PlayerId } from "../economy/neoc";

export interface PlayerState {
  id: PlayerId;
  wallet: Wallet;
}

export interface GameState {
  players: Record<PlayerId, PlayerState>;
  tick: number;
}
