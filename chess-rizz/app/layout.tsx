import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";

import {inter, spaceGrotesk} from '@/fonts/fonts'

import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "Chess Rizz",
  description: "Chess tools designed with maximum rizz.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={inter.className}
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
        <footer className="flex items-center justify-center">
          <p>Copyright &copy; 2026 </p>
        </footer>
        
      </body>
    </html>
  );
}
