import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

const inter = Inter ({ subsets: ['latin'], display: 'swap', adjustFontFallback: 'false' });

export const metadata = {
  title: "BAFCO - Business and Agricultural Consultancy",
  description: "Business Agriculture Finance Consultancy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      <Sidebar/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
