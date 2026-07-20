"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-lg font-bold text-white">
              G
            </div>

            <span className="text-xl font-bold text-white">
              GoFlazz
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 lg:flex">

            <Link href="/#features" className="text-gray-300 hover:text-white">
              Features
            </Link>

            <Link href="/#security" className="text-gray-300 hover:text-white">
              Security
            </Link>

            <Link href="/#roadmap" className="text-gray-300 hover:text-white">
              Roadmap
            </Link>

            <Link href="/docs" className="text-gray-300 hover:text-white">
              Docs
            </Link>

            <Link
              href="/#waitlist"
              className="rounded-xl bg-violet-600 px-5 py-3 font-semibold transition hover:bg-violet-500"
            >
              Join Waitlist
            </Link>

          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="text-white lg:hidden"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
