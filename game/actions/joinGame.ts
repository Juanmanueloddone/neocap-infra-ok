import { getState, setState } from "../state/store";
import { PlayerId } from "../economy/neoc";

export function joinGame(playerId: PlayerId) {
  const state = getState();

  if (state.players[playerId]) return;

  state.players[playerId] = {
    id: playerId,
    wallet: { balance: 0 },
  };

  setState({ ...state });
}
