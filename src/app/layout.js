import { Assistant } from "next/font/google";
import { Cactus_Classical_Serif } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  variable: "--assistant",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const cactus = Cactus_Classical_Serif({
  variable: "--cactus",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Legacy Tattoo | Chicago",
  description: "Professional tattoo shop in Chicago",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${assistant.variable} ${cactus.variable}`}>
        {children}
      </body>
    </html>
  );
}
