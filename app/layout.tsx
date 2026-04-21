import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "NEOCAP",
  description: "Municipio 0",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
