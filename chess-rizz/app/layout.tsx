import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chess Rizz",
  description: "Chess tools designed with maximum rizz.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
