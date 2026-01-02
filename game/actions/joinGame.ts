import { GameState } from "../state/gameState";
import { PlayerId } from "../economy/neoc";

export function joinGame(
  state: GameState,
  playerId: PlayerId
): GameState {
  if (state.players[playerId]) return state;

  return {
    ...state,
    players: {
      ...state.players,
      [playerId]: {
        id: playerId,
        wallet: {
          playerId,
          balance: 0,
        },
      },
    },
  };
}
