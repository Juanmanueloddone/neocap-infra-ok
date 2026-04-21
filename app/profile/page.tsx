"use client";

import { useEffect, useState } from "react";
import Nav from "../../components/Nav";

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

export default function ProfilePage() {
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

  return (
    <main className="app-shell">
      <section className="screen">
        <div className="hero">
          <div className="kicker">Perfil</div>
          <h1 className="title">Tu saldo</h1>
        </div>

        <div className="card strong">
          <div className="row">
            <div>
              <div className="small">NEOC total</div>
              <p className="big-number">{balance}</p>
            </div>
            <div className="center">
              <div className="small">Tick</div>
              <p className="big-number">{tick}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="metric-row">
            <div className="metric-label">Ganado por tick</div>
            <div className="metric-value">{tick}</div>
          </div>
          <div className="metric-row">
            <div className="metric-label">Ganado por votos</div>
            <div className="metric-value">mock</div>
          </div>
          <div className="metric-row">
            <div className="metric-label">Votos emitidos</div>
            <div className="metric-value">mock</div>
          </div>
        </div>
      </section>

      <Nav />
    </main>
  );
}
