import Reveal from "@/components/ui/Reveal";
import Link from "next/link";

const DocumentIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const PaletteIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="10.5" r="2.5" />
    <circle cx="8.5" cy="7.5" r="2.5" />
    <circle cx="6.5" cy="12.5" r="2.5" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

const features = [
  {
    title: "CV Builder & Reviewer",
    subtitle: "Pemeriksa & Pembuat CV Ramah ATS",
    desc: "Isi data diri, riwayat pendidikan, dan pengalaman kerja untuk menyusun CV berformat ATS. Tersedia panel review untuk menandai bagian yang masih perlu diperjelas.",
    tags: ["Form CV", "ATS Checker", "Panel Review"],
    href: "/cv",
    icon: <DocumentIcon />,
  },
  {
    title: "LinkedIn Branding Optimizer",
    subtitle: "Profile Scoring & Copywriting Generator",
    desc: "Masukkan URL LinkedIn untuk melihat contoh audit profil, daftar kata kunci penting, dan referensi penulisan ulang bagian headline maupun About.",
    tags: ["Score 1-100", "Keyword Checklist", "Summary Generator"],
    href: "/linkedin",
    icon: <BriefcaseIcon />,
  },
  {
    title: "Portfolio Builder",
    subtitle: "Project Showcase & Shareable Link",
    desc: "Pamerkan karya dan proyek riil Anda secara visual dan terstruktur. Gunakan template sesuai bidang lalu bagikan tautannya ke CV atau LinkedIn.",
    tags: ["Custom Sub-Domain", "Visual Templates", "Case Study Cards"],
    href: "/portfolio",
    icon: <PaletteIcon />,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#f8e8d8] py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#202048] md:text-4xl">
            Siap Kerja dari Lamaran sampai Wawancara
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#6f6870]">
            Tiga alat yang saling terhubung untuk menyusun CV, memperjelas profil LinkedIn, dan menampilkan portofolio dalam satu alur kerja.
          </p>
        </Reveal>

        <Reveal delay={1} className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-2xl border border-[#d8c8c0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(32,32,72,0.15)]"
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f8e8d8] text-[#202048] transition-colors duration-300 group-hover:bg-[#c8a060]/20">
                  {item.icon}
                </div>
                <h3 className="font-display mt-5 text-xl font-bold text-[#202048]">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-[#c8a060]">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#6f6870]">
                  {item.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f8e8d8] px-2.5 py-1 text-[10px] font-semibold text-[#6f6870]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#d8c8c0]/60">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#202048] transition-colors hover:text-[#c8a060]"
                >
                  Buka Tools Ini
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
