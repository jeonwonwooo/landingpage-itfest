import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Link from "next/link";

export const metadata = {
  title: "Fitur — Karierku",
  description:
    "Kenali fitur Karierku: CV Builder, LinkedIn Optimizer, dan Portfolio Builder untuk kariermu.",
};

const features = [
  {
    id: "cv-builder",
    title: "CV Builder & Reviewer",
    subtitle: "Pemeriksa & Pembuat CV Ramah ATS",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    description: "Isi data diri, riwayat pendidikan, dan pengalaman kerja untuk menyusun CV berformat ATS.",
    details: [
      {
        title: "Form CV Terstruktur",
        desc: "Template yang sudah dioptimasi untuk ATS, dengan panduan di setiap kolom agar kamu tahu apa yang harus diisi.",
      },
      {
        title: "ATS Score Checker",
        desc: "Skor otomatis untuk CV-mu berdasarkan format, kata kunci, dan struktur. Semakin tinggi skor, semakin besar peluang lolos filter ATS.",
      },
      {
        title: "Panel Review",
        desc: "Catatan detail untuk setiap bagian CV: apakah sudah menggunakan kata kerja aktif, apakah ada metrik pencapaian, dan bagian mana yang perlu diperjelas.",
      },
      {
        title: "Template Profesional",
        desc: "Pilihan template yang sudah dirancang sesuai standar industri. Tinggal pilih, isi, dan download dalam format PDF.",
      },
    ],
    href: "/login",
    cobaLabel: "Coba CV Builder",
  },
  {
    id: "linkedin-optimizer",
    title: "LinkedIn Branding Optimizer",
    subtitle: "Profile Scoring & Copywriting Generator",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    description: "Masukkan URL LinkedIn untuk melihat contoh audit profil, daftar kata kunci penting, dan referensi penulisan ulang.",
    details: [
      {
        title: "Profile Score 1-100",
        desc: "Penilaian komprehensif untuk profil LinkedIn-mu: headline, About, experience, skills, dan rekomendasi.",
      },
      {
        title: "Keyword Checklist",
        desc: "Daftar kata kunci yang harus ada di profil LinkedIn-mu berdasarkan industri dan posisi yang kamu incar.",
      },
      {
        title: "Headline Generator",
        desc: "Contoh headline yang menarik perhatian recruiter, lengkap dengan analisis kenapa headline tersebut efektif.",
      },
      {
        title: "About Section Template",
        desc: "Template penulisan About yang profesional, dengan panduan paragraf pembuka, poin-poin utama, dan call to action.",
      },
    ],
    href: "/login",
    cobaLabel: "Coba LinkedIn Optimizer",
  },
  {
    id: "portfolio-builder",
    title: "Portfolio Builder",
    subtitle: "Project Showcase & Shareable Link",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="10.5" r="2.5" />
        <circle cx="8.5" cy="7.5" r="2.5" />
        <circle cx="6.5" cy="12.5" r="2.5" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
    description: "Pamerkan karya dan proyek riil Anda secara visual dan terstruktur.",
    details: [
      {
        title: "Custom Sub-Domain",
        desc: "Dapatkan link unik seperti karierku.id/nama-kamu yang bisa kamu taruh di CV atau email lamaran.",
      },
      {
        title: "Visual Templates",
        desc: "Template portofolio yang sudah dirancang untuk recruiter, dengan tampilan yang profesional di mobile dan desktop.",
      },
      {
        title: "Case Study Cards",
        desc: "Format penampilan proyek yang menjelaskan masalah, solusi, teknologi yang digunakan, dan hasil yang dicapai.",
      },
      {
        title: "One-Click Share",
        desc: "Bagikan portofolio ke LinkedIn, email, atau CV dengan satu klik. Tidak perlu ribet copy-paste link.",
      },
    ],
    href: "/login",
    cobaLabel: "Coba Portfolio Builder",
  },
];

export default function FiturPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 md:pt-28 md:pb-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl font-bold tracking-tight text-[#202048] md:text-5xl">
              Fitur Karierku
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[#6f6870] md:text-lg">
              Tiga alat yang saling terhubung untuk menyusun CV, memperjelas profil LinkedIn, dan menampilkan portofolio.
            </p>
          </div>

          <div className="space-y-10">
            {features.map((feature) => (
              <section key={feature.id} id={feature.id} className="scroll-mt-28">
                <div className="rounded-2xl border border-[#d8c8c0] bg-white p-6 md:p-8 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                    <div className="md:w-1/4 flex-shrink-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f8e8d8] text-[#202048]">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="mt-6 md:mt-0 md:w-3/4">
                      <h2 className="font-display text-2xl font-bold text-[#202048]">
                        {feature.title}
                      </h2>
                      <p className="mt-1 text-sm font-semibold text-[#c8a060]">
                        {feature.subtitle}
                      </p>
                      <p className="mt-3 text-base leading-relaxed text-[#6f6870]">
                        {feature.description}
                      </p>
                      <Link
                        href={feature.href}
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#202048] px-5 py-2.5 text-sm font-bold text-[#f8e8d8] shadow-md transition-all hover:bg-[#c8a060] hover:shadow-lg active:scale-95"
                      >
                        {feature.cobaLabel}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </Link>

                      <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {feature.details.map((detail) => (
                          <div key={detail.title} className="rounded-xl border border-[#d8c8c0] bg-[#f8e8d8]/30 p-4">
                            <h3 className="font-display text-sm font-bold text-[#202048]">
                              {detail.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-[#6f6870]">
                              {detail.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}