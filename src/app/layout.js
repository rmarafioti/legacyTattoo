import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  variable: "--assistant",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Legacy Tattoo | Chicago",
  description: "Professional tattoo shop in Chicago",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${assistant.variable}`}>{children}</body>
    </html>
  );
}
