import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GoHarvest | Agricultural Bussiness|",

  description:
    "GoHarvest, agriculture solutions, agribusiness, farmer empowerment, agri-products, sustainable farming, agri procurement, agricultural technology, farming services, productivity in agriculture, agribusiness support",

  keywords: [
    "GoHarvest",
    "agriculture solutions",
    "agribusiness",
    "farmer empowerment",
    "agri-products",
    "sustainable farming",
    "agri procurement",
    "agricultural technology",
    "farming services",
    "productivity in agriculture",
    "agribusiness support",
  ],

  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
