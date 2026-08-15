import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Link from "next/link";

export const metadata = {
  title: "Tentang Kami — Karierku",
  description:
    "Kenali Karierku, platform penyusun CV, LinkedIn, dan portofolio untuk pencari kerja Indonesia.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 md:pt-28 md:pb-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl font-bold tracking-tight text-[#202048] md:text-5xl">
              Tentang Karierku
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[#6f6870] md:text-lg">
              Platform penyusun CV, LinkedIn, dan portofolio untuk pencari kerja Indonesia.
            </p>
          </div>

          <div className="space-y-10">
            <section className="rounded-2xl border border-[#d8c8c0] bg-white p-6 md:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f8e8d8] text-[#202048]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                  </div>
                </div>
                <div className="mt-6 md:mt-0 md:w-3/4">
                  <h2 className="font-display text-2xl font-bold text-[#202048]">
                    Masalah yang Kami Lihat
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[#6f6870]">
                    Banyak mahasiswa dan fresh graduate kesulitan menyusun CV, LinkedIn, dan portofolio karena tidak tahu standar industri. Mereka sering mengirim dokumen yang belum terstruktur, sehingga sulit bersaing di pasar kerja yang kompetitif.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-[#d8c8c0] bg-white p-6 md:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f8e8d8] text-[#202048]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8" />
                      <path d="M12 17v4" />
                    </svg>
                  </div>
                </div>
                <div className="mt-6 md:mt-0 md:w-3/4">
                  <h2 className="font-display text-2xl font-bold text-[#202048]">
                    Solusi yang Kami Tawarkan
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[#6f6870]">
                    Karierku menyediakan alat bantu berbasis aturan untuk menyusun CV ATS-friendly, merapikan profil LinkedIn, dan membuat portofolio dalam satu platform. Semua dirancang agar dokumenmu lebih rapi dan mudah dipindai oleh sistem rekrutmen.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-[#c8a060]/30 bg-[#c8a060]/12 p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c8a060]/20 text-[#202048]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                </div>
                <div className="mt-6 md:mt-0 md:w-3/4">
                  <h2 className="font-display text-2xl font-bold text-[#202048]">
                    Inisiatif Kolaborasi UMKM
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[#6f6870]">
                    Selain membantu pencari kerja, Karierku juga menjembatani kolaborasi antara talenta muda dengan UMKM lokal. Melalui portofolio dan showcase proyek, mahasiswa bisa menunjukkan kemampuan nyata sementara UMKM mendapat akses ke talenta digital yang relevan.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-[#202048]">
                    <span className="rounded-full border border-[#c8a060]/40 bg-[#f8e8d8] px-3 py-1.5">
                      Talenta menunjukkan karya
                    </span>
                    <span className="rounded-full border border-[#c8a060]/40 bg-[#f8e8d8] px-3 py-1.5">
                      UMKM temukan kandidat
                    </span>
                    <span className="rounded-full border border-[#c8a060]/40 bg-[#f8e8d8] px-3 py-1.5">
                      Kolaborasi berbasis proyek
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-full bg-[#202048] px-6 py-3 text-base font-bold text-[#f8e8d8] shadow-md transition-all hover:bg-[#c8a060] hover:shadow-lg active:scale-95"
            >
              Mulai Gunakan Karierku
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}