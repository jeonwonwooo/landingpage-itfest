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
    <section id="umkm" className="relative bg-slate-50 py-20 overflow-hidden border-t border-b border-slate-200">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Badge variant="teal">UMKM x Talenta Muda</Badge>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Kolaborasi UMKM &amp; Mahasiswa
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Karierku menghubungkan UMKM yang butuh tenaga digital dengan mahasiswa yang siap kerja dan punya portofolio nyata.
          </p>
        </Reveal>

        <Reveal delay={1} className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {umkmBenefits.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-teal-300 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl">
                {item.icon}
              </div>
              <h3 className="font-display mt-4 text-lg font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={2} className="mt-12 rounded-2xl bg-gradient-to-r from-teal-900 to-slate-900 p-8 text-white shadow-xl md:p-10">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <span className="inline-block rounded-full bg-teal-400/20 px-3 py-1 text-xs font-semibold text-teal-300">
                Program Kolaborasi UMKM x Karierku
              </span>
              <h3 className="font-display mt-3 text-2xl font-bold md:text-3xl">
                Apakah Anda Pemilik UMKM atau Pencari Talenta Digital?
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-xl">
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
