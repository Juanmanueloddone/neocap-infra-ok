import Link from "next/link";
import Nav from "../../components/Nav";

export default function IntroPage() {
  return (
    <main className="app-shell">
      <section className="screen">
        <div className="card strong">
          <div className="kicker">1</div>
          <h1 className="title">Te gobiernan otros</h1>
          <p className="subtitle">
            Vivís en un mundo donde otros deciden por vos y después te piden obediencia.
          </p>
        </div>

        <div className="card">
          <div className="kicker">2</div>
          <h2 className="title" style={{ fontSize: 28 }}>Municipio 0</h2>
          <p className="subtitle">
            Acá votás vos. El valor no sale del mercado. Sale del estado real de la vida.
          </p>
        </div>

        <div className="card">
          <div className="kicker">3</div>
          <h2 className="title" style={{ fontSize: 28 }}>NEOC</h2>
          <p className="subtitle">
            Ganás NEOC por existir en el sistema y por votar. Tus decisiones afectan el Índice NEOC.
          </p>
        </div>

        <Link href="/vote">
          <button className="button primary">Entrar</button>
        </Link>
      </section>

      <Nav />
    </main>
  );
}
