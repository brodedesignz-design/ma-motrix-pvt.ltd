"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
      <h1 className="flex items-center gap-2 select-none">
  {/* MA */}
  <span className="text-3xl font-extrabold italic tracking-wide">
    <span className="text-[#C9A227]">M</span>
    <span className="text-[#00ff88]">A</span>
  </span>

  {/* MOTRIX */}
  <span className="text-3xl font-extrabold italic text-white tracking-wide">
    MOTRIX
  </span>

  {/* (Pvt) Ltd. */}
  <span className="text-sm text-gray-300 ml-1 mt-2">
    (Pvt) Ltd.
  </span>
</h1>




        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-black px-6 py-6 flex flex-col gap-4">
          <Link onClick={() => setOpen(false)} href="/">Home</Link>
          <Link onClick={() => setOpen(false)} href="/about">About</Link>
          <Link onClick={() => setOpen(false)} href="/products">Products</Link>
          <Link onClick={() => setOpen(false)} href="/portfolio">Portfolio</Link>
          <Link onClick={() => setOpen(false)} href="/contact">Contact</Link>
        </nav>
      )}
    </header>
  );
}
