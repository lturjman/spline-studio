import { Space_Grotesk, Epilogue } from "next/font/google";
import "./globals.css";
import Menus from "../components/Menus";
import Footer from "../components/Footer";
import { Metadata } from "next";

const epilogue = Epilogue({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-epilogue",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400"],
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "Spline Studio",
  description: "Agence de production audiovisuelle singulière",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/pin.png",
    apple: "/pin.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`flex flex-col min-h-screen ${spaceGrotesk.variable} ${epilogue.variable} antialiased `}
      >
        <Menus />

        <div className="pt-20 flex-1 font-spaceGrotesk">{children}</div>
        <footer className="font-spaceGrotesk">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
