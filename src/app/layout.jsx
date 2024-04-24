import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar.jsx/Navbar";
import Footer from "@/components/shared/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bazar Zone",
  description: "Shopping, Clothing, Shoes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
