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
  const done = typed.length === after.length;

  useEffect(() => {
    if (done) return;

    const t = setTimeout(() => {
      setTyped(after.slice(0, typed.length + 1));
    }, 35);

    return () => clearTimeout(t);
  }, [typed, done]);

  return (
    <section className="bg-[#f8e8d8] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={1}>
            <div className="overflow-hidden rounded-2xl border border-[#d8c8c0] bg-[#202048]/5 shadow-[0_8px_40px_-12px_rgba(32,32,72,0.1)]">
              <div className="border-b border-[#d8c8c0] bg-[#f8e8d8] px-5 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6f6870]">
                  Contoh Saran
                </p>
              </div>
              <div className="space-y-4 p-5 md:p-6">
                <div className="rounded-xl border border-[#c8a060]/30 bg-[#c8a060]/12 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#202048]">
                    Sebelum
                  </p>
                  <p className="mt-1.5 text-sm text-[#6f6870] line-through decoration-[#c8a060]">
                    {before}
                  </p>
                </div>

                <div className="rounded-xl border border-[#d8c8c0] bg-[#f8e8d8] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--primary)]">
                    Setelah
                  </p>
                  {!done && typed.length === 0 ? (
                    <div className="mt-3 flex items-center gap-2 text-sm text-[#6f6870]">
                      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-[#6f6870]" />
                      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-[#6f6870]" />
                      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-[#6f6870]" />
                      <span className="ml-1">Menyiapkan contoh perbaikan...</span>
                    </div>
                  ) : (
                    <p className="mt-1.5 text-sm leading-relaxed text-[#202048]">
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
              Contoh Rewrite
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[#202048] md:text-4xl">
              Perbaiki instan,
              <br />
              tanpa stuck di wording
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#6f6870]">
              Contoh ini menunjukkan bagaimana bullet point yang terlalu umum
              bisa diubah menjadi pernyataan yang lebih spesifik dan mudah
              dipahami recruiter.
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
