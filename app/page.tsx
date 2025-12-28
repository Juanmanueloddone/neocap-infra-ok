import { startGame, getState } from "../game/core/game";

startGame();
const state = getState();

export default function Home() {
  return (
    <main>
      <h1>NEOCAP</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </main>
  );
}
