import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";

import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "Chess Rizz",
  description: "Chess tools designed with maximum rizz.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className="bg-chess-bg min-h-full flex flex-col gap-8">

        <Nav 
            links={[
                {url:"/"           , text:"Home"       },
                {url:"/tournaments", text:"Tournaments"},
                {url:"/statistics" , text:"Statistics" },
                {url:"/study"      , text:"Study"      },
                {url:"/login"      , text:"Login"      },
            ]}
        />

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
