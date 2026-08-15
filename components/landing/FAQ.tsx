"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

const faqs = [
  {
    q: "Apa itu Karierku?",
    a: "Karierku membantu kamu menyusun CV ramah ATS, merapikan profil LinkedIn, dan menyiapkan portofolio. Kamu bisa mulai dari contoh yang sudah tersedia.",
  },
  {
    q: "Bagaimana AI membantu mengoreksi CV saya?",
    a: "Setelah CV dibuat, AI menganalisa struktur, kata kerja aktif, metrik pencapaian, dan kesesuaian ATS. Kamu mendapat skor dan saran perbaikan spesifik lewat chat interface.",
  },
  {
    q: "Apakah Karierku benar-benar gratis?",
    a: "Selama masa awal, seluruh fitur utama tersedia gratis. Kamu bisa membuat CV, mengoptimasi LinkedIn, dan membangun portofolio tanpa biaya.",
  },
  {
    q: "Apakah data saya aman?",
    a: "Data hanya digunakan untuk memproses dokumen dan rekomendasi AI. Kami tidak membagikan data pribadi kepada pihak ketiga tanpa izin.",
  },
  {
    q: "Bagaimana cara mengoptimasi LinkedIn?",
    a: "Masukkan URL profil LinkedIn, lalu sistem menampilkan contoh penilaian profil, kata kunci untuk headline, arahan untuk About, dan template ringkasan sesuai industri.",
  },
  {
    q: "Bisakah saya membuat portofolio sendiri?",
    a: "Ya. Portfolio Builder menyediakan template siap pakai. Kamu bisa mengunggah gambar, menyematkan tautan proyek, dan membagikannya lewat satu tautan unik.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-[#d8c8c0]/80 bg-[#f8e8d8]/60 py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-4 lg:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#202048] md:text-4xl">
            Pertanyaan yang sering diajukan
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#6f6870]">
            Jawaban singkat seputar skor ATS, analisis CV, dan cara kerja Karierku.
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-[#d8c8c0] rounded-2xl border border-[#d8c8c0] bg-white shadow-sm">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.q} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#f8e8d8]/50"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-[#202048] md:text-base">
                      {item.q}
                    </span>
                    <svg
                      className={`shrink-0 text-[#6f6870] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm leading-relaxed text-[#6f6870]">
                      {item.a}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
