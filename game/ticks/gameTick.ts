import { GameState } from "../state/gameState";
import { mintNEOC } from "../economy/neoc";

export function gameTick(state: GameState): GameState {
  const nextPlayers = Object.fromEntries(
    Object.entries(state.players).map(([playerId, player]) => [
      playerId,
      {
        ...player,
        wallet: mintNEOC(player.wallet, 1),
      },
    ])
  );

  return {
    ...state,
    tick: state.tick + 1,
    players: nextPlayers,
  };
}
