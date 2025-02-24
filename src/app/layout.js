// src/app/layout.js

import { Open_Sans } from "next/font/google";
import Chatbot from "./features/Chatbot";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./ui/CartContext";
import NavBar from "./ui/Navbar";
import Footer from "./ui/Footer";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "empress",
  description: "e-Commerce website",
};

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang="en">
        <body className={`${openSans.className}`}>
          <header className=" sticky top-0 left-0 z-50">
            <NavBar />
          </header>
          {children}
          <Chatbot />
          <Footer />
          <Toaster />
        </body>
      </html>
    </CartProvider>
  );
}
