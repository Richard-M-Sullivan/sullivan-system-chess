import type { Metadata } from "next";
import "./globals.css";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Chess Rizz",
  description: "Chess tools designed with maximum rizz.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col gap-8">

        <header>
        <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/tournaments">Tournaments</Link></li>
              <li><Link href="/statistics">Statistics</Link></li>
              <li><Link href="/study">Study</Link></li>
              <li><Link href="/login">Login</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <p>copyright Chess Rizz 2026</p>
        </footer>
        
      </body>
    </html>
  );
}
