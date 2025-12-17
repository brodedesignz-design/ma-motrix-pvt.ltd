import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import { Montserrat } from "next/font/google";

/* BRAND FONT (LOGO STYLE) */
const brandFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
      <body
        className={`${brandFont.className} antialiased bg-black text-white`}
      >
        {/* HEADER */}
        <Header />

        {/* MAIN */}
        <main className="pt-20 min-h-screen">{children}</main>

        {/* FOOTER */}
        <footer className="bg-zinc-900 border-t border-white/10 py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold tracking-wide mb-4">
                  MA MOTRIX (PVT) LTD
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Precision engineering for the modern world. Delivering
                  excellence in every component.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4 tracking-wide">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/" className="hover:text-white">Home</a></li>
                  <li><a href="/about" className="hover:text-white">About Us</a></li>
                  <li><a href="/products" className="hover:text-white">Products</a></li>
                  <li><a href="/portfolio" className="hover:text-white">Portfolio</a></li>
                  <li><a href="/contact" className="hover:text-white">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 tracking-wide">
                  Products
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Hydraulic Hoses</li>
                  <li>Industrial Fittings</li>
                  <li>Automotive Parts</li>
                  <li>Teflon Pipes</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 tracking-wide">
                  Contact
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>mamotrixpvtltd@gmail.com</li>
                  <li>0325-3450683</li>
                  <li>
                    Shop no.20 Ground floor Madina Plaza opposite Mama Parsi
                    School, MA Jinnah Road, Karachi
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
