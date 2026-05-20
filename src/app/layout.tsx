import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sidineia Danetti | Terapia Sistêmica e Constelação Familiar",
  description: "Entenda como a Terapia Sistêmica e a Constelação Familiar destravam o sistema ao seu redor que está impedindo sua vida de avançar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased overflow-x-hidden bg-surface text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-container">
        {children}
      </body>
    </html>
  );
}
