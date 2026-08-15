import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Link from "next/link";

export const metadata = {
  title: "Blog — Karierku",
  description:
    "Tips, panduan, dan artikel seputar CV, LinkedIn, portofolio, dan karier untuk mahasiswa Indonesia.",
};

const posts = [
  {
    slug: "kesalahan-cv-bikin-hrd-skip",
    title: "5 Kesalahan CV yang Sering Bikin HRD Skip Lamaranmu",
    category: "CV & ATS",
    date: "12 Agu 2026",
    readTime: "4 min",
    desc: "Pahami format yang salah, kata kunci yang hilang, dan struktur yang bikin CV-mu tidak lolos sistem ATS.",
    content: [
      "Banyak pelamar yang tidak menyadari bahwa CV mereka sudah ditolak sebelum dibaca oleh manusia. Sistem ATS (Applicant Tracking System) memfilter ratusan CV setiap hari, dan kesalahan kecil bisa membuat lamaranmu masuk kotak sampah.",
      "Kesalahan paling umum adalah format yang rumit. Gunakan struktur sederhana: header, summary, experience, education, skills. Hindari kolom ganda, tabel, dan grafik yang membingungkan ATS.",
      "Kata kunci juga sangat penting. Baca job description dengan saksama dan masukkan kata kunci yang relevan ke dalam CV. Jangan hanya copy-paste, tapi integrasikan secara natural ke dalam deskripsi pengalaman.",
    ],
  },
  {
    slug: "optimasi-linkedin-recruiter-notice",
    title: "Cara Optimasi LinkedIn Agar Recruiter Notice Profilmu",
    category: "LinkedIn",
    date: "8 Agu 2026",
    readTime: "5 min",
    desc: "Tips menulis headline, About, dan skills yang bikin profil LinkedIn-mu lebih mudah ditemukan oleh recruiter.",
    content: [
      "LinkedIn adalah mesin pencari kerja terbesar di dunia. Profil yang teroptimasi bisa muncul di halaman pertama hasil pencarian recruiter, sementara profil yang biasa-biasa saja akan tenggelam.",
      "Headline adalah hal pertama yang dilihat. Jangan hanya tulis 'Software Engineer'. Gunakan formula: Peran | Keahlian Utama | Value Proposition. Contoh: 'Software Engineer | React & Node.js | Membangun Aplikasi Scalable untuk UMKM'.",
      "Bagian About juga krusial. Tulis dalam sudut pandang orang pertama, jelaskan apa yang kamu lakukan, untuk siapa, dan hasil apa yang dicapai. Gunakan paragraf pendek dan bullet points.",
    ],
  },
  {
    slug: "portfolio-builder-tampilkan-proyek",
    title: "Portfolio Builder: Cara Tampilkan Proyek yang Bikin HRD Impressed",
    category: "Portofolio",
    date: "3 Agu 2026",
    readTime: "3 min",
    desc: "Bagaimana menyusun portofolio yang rapi, relevan, dan mudah dibagikan lewat satu link unik.",
    content: [
      "Portofolio yang baik bukan sekumpulan screenshot. Ini adalah cerita tentang bagaimana kamu memecahkan masalah melalui teknologi atau desain.",
      "Untuk setiap proyek, jelaskan: masalah yang dihadapi, solusi yang kamu tawarkan, teknologi yang digunakan, dan hasil yang dicapai. Sertakan link live demo atau repository jika memungkinkan.",
      "Gunakan portofolio yang rapi dan profesional. Karierku menyediakan template yang sudah dioptimasi untuk recruiter, dengan satu link unik yang bisa kamu taruh di CV atau LinkedIn.",
    ],
  },
  {
    slug: "cara-menulis-cv-ats-friendly",
    title: "Panduan Lengkap Menulis CV ATS-Friendly untuk Pemula",
    category: "CV & ATS",
    date: "28 Jul 2026",
    readTime: "6 min",
    desc: "Langkah demi langkah membuat CV yang lolos seleksi otomatis dan menarik perhatian HRD.",
    content: [
      "CV ATS-friendly adalah CV yang dirancang agar mudah dibaca oleh sistem pemindaian otomatis. Format harus bersih, tanpa elemen grafis yang membingungkan.",
      "Mulai dari header yang jelas: nama, email, nomor telepon, link LinkedIn, dan kota domisili. Hindari gambar atau header yang terlalu kompleks.",
      "Untuk pengalaman kerja, gunakan format: Jabatan | Perusahaan | Periode | Deskripsi. Mulai setiap poin dengan kata kerja aktif seperti 'Mengembangkan', 'Mengelola', 'Meningkatkan'.",
    ],
  },
  {
    slug: "strategi-interview-kerja",
    title: "Strategi Interview Kerja: Dari Persiapan hingga Offer Letter",
    category: "Karier",
    date: "20 Jul 2026",
    readTime: "7 min",
    desc: "Tips persiapan wawancara, menjawab pertanyaan sulit, dan follow-up yang profesional.",
    content: [
      "Interview adalah kesempatan untuk menunjukkan kepribadian dan soft skills yang tidak tertulis di CV. Persiapan yang matang bisa membuat perbedaan besar.",
      "Pelajari perusahaan, produk, dan budaya kerja mereka. Siapkan contoh situasi menggunakan metode STAR (Situation, Task, Action, Result) untuk pertanyaan behavioral.",
      "Setelah interview, kirim follow-up email dalam 24 jam. Terima kasih atas waktunya, singgung poin spesifik dari percakapan, dan tunjukkan antusiasme.",
    ],
  },
  {
    slug: "personal-branding-mahasiswa",
    title: "Personal Branding untuk Mahasiswa: Bangun Citra Profesional sejak Kuliah",
    category: "Karier",
    date: "15 Jul 2026",
    readTime: "5 min",
    desc: "Membangun reputasi digital yang konsisten di LinkedIn, GitHub, dan platform profesional lainnya.",
    content: [
      "Personal branding bukan sekadar self-promotion. Ini tentang bagaimana kamu ingin dikenal oleh industri dan calon employer.",
      "Mulai dari LinkedIn yang konsisten. Gunakan foto profesional, headline yang jelas, dan bagikan konten relevan tentang bidangmu. Aktif di komunitas dan berikan komentar bermakna.",
      "Bangun portofolio online yang menunjukkan karya nyata. Tidak perlu sempurna, yang penting menunjukkan proses berpikir dan kemauan belajar.",
    ],
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 md:pt-28 md:pb-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl font-bold tracking-tight text-[#202048] md:text-5xl">
              Blog & Artikel
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[#6f6870] md:text-lg">
              Tips, panduan, dan cerita seputar CV, LinkedIn, portofolio, dan karier untuk mahasiswa Indonesia.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#d8c8c0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(32,32,72,0.15)]"
              >
                <div className="flex items-center justify-center bg-gradient-to-br from-[#f8e8d8] to-[#f0dcc4] px-6 py-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 shadow-sm backdrop-blur-sm">
                    {post.category === "CV & ATS" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#202048" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                        <path d="M14 2v6h6" />
                        <path d="M16 13H8" />
                        <path d="M16 17H8" />
                        <path d="M10 9H8" />
                      </svg>
                    )}
                    {post.category === "LinkedIn" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#202048" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    )}
                    {post.category === "Portofolio" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#202048" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M3 9h18" />
                        <path d="M9 21V9" />
                      </svg>
                    )}
                    {post.category === "Karier" && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#202048" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    )}
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
                  <h2 className="mt-3 font-display text-base font-bold text-[#202048] md:text-xl">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#6f6870]">
                    {post.desc}
                  </p>
                  <Link
                    href="/"
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
        </div>
      </main>
      <Footer />
    </>
  );
}