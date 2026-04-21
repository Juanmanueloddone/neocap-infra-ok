"use client";

import { useRouter } from "next/navigation";
import Nav from "../../components/Nav";
import { mockEvent } from "../../lib/mock";

export default function VotePage() {
  const router = useRouter();

  async function handleVote(vote: "si" | "no") {
    try {
      await fetch("/api/claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ playerId: "player-1" }),
      });
    } catch {}

    if (typeof window !== "undefined") {
      localStorage.setItem("lastVote", vote);
    }

    router.push("/result");
  }

  return (
    <main className="app-shell">
      <section className="screen">
        <div className="pill">
          {mockEvent.country} · {mockEvent.topic}
        </div>

        <div className="card strong">
          <div className="small">{mockEvent.actor}</div>
          <h1 className="title" style={{ fontSize: 30 }}>
            {mockEvent.title}
          </h1>
          <p className="subtitle">{mockEvent.summary}</p>
        </div>

        <div className="card">
          <h2 className="title" style={{ fontSize: 28 }}>
            {mockEvent.question}
          </h2>
        </div>

        <div className="stack">
          <button className="button yes" onClick={() => handleVote("si")}>
            SI
          </button>
          <button className="button no" onClick={() => handleVote("no")}>
            NO
          </button>
        </div>

        <p className="small center">+1 NEOC por votar</p>
      </section>

      <Nav />
    </main>
  );
}
