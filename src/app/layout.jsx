import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar.jsx/Navbar";
import Footer from "@/components/shared/Footer/Footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Bazar Zone",
  description: "Shopping, Clothing, Shoes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Navbar />
        <main className="min-h-screen max-w-7xl mx-3 xl:mx-auto bg-[color:var(--bg-primary)] text-[color:var(--text-prmary)] text-xs md:text-sm lg:text-base">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
