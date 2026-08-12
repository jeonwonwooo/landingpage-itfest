"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const before =
  "Membantu tim dalam pengembangan website perusahaan.";
const after =
  "Memimpin pengembangan landing page responsif yang meningkatkan konversi lead 28% dalam 2 bulan.";

export default function SmartSuggestions() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (typed.length < after.length) {
      const t = setTimeout(() => setTyped(after.slice(0, typed.length + 1)), 35);
      return () => clearTimeout(t);
    }
    setDone(true);
  }, [typed, done]);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={1}>
            <div className="overflow-hidden rounded-2xl border border-[#d8c8c0] bg-[#fbf2e8] shadow-[0_8px_40px_-12px_rgba(15,23,42,0.1)]">
              <div className="border-b border-[#d8c8c0] bg-white px-5 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#a39da4]">
                  Saran AI
                </p>
              </div>
              <div className="space-y-4 p-5 md:p-6">
                <div className="rounded-xl border border-red-100 bg-red-50/50 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-red-400">
                    Sebelum
                  </p>
                  <p className="mt-1.5 text-sm text-[#5a545b] line-through decoration-red-300">
                    {before}
                  </p>
                </div>

                <div className="rounded-xl border border-[#c6cbe8] bg-white p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--primary)]">
                    Setelah
                  </p>
                  {!done && typed.length === 0 ? (
                    <div className="mt-3 flex items-center gap-2 text-sm text-[#a39da4]">
                      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-[#a39da4]" />
                      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-[#a39da4]" />
                      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-[#a39da4]" />
                      <span className="ml-1">AI sedang menulis saran...</span>
                    </div>
                  ) : (
                    <p className="mt-1.5 text-sm leading-relaxed text-[#2b2a52]">
                      {typed}
                      {!done && (
                        <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-[var(--primary)]" />
                      )}
                    </p>
                  )}
                </div>

                <div className="flex gap-2">
                  <div className="h-2 flex-1 animate-pulse rounded bg-[#d8c8c0]" />
                  <div className="h-2 w-1/3 animate-pulse rounded bg-[#d8c8c0]" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Smart Suggestions
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[#202048] md:text-4xl">
              Perbaiki instan,
              <br />
              tanpa stuck di wording
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5a545b]">
              Bullet point lemah? AI ubah jadi pernyataan profesional berdampak
              — disesuaikan dengan role, industri, dan job description target
              kamu.
            </p>
            <div className="mt-8">
              <Button href="/cv">Buat CV Sekarang</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
