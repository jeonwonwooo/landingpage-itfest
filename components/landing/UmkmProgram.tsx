"use client";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const UmkmIcon1 = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const UmkmIcon2 = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const UmkmIcon3 = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

const umkmBenefits = [
  {
    title: "Akses Talenta Muda Terverifikasi",
    desc: "Menghubungkan UMKM dengan mahasiswa & fresh graduate ber-CV ATS dan berportofolio nyata.",
    icon: <UmkmIcon1 />,
  },
  {
    title: "Bantu UMKM Go Digital",
    desc: "UMKM mendapat dukungan untuk website, digital marketing, dan branding dengan ruang kolaborasi yang lebih terjangkau.",
    icon: <UmkmIcon2 />,
  },
  {
    title: "Proyek Nyata & Pengalaman Magang",
    desc: "Pencari kerja mendapat portofolio proyek riil, sementara UMKM memperoleh dukungan digital yang relevan dengan kebutuhannya.",
    icon: <UmkmIcon3 />,
  },
];

export default function UmkmProgram() {
  return (
    <section id="umkm" className="relative bg-white py-20 overflow-hidden border-t border-b border-[#d8c8c0]">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Badge variant="teal">UMKM x Talenta Muda</Badge>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-[#202048] md:text-4xl">
            Kolaborasi UMKM &amp; Mahasiswa
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#6f6870]">
            Karierku menghubungkan UMKM yang butuh tenaga digital dengan mahasiswa yang siap kerja dan punya portofolio nyata.
          </p>
        </Reveal>

        <Reveal delay={1} className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {umkmBenefits.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#d8c8c0]/80 bg-[#202048]/5 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#c8a060] hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#202048]/5 text-[#202048]">
                {item.icon}
              </div>
              <h3 className="font-display mt-4 text-lg font-bold text-[#202048]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6f6870]">
                {item.desc}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={2} className="mt-12 rounded-2xl bg-gradient-to-r from-[#202048] to-[#c8a060] p-8 text-[#f8e8d8] shadow-xl md:p-10">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <span className="inline-block rounded-full bg-[#202048]/10 px-3 py-1 text-xs font-semibold text-[#202048]">
                Program Kolaborasi UMKM x Karierku
              </span>
              <h3 className="font-display mt-3 text-2xl font-bold md:text-3xl">
                Apakah Anda Pemilik UMKM atau Pencari Talenta Digital?
              </h3>
              <p className="mt-2 text-sm text-[#d8c8c0] max-w-xl">
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
