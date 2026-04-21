import Nav from "../../components/Nav";
import Link from "next/link";

const essaySummary = [
  "El problema no es un partido: es el sistema.",
  "Municipio 0 propone decisión directa en lugar de representación cerrada.",
  "El Índice NEOC mide agua, aire, naturaleza, energía, comunidad, paz y salud.",
  "NEOC deriva su valor del estado real del sistema.",
];

export default function EssayPage() {
  return (
    <main className="app-shell">
      <section className="screen">
        <div className="hero">
          <div className="kicker">Ensayo</div>
          <h1 className="title">Neocapitalismo</h1>
          <p className="subtitle">
            La cosmovisión completa detrás de Municipio 0.
          </p>
        </div>

        <div className="card strong">
          <div className="small">Resumen</div>
          <div className="stack" style={{ marginTop: 12 }}>
            {essaySummary.map((item) => (
              <p className="subtitle" key={item}>
                • {item}
              </p>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="small">Leer</div>
          <p className="subtitle">
            Leé el texto completo del ensayo.
          </p>

          <div className="stack" style={{ marginTop: 12 }}>
            <Link href="/neocap.docx.pdf" target="_blank">
              <button className="button secondary">Abrir libro / PDF</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="small">Escuchar</div>
          <p className="subtitle">
            Nota de voz sobre la cosmovisión de NEOCAP.
          </p>

          <div style={{ marginTop: 12 }}>
            <audio controls style={{ width: "100%" }}>
              <source src="/audio/cosmovision-neocap.mp3" type="audio/mpeg" />
              Tu navegador no soporta audio.
            </audio>
          </div>
        </div>
      </section>

      <Nav />
    </main>
  );
}
