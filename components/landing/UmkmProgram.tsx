"use client";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const umkmBenefits = [
  {
    title: "Akses Talenta Muda Terverifikasi",
    desc: "Menghubungkan UMKM dengan mahasiswa & fresh graduate ber-CV ATS dan berportofolio nyata.",
    icon: "🎓",
  },
  {
    title: "Bantu UMKM Go Digital",
    desc: "UMKM dapat bantuan bikin website, digital marketing, dan branding — tanpa biaya besar.",
    icon: "🏪",
  },
  {
    title: "Proyek Nyata & Pengalaman Magang",
    desc: "Pencari kerja dapat portofolio proyek riil, UMKM dapat solusi digital yang berdampak.",
    icon: "🚀",
  },
];

export default function UmkmProgram() {
  return (
    <section id="umkm" className="relative bg-[#fbf2e8] py-20 overflow-hidden border-t border-b border-[#d8c8c0]">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Badge variant="teal">UMKM x Talenta Muda</Badge>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-[#202048] md:text-4xl">
            Kolaborasi UMKM &amp; Mahasiswa
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#5a545b]">
            Karierku menghubungkan UMKM yang butuh tenaga digital dengan mahasiswa yang siap kerja dan punya portofolio nyata.
          </p>
        </Reveal>

        <Reveal delay={1} className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {umkmBenefits.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#d8c8c0]/80 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#a4a8d6] hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef0f8] text-2xl">
                {item.icon}
              </div>
              <h3 className="font-display mt-4 text-lg font-bold text-[#202048]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5a545b]">
                {item.desc}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={2} className="mt-12 rounded-2xl bg-gradient-to-r from-[#0c0c1d] to-[#202048] p-8 text-white shadow-xl md:p-10">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <span className="inline-block rounded-full bg-[#6f74b0]/20 px-3 py-1 text-xs font-semibold text-[#a4a8d6]">
                Program Kolaborasi UMKM x Karierku
              </span>
              <h3 className="font-display mt-3 text-2xl font-bold md:text-3xl">
                Apakah Anda Pemilik UMKM atau Pencari Talenta Digital?
              </h3>
              <p className="mt-2 text-sm text-[#c4bab0] max-w-xl">
                Dapatkan rekomendasi mahasiswa &amp; alumni terbaik dengan CV ATS terverifikasi dan portofolio siap pakai untuk memajukan usaha Anda.
              </p>
            </div>
            <Button href="/portfolio" variant="secondary" size="lg" className="shrink-0 whitespace-nowrap">
              Lihat Talenta &amp; Portofolio
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
