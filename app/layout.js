import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SideBar from "./components/Portfolio";
import SideColumn from "./components/SideColumn";
import Loader from "./components/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PhotoArt",
  description: "gallery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Loader />
        <SideColumn />
        {children}
        <Footer />
      </body>
    </html>
  );
}
