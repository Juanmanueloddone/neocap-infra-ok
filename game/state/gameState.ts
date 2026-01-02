import type { PlayerId } from "../economy/neoc";

/** Wallet BASE DEL JUEGO */
export interface Wallet {
  playerId: PlayerId;
  balance: number;
}

/** Estado de un jugador */
export interface PlayerState {
  id: PlayerId;
  wallet: Wallet;
}

/** Estado global del juego */
export interface GameState {
  players: Record<PlayerId, PlayerState>;
  tick: number;
}

/** Estado inicial */
export const gameState: GameState = {
  players: {},
  tick: 0,
};

/** ACCIÓN: agregar jugador */
export function addPlayer(playerId: PlayerId) {
  if (gameState.players[playerId]) return;

  gameState.players[playerId] = {
    id: playerId,
    wallet: {
      playerId,
      balance: 0,
    },
  };
}
