import { join, earn, spend } from "./actions/player";
import { loadGameState } from "../game/state/persist";

export default async function Home() {
  const state = await loadGameState();

  return (
    <main>
      <h1>NEOCAP</h1>

      <form action={join}>
        <input type="hidden" name="playerId" value="player-1" />
        <button>Join</button>
      </form>

      <form action={earn}>
        <input type="hidden" name="playerId" value="player-1" />
        <input type="hidden" name="amount" value="5" />
        <button>Earn 5 NEOC</button>
      </form>

      <form action={spend}>
        <input type="hidden" name="playerId" value="player-1" />
        <input type="hidden" name="amount" value="3" />
        <button>Spend 3 NEOC</button>
      </form>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </main>
  );
}
