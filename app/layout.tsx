import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MA MOTRIX (PVT) LTD - The Power of Precision",
  description:
    "Industrial solutions for automotive spare parts, hydraulic hoses, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-black text-white">
        {/* HEADER (mobile + home inside) */}
        <Header />

        {/* MAIN */}
        <main className="pt-20 min-h-screen">{children}</main>

        {/* FOOTER – SAME AS BEFORE */}
        <footer className="bg-zinc-900 border-t border-white/10 py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">
                  MA MOTRIX (PVT) LTD
                </h3>
                <p className="text-gray-400 text-sm">
                  Precision engineering for the modern world. Delivering
                  excellence in every component.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/products">Products</a></li>
                  <li><a href="/portfolio">Portfolio</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Products</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Hydraulic Hoses</li>
                  <li>Industrial Fittings</li>
                  <li>Automotive Parts</li>
                  <li>Teflon Pipes</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>mamotrixpvtltd@gmail.com</li>
                  <li>0325-3450683</li>
                  <li>
                    Shop no.20 Ground floor Madina Plaza opposite mama parsi
                    school main MA Jinnah Road, Karachi
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
              © 2025 MA MOTRIX (PVT) LTD. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
