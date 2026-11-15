import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: { default: "SIMIK — The Long Summer", template: "%s — SIMIK" }, description: "Considered summer clothing from SIMIK, an independent Bangladeshi menswear label.", metadataBase: new URL("https://simik.vercel.app") };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
