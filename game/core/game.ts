import { initialGameState, GameState } from "../state/gameState";
import { joinGame, rewardPlayer } from "../actions/playerActions";
import { gameTick } from "../ticks/gameTick";

let state: GameState = initialGameState;

export function startGame(): GameState {
  state = joinGame(state, "player-1");
  state = rewardPlayer(state, "player-1", 10);
  state = gameTick(state);
  return state;
}

export function getState(): GameState {
  return state;
}
