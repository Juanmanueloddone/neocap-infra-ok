"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import { mockEvent } from "../../lib/mock";

export default function ResultPage() {
  const [vote, setVote] = useState<"si" | "no" | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("lastVote");
    if (saved === "si" || saved === "no") {
      setVote(saved);
    }
  }, []);

  return (
    <main className="app-shell">
      <section className="screen">
        <div className="card strong center">
          <div className="small">Tu voto</div>
          <p className={vote === "si" ? "result-yes" : "result-no"}>
            {vote?.toUpperCase() ?? "-"}
          </p>
          <div className="divider" />
          <div className="small">Voto global</div>
          <p className="big-number">92%</p>
          <p className="subtitle">{vote === "si" ? "votó SI" : "votó NO"}</p>
        </div>

        <div className="card">
          <p className="subtitle">{mockEvent.line}</p>
        </div>

        <div className="card center">
          <div className="small">Recompensa</div>
          <p className="big-number">+1 NEOC</p>
        </div>

        <Link href="/vote">
          <button className="button primary">Siguiente</button>
        </Link>
      </section>

      <Nav />
    </main>
  );
}
