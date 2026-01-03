import { loadGameState, saveGameState } from "../state/persist";
import { PlayerId } from "../economy/neoc";
import { initialGameState } from "../state/gameState";

export async function claimNEOC(playerId: PlayerId) {
  const state = (await loadGameState()) ?? initialGameState;

  const player = state.players[playerId];
  if (!player) return;

  // evita doble claim en el mismo tick
  if (player.lastSeenTick === state.tick) return;

  const nextState = {
    ...state,
    players: {
      ...state.players,
      [playerId]: {
        ...player,
        lastSeenTick: state.tick,
        wallet: {
          ...player.wallet,
          balance: player.wallet.balance + 1,
        },
      },
    },
  };

  await saveGameState(nextState);
}

