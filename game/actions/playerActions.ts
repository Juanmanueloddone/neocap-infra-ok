import { initialGameState, GameState } from "../state/gameState";
import { mintNEOC } from "../economy/neoc";

export function joinGame(state: GameState, playerId: string): GameState {
  if (state.players[playerId]) return state;

  return {
    ...state,
    players: {
      ...state.players,
      [playerId]: {
        id: playerId,
        wallet: { playerId, balance: 0 },
      },
    },
  };
}

export function rewardPlayer(
  state: GameState,
  playerId: string,
  amount: number
): GameState {
  const player = state.players[playerId];
  if (!player) return state;

  return {
    ...state,
    players: {
      ...state.players,
      [playerId]: {
        ...player,
        wallet: mintNEOC(player.wallet, amount),
      },
    },
  };
}
