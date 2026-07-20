"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-screen w-80 flex-col border-l border-white/10 bg-[#050816] p-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {/* Header */}
            <div className="mb-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 font-bold text-white">
                  G
                </div>

                <span className="text-xl font-bold text-white">
                  GoFlazz
                </span>
              </div>

              <button
                onClick={onClose}
                className="text-white"
              >
                <X size={28} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-6 text-lg">
              <Link
                href="/#features"
                onClick={onClose}
                className="text-gray-300 transition hover:text-white"
              >
                Features
              </Link>

              <Link
                href="/#security"
                onClick={onClose}
                className="text-gray-300 transition hover:text-white"
              >
                Security
              </Link>

              <Link
                href="/#roadmap"
                onClick={onClose}
                className="text-gray-300 transition hover:text-white"
              >
                Roadmap
              </Link>

              <Link
                href="/docs"
                onClick={onClose}
                className="text-gray-300 transition hover:text-white"
              >
                Docs
              </Link>
            </nav>

            {/* CTA */}
            <div className="mt-auto">
              <Link
                href="/#waitlist"
                onClick={onClose}
                className="block w-full rounded-xl bg-violet-600 py-4 text-center font-semibold text-white transition hover:bg-violet-500"
              >
                Join Waitlist
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
