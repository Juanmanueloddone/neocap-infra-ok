import { loadGameState, saveGameState } from "../state/persist";
import { PlayerId } from "../economy/neoc";

export async function joinGame(playerId: PlayerId) {
  const state =
    (await loadGameState()) ?? {
      players: {},
      tick: 0,
    };

  if (state.players[playerId]) return;

  await saveGameState({
    ...state,
    players: {
      ...state.players,
      [playerId]: {
        id: playerId,
        lastSeenTick: state.tick, // 🔧 ESTA LÍNEA ES LA CLAVE
        wallet: {
          playerId,
          balance: 0,
        },
      },
    },
  });
}


