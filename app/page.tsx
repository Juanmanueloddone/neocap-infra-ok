"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";

type GameState = {
  tick: number;
  players: Record<
    string,
    {
      wallet: {
        balance: number;
      };
    }
  >;
};

const metrics = [
  { label: "Agua", value: 80 },
  { label: "Aire", value: 61 },
  { label: "Naturaleza", value: 58 },
  { label: "Energía", value: 49 },
  { label: "Comunidad", value: 67 },
  { label: "Paz", value: 52 },
  { label: "Salud", value: 73 },
];

export default function HomePage() {
  const [state, setState] = useState<GameState | null>(null);
  const playerId = "player-1";

  useEffect(() => {
    async function loadState() {
      const res = await fetch("/api/state", { cache: "no-store" });
      const data = await res.json();
      setState(data.state ?? data);
    }

    loadState();
  }, []);

  const balance = state?.players[playerId]?.wallet.balance ?? 0;
  const tick = state?.tick ?? 0;
  const indexNeo = Math.round(
    metrics.reduce((acc, item) => acc + item.value, 0) / metrics.length
  );

  return (
    <main className="app-shell">
      <section className="screen">
        <div className="hero">
          <div className="kicker">Municipio 0</div>
          <h1 className="title">NEOCAP</h1>
          <p className="subtitle">
            Votá hechos reales. Ganá NEOC. Alterá el índice de la vida.
          </p>
        </div>

        <div className="card strong">
          <div className="row">
            <div>
              <div className="small">Saldo</div>
              <p className="big-number">{balance}</p>
            </div>
            <div className="center">
              <div className="small">Tick</div>
              <p className="big-number">{tick}</p>
            </div>
          </div>
          <div className="divider" />
          <div className="small">Índice NEOC</div>
          <p className="big-number">{indexNeo}</p>
        </div>

        <div className="card">
          {metrics.map((item) => (
            <div className="metric-row" key={item.label}>
              <div className="metric-label">{item.label}</div>
              <div className="metric-value">{item.value}</div>
              <div className="metric-bar">
                <span style={{ width: `${item.value}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="stack">
          <Link href="/vote">
            <button className="button primary">Votar ahora</button>
          </Link>
          <Link href="/intro">
            <button className="button secondary">Introducción</button>
          </Link>
          <Link href="/essay">
            <button className="button secondary">Leer ensayo</button>
          </Link>
        </div>
      </section>

      <Nav />
    </main>
  );
}
