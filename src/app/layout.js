import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import Navbar from "@/components/Navbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bio Spray Plus",
  description: "Bio Spray Plus Colostrum Liquid.",
  icons: {
    icon: [
      '/favicon.ico?v=1',
    ],
    apple: [
      'apple-touch-icon.png?v=4',
    ],
    shortcut: [
      'apple-touch-icon.png',
    ]
    },
    keywords: [
          "bio spray, bio spray plus,bio spray plus benefits,bio spray plus colostrum,liquid,bio spray plus price,bio spray plus review,bio spray price,biospray colostrum liquid,revolutic bio spray,revolutic bio spray plus colostrum liquid,বায়ো স্প্রে প্লাস,বায়ো স্প্রে প্লাস এর উপকারিতা,বায়ো স্প্রে প্লাস এর দাম কত,বায়ো স্প্রে প্লাস সাইড এফেক্টস,বায়ো স্প্রে প্লাস এর কাজ কি,bio spray plus colostrum liquid,bio spray plus in bangladesh,bio spray plus,bio spray plus colostrum liquid,bio spray plus malaysia,bio spray plus price bangladesh,bio spray plus price,bio spray plus review,Nutric,Nutric Group,Nutric Group Malaysia,Nutric Group Bangladesh,Nutric Group Dhaka,"
    ] 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop />
        <Navbar />     
        {children}
        <Footer />
        </body>
    </html>
  );
}
