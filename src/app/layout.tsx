import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delta Dunării cu Romeo & Rareș | Excursii Autentice",
  description: "Descoperă Delta Dunării cum nu ai mai văzut-o. Excursii cu barca, mâncare tradițională gătită de Diana, cazare rustică în Sfântu Gheorghe.",
  keywords: ["delta dunarii", "excursii delta", "turism delta dunarii", "sfantu gheorghe delta", "barca delta dunarii"],
  openGraph: {
    title: "Delta Dunării cu Romeo & Rareș",
    description: "Excursii autentice în Delta Dunării. Plecare din Mahmudia sau Murghiol.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
