import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";

const posts = [
  {
    title: "5 Kesalahan CV yang Sering Bikin HRD Skip Lamaranmu",
    category: "CV & ATS",
    date: "12 Agu 2026",
    readTime: "4 min",
    desc: "Pahami format yang salah, kata kunci yang hilang, dan struktur yang bikin CV-mu tidak lolos sistem ATS.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#202048" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    ),
    color: "from-[#c8a060]/20 to-[#f8e8d8]",
  },
  {
    title: "Cara Optimasi LinkedIn Agar Recruiter Notice Profilmu",
    category: "LinkedIn",
    date: "8 Agu 2026",
    readTime: "5 min",
    desc: "Tips menulis headline, About, dan skills yang bikin profil LinkedIn-mu lebih mudah ditemukan oleh recruiter.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#202048" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    color: "from-[#202048]/10 to-[#f8e8d8]",
  },
  {
    title: "Portfolio Builder: Cara Tampilkan Proyek yang Bikin HRD Impressed",
    category: "Portofolio",
    date: "3 Agu 2026",
    readTime: "3 min",
    desc: "Bagaimana menyusun portofolio yang rapi, relevan, dan mudah dibagikan lewat satu link unik.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#202048" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    color: "from-[#c8a060]/15 to-[#202048]/5",
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Blog"
            title="Tips & Artikel Seputar Karier"
            description="Belajar cara menyusun dokumen profesional yang lebih rapi dan efektif."
          />
        </Reveal>

        <Reveal delay={1} className="mt-14">
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#d8c8c0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(32,32,72,0.15)]"
              >
                <div className={`relative flex items-center justify-center bg-gradient-to-br ${post.color} px-6 py-10`}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    {post.icon}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-[#c8a060]">
                    <span>{post.category}</span>
                    <span className="text-[#d8c8c0]">·</span>
                    <span>{post.date}</span>
                    <span className="text-[#d8c8c0]">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold text-[#202048]">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#6f6870]">
                    {post.desc}
                  </p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#202048] transition-colors hover:text-[#c8a060]"
                  >
                    Baca Selengkapnya
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={2} className="mt-10 text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-[#d8c8c0] bg-white px-5 py-2.5 text-sm font-semibold text-[#202048] shadow-sm transition-all hover:border-[#c8a060] hover:shadow-md"
          >
            Lihat Semua Artikel
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
