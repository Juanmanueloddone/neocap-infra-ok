import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/">Inicio</Link>
      <Link href="/vote">Votar</Link>
      <Link href="/essay">Ensayo</Link>
      <Link href="/profile">Perfil</Link>
    </nav>
  );
}
