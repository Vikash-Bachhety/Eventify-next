"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideNavbarPaths = ["/login", "/register"];

  return (
    <html lang="en">
      <body>
        {!hideNavbarPaths.includes(pathname) && <Navbar />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
