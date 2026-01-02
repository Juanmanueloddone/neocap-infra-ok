import { loadGameState, saveGameState } from "../state/persist";
import { PlayerId } from "../economy/neoc";

export async function claimNEOC(playerId: PlayerId) {
  const state = await loadGameState();
  if (!state) return;

  const player = state.players[playerId];
  if (!player) return;

  // Evita reclamar más de una vez por tick
  if (player.lastSeenTick === state.tick) return;

  const updatedPlayer = {
    ...player,
    lastSeenTick: state.tick,
    wallet: {
      ...player.wallet,
      balance: player.wallet.balance + 1,
    },
  };

  await saveGameState({
    ...state,
    players: {
      ...state.players,
      [playerId]: updatedPlayer,
    },
  });
}
