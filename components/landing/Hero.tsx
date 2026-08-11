import Button from "@/components/ui/Button";
import LogoMarquee from "@/components/ui/LogoMarquee";
import Reveal from "@/components/ui/Reveal";

const stats = [
  { value: "40%", label: "Peluang Panggilan HRD" },
  { value: "92/100", label: "Rata-rata Skor ATS CV" },
  { value: "1,200+", label: "Talenta & UMKM Terhubung" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[850px] -translate-x-1/2 rounded-full bg-teal-100/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200/80 bg-teal-50/80 px-3.5 py-1 text-xs font-semibold text-teal-800 shadow-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
            CV, LinkedIn &amp; Portofolio — Satu Platform
          </div>

          <h1 className="font-display mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-[3.5rem]">
            Tingkatkan Karirmu dengan CV dan LinkedIn yang Dilirik HRD
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Buat CV lolos ATS, perkuat profil LinkedIn, dan tampilkan portofolio dalam satu tempat. Semua pakai AI.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/cv" size="lg" className="w-full sm:w-auto shadow-md">
              Coba Gratis Sekarang
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 md:gap-14 border-t border-b border-slate-200/60 py-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-2xl font-bold text-slate-900 md:text-3xl">
                  {s.value}
                  <span className="ml-1 inline-block text-[var(--primary)]">
                    ↑
                  </span>
                </p>
                <p className="mt-1 text-xs text-slate-500 md:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={1} className="mt-10">
          <LogoMarquee />
        </Reveal>

        <Reveal delay={2} className="relative mx-auto mt-12 max-w-3xl">
          <div className="animate-floaty">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_50px_-12px_rgba(15,23,42,0.18)]">
              <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/90 px-5 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="ml-2 text-xs font-semibold text-slate-500">
                    Dashboard Karierku — AI Assistant Review
                  </span>
                </div>
                <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                  ATS Score 94%
                </span>
              </div>

              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Hasil Koreksi AI</span>
                      <span className="text-xs text-teal-600 font-semibold">4 Rekomendasi Kritis Ditemukan</span>
                    </div>
                    <div className="rounded-xl border border-slate-100 bg-teal-50/40 p-3.5 text-xs text-slate-700 space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span><strong>Kata Kerja Aktif:</strong> Berhasil mengubah <i>&quot;Bertanggung jawab atas website&quot;</i> menjadi <i>&quot;Mengembangkan &amp; mengoptimalkan 3 aplikasi web Next.js&quot;</i>.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span><strong>Dampak Terukur:</strong> Menambahkan metrik pencapaian (misal: <i>&quot;meningkatkan trafik 45%&quot;</i>).</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-56 shrink-0 rounded-xl border border-slate-200 bg-slate-900 p-4 text-white text-center">
                    <p className="text-[11px] text-slate-400 font-medium">Status Kesiapan Karir</p>
                    <p className="font-display text-3xl font-bold text-emerald-400 mt-1">SIAP MELAMAR</p>
                    <p className="text-[10px] text-slate-300 mt-2">Ramah ATS System HRD &amp; Rekomendasi UMKM</p>
                    <a
                      href="/cv"
                      className="mt-3 block w-full rounded-lg bg-teal-500 py-1.5 text-xs font-bold text-slate-950 hover:bg-teal-400"
                    >
                      Koreksi CV Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
