import { Open_Sans } from "next/font/google";
import Chatbot from "./features/Chatbot";
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
    <html lang="en">
      <body className={`${openSans.className}`}>
        {children}
        <Chatbot />
      </body>
    </html>
  );
  
}
