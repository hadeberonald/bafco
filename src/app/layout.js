import local from "next/font/local";
import "./globals.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

const Inter = local({
  src: [
    {
      path: '../public/fonts/Inter-VariableFont_slnt,wght.ttf',
      weight: '400',
    },
  ],
  variable: '--font-inter',
});

export const metadata = {
  title: "BAFCO - Business and Agricultural Consultancy",
  description: "Business Agriculture Finance Consultancy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
      <Navbar/>
      <Sidebar/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
