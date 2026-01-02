import type { Wallet, PlayerId } from "../economy/neoc";

export interface PlayerState {
  id: PlayerId;
  wallet: Wallet;
}

export interface GameState {
  players: Record<PlayerId, PlayerState>;
  tick: number;
}

export const initialGameState: GameState = {
  players: {},
  tick: 0,
};

let gameState: GameState = initialGameState;

export function addPlayer(playerId: PlayerId) {
  if (gameState.players[playerId]) return;

  gameState.players[playerId] = {
    id: playerId,
    wallet: {
      balance: 0,
    },
  };
}

export function getGameState() {
  return gameState;
}
