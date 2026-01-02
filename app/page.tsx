export default function Home() {
  return (
    <main style={{ padding: 32 }}>
      <h1>NEOCAP</h1>
      <p>Juego en curso</p>

      <form action="/api/join" method="post">
        <button type="submit">Join</button>
      </form>
    </main>
  );
}
