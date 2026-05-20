import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";
const ibmPlexSans = IBM_Plex_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-ibmplexsans",
});

export const metadata: Metadata = {
  title: "Coffee Corner",
  description: "Discover Your Local Coffee Shops",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlexSans.className}>
      <body>{children}</body>
    </html>
  );
}
