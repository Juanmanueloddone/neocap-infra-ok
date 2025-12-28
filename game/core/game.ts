import { initialGameState, GameState } from "../state/gameState";
import { joinGame, rewardPlayer } from "../actions/playerActions";
import { gameTick } from "../ticks/gameTick";
import { loadGameState, saveGameState } from "../state/persist";

let state: GameState = initialGameState;

export async function startGame(): Promise<GameState> {
  const persisted = await loadGameState();
  state = persisted ?? state;

  state = joinGame(state, "player-1");
  state = rewardPlayer(state, "player-1", 10);
  state = gameTick(state);

  await saveGameState(state);
  return state;
}

export function getState(): GameState {
  return state;
}
