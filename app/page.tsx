import { join } from './actions/join'

export default function Page() {
  return (
    <main>
      <h1>NEOCAP</h1>

      <form action={join}>
        <input type="hidden" name="playerId" value="player-1" />
        <button type="submit">Join</button>
      </form>
    </main>
  )
}
