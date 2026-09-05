// components/layout/MobileNav.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Asterisk } from "lucide-react";

interface MobileNavProps {
  links: { name: string; path: string }[];
}

export default function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden flex items-center z-50">
      {/* Hamburger Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-[#F3E2C5] hover:text-[#9CAF9A] transition-colors p-2 -mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9CAF9A] rounded-md"
        aria-label="Open mobile menu"
        aria-expanded={isOpen}
      >
        <Menu className="w-8 h-8" />
      </button>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-[#F3E2C5] flex flex-col"
          >
            {/* Playful Texture Overlay */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#5A0F1B 2px, transparent 2px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Mobile Header (Inside Menu) */}
            <div className="relative z-10 px-6 h-20 flex items-center justify-between border-b-2 border-dashed border-[#5A0F1B]/20">
              <div className="flex items-center gap-1.5 text-[#5A0F1B]">
                <Asterisk className="w-6 h-6 text-[#9CAF9A] animate-[spin_6s_linear_infinite]" />
                <span className="font-black text-2xl tracking-tighter uppercase">
                  Hosso
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#5A0F1B]/50 ml-2 border border-[#5A0F1B]/20 px-2 py-0.5 rounded-sm">
                  World
                </span>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-[#5A0F1B] hover:text-[#9CAF9A] transition-colors p-2 -mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9CAF9A] rounded-md"
                aria-label="Close mobile menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center px-8 gap-8 relative z-10">
              {links.map((link, i) => {
                const isActive = pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.path}
                      className="group flex items-center gap-4 w-max focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9CAF9A] rounded-sm p-1 -ml-1"
                    >
                      <span
                        className={`font-black text-4xl uppercase tracking-tighter transition-colors ${isActive ? "text-[#9CAF9A]" : "text-[#5A0F1B] group-hover:text-[#9CAF9A]"}`}
                      >
                        {link.name}
                      </span>
                      {isActive && (
                        <motion.div layoutId="active-mobile-star">
                          <Asterisk className="w-6 h-6 text-[#9CAF9A]" />
                        </motion.div>
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-8 pt-8 border-t-2 border-dashed border-[#5A0F1B]/20"
              >
                <Link
                  href="/contact"
                  className="group inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9CAF9A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3E2C5] rounded-sm"
                >
                  <span className="flex items-center justify-center border-2 border-[#5A0F1B] px-8 py-4 text-[#5A0F1B] text-sm font-bold uppercase tracking-widest bg-transparent shadow-[4px_4px_0px_0px_#9CAF9A] active:shadow-[0px_0px_0px_0px_#9CAF9A] active:translate-x-[4px] active:translate-y-[4px] transition-all">
                    Let's Work Together
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
