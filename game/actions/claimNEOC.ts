import { loadGameState, saveGameState } from "../state/persist";
import { mintNEOC } from "../economy/neoc";
import { PlayerId } from "../economy/neoc";

export async function claimNEOC(playerId: PlayerId) {
  const state = await loadGameState();
  if (!state) return;

  const player = state.players[playerId];
  if (!player) return;

  const updatedPlayer = {
    ...player,
    wallet: mintNEOC(player.wallet, 1),
  };

  const nextState = {
    ...state,
    players: {
      ...state.players,
      [playerId]: updatedPlayer,
    },
  };

  await saveGameState(nextState);
}
