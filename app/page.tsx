"use client";

import { useEffect, useState } from "react";

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

export default function Home() {
  const [state, setState] = useState<GameState | null>(null);
  const playerId = "player-1";

  async function loadState() {
    const res = await fetch("/api/state");
    const data = await res.json();
    setState(data.state ?? data);
  }

  async function runTick() {
    await fetch("/api/tick", { method: "POST" });
    await loadState();
  }

  async function claim() {
    await fetch("/api/claim", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ playerId }),
    });
    await loadState();
  }

  useEffect(() => {
    loadState();
  }, []);

  const balance = state?.players[playerId]?.wallet.balance ?? 0;

  return (
    <main style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>NEOCAP — Debug UI</h1>

      <p>
        <strong>Tick:</strong> {state?.tick ?? "-"}
      </p>

      <p>
        <strong>Balance:</strong> {balance} NEOC
      </p>

      <div style={{ marginTop: 20 }}>
        <button onClick={runTick}>Run Tick</button>
        <button onClick={claim} style={{ marginLeft: 10 }}>
          Claim NEOC
        </button>
      </div>
    </main>
  );
}
