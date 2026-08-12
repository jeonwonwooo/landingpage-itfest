"use client";

import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const industryTemplates = {
  tech: {
    headline: "Software Engineer | Next.js & React Specialist | Building Scalable Web Apps for UMKM & Tech Startups",
    about: "Seorang pengembang perangkat lunak yang berfokus pada ekosistem web modern (Next.js, TypeScript, Tailwind). Berpengalaman membangun aplikasi bisnis berkinerja tinggi serta aktif berkolaborasi dalam proyek digitalisasi UMKM lokal.",
    keywords: ["Next.js", "React.js", "TypeScript", "REST API", "Tailwind CSS", "Agile", "Git"],
  },
  marketing: {
    headline: "Digital Marketing Specialist | Growth Strategist for E-Commerce & Local UMKM | SEO & Paid Ads",
    about: "Praktisi pemasaran digital dengan rekam jejak mengelola kampanye iklan organik & berbayar (Meta Ads, TikTok Ads). Berhasil meningkatkan keterlibatan pengguna dan konversi penjualan produk barang/jasa UMKM.",
    keywords: ["Digital Marketing", "SEO", "Copywriting", "Meta Ads", "Google Analytics", "Content Strategy"],
  },
  design: {
    headline: "UI/UX & Product Designer | Crafting Intuitive Web & Mobile Experiences | Design Systems Enthusiast",
    about: "Desainer produk yang antusias menciptakan antarmuka pengguna yang bersih, responsif, dan mudah diakses. Berfokus pada pemecahan masalah pengguna berbasis riset UX dan pengujian kegunaan.",
    keywords: ["Figma", "UI/UX Design", "Wireframing", "User Research", "Prototyping", "Design System"],
  },
};

export default function LinkedInPage() {
  const [profileUrl, setProfileUrl] = useState("linkedin.com/in/budi-pratama");
  const [selectedIndustry, setSelectedIndustry] = useState<"tech" | "marketing" | "design">("tech");
  const [score, setScore] = useState(82);
  const [copied, setCopied] = useState(false);

  const activeTemplate = industryTemplates[selectedIndustry];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fbf2e8] flex flex-col">
      <Navbar />

      <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#d8c8c0] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c6cbe8] bg-[#eef0f8] px-3 py-1 text-xs font-semibold text-[#151530]">
              💼 Fitur 2: LinkedIn Branding Optimizer
            </div>
            <h1 className="font-display mt-2 text-3xl font-bold text-[#202048] md:text-4xl">
              Optimasi Profil LinkedIn &amp; Generator Copywriting
            </h1>
            <p className="mt-1 text-sm text-[#5a545b]">
              Dapatkan skor kelengkapan profil, rekomendasi kata kunci HRD, dan template deskripsi profesional instan.
            </p>
          </div>

          <div className="rounded-xl border border-[#d8c8c0] bg-white p-3 text-center shadow-sm">
            <span className="text-[10px] uppercase font-bold text-[#a39da4]">Skor Profil LinkedIn</span>
            <p className="font-display text-2xl font-bold text-[#1a1a3a]">{score}/100</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Profile Scorer & Settings */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-[#d8c8c0] bg-white p-6 shadow-sm">
              <h2 className="font-display text-base font-bold text-[#202048] border-b border-[#f8e8d8] pb-3 flex items-center gap-2">
                <span>🎯</span> Profile Scoring &amp; Audit URL
              </h2>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-[#38365a]">Tautan URL LinkedIn Anda</label>
                <div className="mt-1 flex gap-2">
                  <input
                    type="text"
                    value={profileUrl}
                    onChange={(e) => setProfileUrl(e.target.value)}
                    className="flex-1 rounded-xl border border-[#d8c8c0] px-3.5 py-2 text-xs focus:border-[#202048] focus:outline-none"
                  />
                  <button
                    onClick={() => setScore(Math.floor(Math.random() * 15) + 80)}
                    className="rounded-xl bg-[#1a1a3a] px-4 py-2 text-xs font-bold text-white hover:bg-[#202048]"
                  >
                    Hitung Skor
                  </button>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <p className="text-xs font-bold text-[#202048]">Checklist Kelengkapan Profil:</p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#fbf3e4] text-[#8c6f3f] font-medium">
                    <span>✓ Foto Profil Formal &amp; Banner Professional</span>
                    <span className="font-bold">+20 Pts</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#fbf3e4] text-[#8c6f3f] font-medium">
                    <span>✓ Headline Berisi Target Role &amp; Value</span>
                    <span className="font-bold">+25 Pts</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#fbf3e4] text-[#8c6f3f] font-medium">
                    <span>⚠️ Ringkasan (About) Butuh Keyword Industri</span>
                    <span className="font-bold">+20 Pts</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#eef0f8] text-[#101026] font-medium">
                    <span>ℹ️ 5+ Skills Terverifikasi &amp; Rekomendasi</span>
                    <span className="font-bold">+17 Pts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Select Target Industry */}
            <div className="rounded-2xl border border-[#d8c8c0] bg-white p-6 shadow-sm">
              <h2 className="font-display text-base font-bold text-[#202048] border-b border-[#f8e8d8] pb-3 flex items-center gap-2">
                <span>🚀</span> Pilih Bidang Industri Target
              </h2>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <button
                  onClick={() => setSelectedIndustry("tech")}
                  className={`rounded-xl p-3 text-xs font-bold transition-all ${
                    selectedIndustry === "tech"
                      ? "bg-[#1a1a3a] text-white shadow-md"
                      : "bg-[#f8e8d8] text-[#38365a] hover:bg-[#d8c8c0]"
                  }`}
                >
                  💻 Web Dev / IT
                </button>
                <button
                  onClick={() => setSelectedIndustry("marketing")}
                  className={`rounded-xl p-3 text-xs font-bold transition-all ${
                    selectedIndustry === "marketing"
                      ? "bg-[#1a1a3a] text-white shadow-md"
                      : "bg-[#f8e8d8] text-[#38365a] hover:bg-[#d8c8c0]"
                  }`}
                >
                  📈 Marketing &amp; Sales
                </button>
                <button
                  onClick={() => setSelectedIndustry("design")}
                  className={`rounded-xl p-3 text-xs font-bold transition-all ${
                    selectedIndustry === "design"
                      ? "bg-[#1a1a3a] text-white shadow-md"
                      : "bg-[#f8e8d8] text-[#38365a] hover:bg-[#d8c8c0]"
                  }`}
                >
                  🎨 UI/UX &amp; Design
                </button>
              </div>
            </div>
          </div>

          {/* Copywriting Generator Output */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-[#d8c8c0] bg-white p-6 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#f8e8d8] pb-3">
                <h2 className="font-display text-base font-bold text-[#202048] flex items-center gap-2">
                  <span>✨</span> Result Copywriting Generator (AI Generated)
                </h2>
                {copied && (
                  <span className="text-xs font-semibold text-[#b8935a] bg-[#fbf3e4] px-2.5 py-1 rounded-md">
                    ✓ Tersalin ke Clipboard!
                  </span>
                )}
              </div>

              {/* Headline Generator */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-[#2b2a52]">1. Rekomendasi Headline LinkedIn</label>
                  <button
                    onClick={() => handleCopy(activeTemplate.headline)}
                    className="text-xs font-semibold text-[#1a1a3a] hover:text-[#101026]"
                  >
                    Salin Headline
                  </button>
                </div>
                <div className="rounded-xl border border-[#d8c8c0] bg-[#fbf2e8] p-4 text-xs font-medium text-[#2b2a52] leading-relaxed">
                  {activeTemplate.headline}
                </div>
              </div>

              {/* About Generator */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-[#2b2a52]">2. Rekomendasi Deskripsi &quot;About / Ringkasan&quot;</label>
                  <button
                    onClick={() => handleCopy(activeTemplate.about)}
                    className="text-xs font-semibold text-[#1a1a3a] hover:text-[#101026]"
                  >
                    Salin About
                  </button>
                </div>
                <div className="rounded-xl border border-[#d8c8c0] bg-[#fbf2e8] p-4 text-xs font-medium text-[#2b2a52] leading-relaxed">
                  {activeTemplate.about}
                </div>
              </div>

              {/* Keywords Tag Cloud */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#2b2a52]">3. Kata Kunci (Keywords) Wajib Disematkan:</label>
                <div className="flex flex-wrap gap-2 pt-1">
                  {activeTemplate.keywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg bg-[#eef0f8] px-3 py-1.5 text-xs font-semibold text-[#151530] border border-[#c6cbe8]"
                    >
                      + {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
