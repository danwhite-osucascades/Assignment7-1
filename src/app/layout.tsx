import type { Metadata } from "next";

import { PokemonProvider } from "@/app/contexts/pokemonContext";
import NavBar from "./components/navBar";

export const metadata: Metadata = {
  title: "Assignment 8-1",
  description: "Multi-page app with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PokemonProvider>
          <header><NavBar /></header>
          <main>{children}</main>
        </PokemonProvider>
      </body>
    </html>
  );
}
