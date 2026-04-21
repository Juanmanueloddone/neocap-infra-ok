import Nav from "../../components/Nav";
import { essaySummary } from "../../lib/mock";

const essayText = `
Vivimos en la realidad en la que aceptamos vivir.
Caso contrario, la cambiaríamos o lucharíamos por cambiarla.

El problema no es un gobierno aislado. El problema es el sistema.
Municipio 0 propone superar la representación cerrada y devolver la decisión al pueblo.

El Índice NEOC mide condiciones reales de vida:
agua, aire, naturaleza, energía, comunidad, paz y salud.

La moneda NEOC no deriva del humo fiduciario.
Deriva del estado real del sistema.

Si el mundo mejora, el índice sube.
Si el mundo se degrada, baja.

NEOCAP convierte esa idea en experiencia:
hechos reales, voto directo, acumulación real de NEOC
e impacto sobre un sistema medible.
`;

export default function EssayPage() {
  return (
    <main className="app-shell">
      <section className="screen">
        <div className="hero">
          <div className="kicker">Ensayo</div>
          <h1 className="title">Neocapitalismo</h1>
          <p className="subtitle">
            La idea madre adentro del juego.
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
          <div className="small">Texto</div>
          <div className="essay-copy">{essayText}</div>
        </div>
      </section>

      <Nav />
    </main>
  );
}
