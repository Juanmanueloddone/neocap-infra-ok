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

let gameState: GameState = structuredClone(initialGameState);

export function getGameState(): GameState {
  return gameState;
}

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

