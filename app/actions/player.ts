"use server";

import { loadGameState, saveGameState } from "../../game/state/persist";
import { initialGameState } from "../../game/state/gameState";
import { joinGame, rewardPlayer } from "../../game/actions/playerActions";
import { burnNEOC } from "../../game/economy/neoc";

export async function join(playerId: string) {
  const state = (await loadGameState()) ?? initialGameState;
  const next = joinGame(state, playerId);
  await saveGameState(next);
}

export async function earn(playerId: string, amount: number) {
  const state = (await loadGameState()) ?? initialGameState;
  const next = rewardPlayer(state, playerId, amount);
  await saveGameState(next);
}

export async function spend(playerId: string, amount: number) {
  const state = (await loadGameState()) ?? initialGameState;
  const player = state.players[playerId];
  if (!player) return;

  const updated = {
    ...state,
    players: {
      ...state.players,
      [playerId]: {
        ...player,
        wallet: burnNEOC(player.wallet, amount),
      },
    },
  };

  await saveGameState(updated);
}
