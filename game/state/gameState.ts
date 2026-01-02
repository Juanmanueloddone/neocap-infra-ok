import type { PlayerId } from "../economy/neoc";

export interface PlayerWallet {
  balance: number;
}

export interface PlayerState {
  id: PlayerId;
  wallet: PlayerWallet;
}

export interface GameState {
  players: Record<PlayerId, PlayerState>;
  tick: number;
}

export const initialGameState: GameState = {
  players: {},
  tick: 0,
};
