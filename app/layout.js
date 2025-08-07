import {
  Geist,
  Geist_Mono,
  Archivo_Black,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import Menus from "../components/Menus";
import Footer from "../components/Footer";
import TransitionWrapper from "@/components/TransitionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  weight: "300",
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "Spline Studio",
  description: "Agence de production audiovisuelle singulière",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`flex flex-col min-h-screen ${geistSans.variable} ${geistMono.variable} ${archivoBlack.variable} ${spaceGrotesk.variable} antialiased `}
      >
        <Menus />

        <div className="pt-20 flex-1">{children}</div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
