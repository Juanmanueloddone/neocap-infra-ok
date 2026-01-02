import { getState, setState } from "../state/store";
import type { PlayerId } from "../economy/neoc";

export function joinGame(playerId: PlayerId) {
  const state = getState();

  if (state.players[playerId]) return;

  setState({
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
  });
}
