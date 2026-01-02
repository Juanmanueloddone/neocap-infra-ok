import type { Wallet, PlayerId } from "../economy/neoc";

export interface PlayerState {
  id: PlayerId;
  wallet: Wallet;

  // ⬇️ clave: opcional para no romper nada existente
  lastSeenTick?: number;
}

export interface GameState {
  players: Record<PlayerId, PlayerState>;
  tick: number;
}

export const initialGameState: GameState = {
  players: {},
  tick: 0,
};
