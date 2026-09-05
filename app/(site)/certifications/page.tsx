// app/(site)/certificates/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Asterisk, X, FileBadge, Terminal, Lightbulb } from "lucide-react";
import { certificates } from "@/data/certificates";
import { Certificate } from "@/types/certificate";

// ==========================================
// SHARED UI ELEMENTS
// ==========================================
const Tape = () => (
  <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-12 h-6 bg-[#F3E2C5]/30 border border-[#F3E2C5]/10 rotate-2 z-20 backdrop-blur-md shadow-sm" />
);

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  // Grouping the certificates
  const expCerts = certificates.filter((c) => c.category === "experience");
  const techCerts = certificates.filter((c) => c.category === "technical");
  const creativaCerts = certificates.filter((c) => c.category === "creativa");

  return (
    <main className="bg-[#5A0F1B] min-h-screen font-sans selection:bg-[#9CAF9A] selection:text-[#5A0F1B] pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* ================= HEADER ================= */}
        <section className="mb-24 flex flex-col items-center md:items-start border-b border-[#F3E2C5]/10 pb-12 text-center md:text-left">
          <div className="flex items-center gap-3 mb-6">
            <Asterisk className="text-[#9CAF9A] w-6 h-6 animate-[spin_8s_linear_infinite]" />
            <span className="font-mono text-[10px] text-[#9CAF9A] tracking-widest uppercase border border-[#9CAF9A]/30 px-3 py-1 rounded-sm">
              The Archive
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-[#F3E2C5] tracking-tight mb-4">
            Certificates
          </h1>
          <p className="font-serif italic text-lg md:text-xl opacity-80 text-[#F3E2C5]/80">
            Proof of what I explored.
          </p>
        </section>

        {/* ================= 01. EXPERIENCE & LEADERSHIP ================= */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-full border-2 border-[#9CAF9A] flex items-center justify-center text-[#9CAF9A]">
              <FileBadge className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#F3E2C5] uppercase tracking-wide">
                Experience & Leadership
              </h2>
              <p className="font-mono text-xs text-[#F3E2C5]/50 uppercase tracking-widest">
                01 — Participation & Roles
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {expCerts.map((cert, i) => (
              <motion.div
                key={cert.slug}
                whileHover={{ scale: 1.02, y: -4, zIndex: 10 }}
                className={`relative group cursor-pointer ${i === 1 ? "rotate-2 md:mt-8" : "-rotate-1"}`}
                onClick={() => setSelectedCert(cert)}
              >
                <div className="bg-[#F3E2C5]/5 border border-[#F3E2C5]/20 p-3 shadow-xl relative">
                  <Tape />
                  <div className="w-full aspect-[4/3] bg-black/20 overflow-hidden mb-4 relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#F3E2C5] uppercase mb-1 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="font-mono text-[10px] text-[#9CAF9A] uppercase tracking-widest">
                      {cert.organization}
                    </p>
                    {cert.date && (
                      <p className="font-serif italic text-[11px] text-[#F3E2C5]/50 mt-2">
                        {cert.date}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= 02. TECHNICAL ================= */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-none border-2 border-[#9CAF9A] flex items-center justify-center text-[#9CAF9A]">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#F3E2C5] uppercase tracking-wide">
                Technical
              </h2>
              <p className="font-mono text-xs text-[#F3E2C5]/50 uppercase tracking-widest">
                02 — Engineering & Code
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techCerts.map((cert) => (
              <motion.div
                key={cert.slug}
                whileHover={{ y: -4 }}
                className="relative group cursor-pointer flex flex-col"
                onClick={() => setSelectedCert(cert)}
              >
                {/* Geometric technical border style */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#9CAF9A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="bg-[#5A0F1B] border border-[#F3E2C5]/20 p-1 shadow-lg relative z-10 flex-1 flex flex-col">
                  <div className="w-full aspect-[4/3] bg-black/40 overflow-hidden mb-3 relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="p-3 flex-1 flex flex-col">
                    <h3 className="font-bold text-sm text-[#F3E2C5] uppercase mb-1 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="font-mono text-[10px] text-[#9CAF9A] uppercase tracking-widest">
                      {cert.organization}
                    </p>
                    <div className="mt-auto pt-3 flex items-center justify-between font-mono text-[9px] text-[#F3E2C5]/50 uppercase">
                      <span>
                        {cert.date?.split(",")[1] ||
                          cert.date?.split(" ").pop()}
                      </span>
                      {cert.duration && <span>{cert.duration}</span>}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= 03. CREATIVA ================= */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-sm bg-[#F3E2C5] flex items-center justify-center text-[#5A0F1B]">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#F3E2C5] uppercase tracking-wide">
                Creativa
              </h2>
              <p className="font-mono text-xs text-[#F3E2C5]/50 uppercase tracking-widest">
                03 — 5 Experiences
              </p>
            </div>
          </div>

          <div className="bg-[#F3E2C5]/5 border border-[#F3E2C5]/10 p-6 md:p-12 rounded-3xl relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {creativaCerts.map((cert, i) => (
                <motion.div
                  key={cert.slug}
                  whileHover={{ scale: 1.03, zIndex: 20 }}
                  className={`group cursor-pointer relative ${i % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="bg-white p-2 shadow-md relative">
                    {/* Small pin effect */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#5A0F1B] border border-[#9CAF9A] shadow-sm z-10" />
                    <div className="w-full aspect-[4/3] bg-black/10 overflow-hidden mb-2 mt-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="p-2">
                      <h3 className="font-bold text-xs text-[#5A0F1B] uppercase leading-tight mb-1">
                        {cert.title}
                      </h3>
                      <p className="font-serif italic text-[10px] text-[#5A0F1B]/60">
                        {cert.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ================= MODAL / LIGHTBOX ================= */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#5A0F1B]/95 p-4 md:p-12 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="relative max-w-4xl w-full bg-[#F3E2C5] rounded-sm p-4 flex flex-col md:flex-row gap-6 items-center shadow-2xl border border-[#5A0F1B]/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-4 -right-4 md:-top-5 md:-right-5 bg-[#9CAF9A] text-[#5A0F1B] p-2 rounded-full shadow-lg hover:scale-110 transition-transform z-10"
                onClick={() => setSelectedCert(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-2/3 flex items-center justify-center bg-[#5A0F1B]/5 border border-[#5A0F1B]/10 p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[75vh] w-auto object-contain shadow-sm"
                />
              </div>

              <div className="w-full md:w-1/3 flex flex-col gap-4 text-[#5A0F1B] px-2 py-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-black uppercase leading-tight mb-2">
                    {selectedCert.title}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-[#5A0F1B]/70">
                    {selectedCert.organization}
                  </p>
                </div>

                <div className="space-y-3 font-mono text-xs border-t border-[#5A0F1B]/20 pt-4 mt-2">
                  {selectedCert.date && (
                    <div>
                      <span className="block text-[#5A0F1B]/50 uppercase tracking-widest text-[9px] mb-0.5">
                        Date
                      </span>
                      <span className="font-bold">{selectedCert.date}</span>
                    </div>
                  )}
                  {selectedCert.duration && (
                    <div>
                      <span className="block text-[#5A0F1B]/50 uppercase tracking-widest text-[9px] mb-0.5">
                        Duration
                      </span>
                      <span className="font-bold">{selectedCert.duration}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
