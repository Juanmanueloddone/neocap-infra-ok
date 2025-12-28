import { startGame } from "../game/core/game";

export default async function Home() {
  const state = await startGame();

  return (
    <main>
      <h1>NEOCAP</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </main>
  );
}
