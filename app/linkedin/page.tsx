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

type ChecklistItem = {
  label: string;
  detail: string;
  status: "good" | "warning" | "info";
};

function buildLinkedinAudit(
  profileUrl: string,
  template: (typeof industryTemplates)[keyof typeof industryTemplates],
): { score: number; checklist: ChecklistItem[] } {
  let score = 52;
  const normalizedUrl = profileUrl.trim().toLowerCase();
  const hasLinkedinPath = normalizedUrl.includes("linkedin.com/in/");
  const slug = normalizedUrl.split("linkedin.com/in/")[1]?.replaceAll("/", "") ?? "";
  const headlineSpecific = template.headline.includes("|");
  const summaryDetailed = template.about.length >= 140;
  const keywordReady = template.keywords.length >= 6;

  if (hasLinkedinPath) score += 14;
  if (slug.length >= 6) score += 10;
  if (headlineSpecific) score += 10;
  if (summaryDetailed) score += 8;
  if (keywordReady) score += 8;

  return {
    score: Math.min(96, score),
    checklist: [
      {
        label: "URL profil",
        detail: hasLinkedinPath
          ? "Format profil sudah mengarah ke halaman publik LinkedIn."
          : "Tambahkan format `linkedin.com/in/...` agar tautan lebih jelas.",
        status: hasLinkedinPath ? "good" : "warning",
      },
      {
        label: "Headline",
        detail: headlineSpecific
          ? "Headline sudah memuat peran utama dan konteks keahlian."
          : "Tambahkan target peran atau fokus bidang pada headline.",
        status: headlineSpecific ? "good" : "warning",
      },
      {
        label: "About",
        detail: summaryDetailed
          ? "Bagian About sudah cukup panjang untuk memberi konteks pengalaman."
          : "Perlu ringkasan yang lebih detail tentang pengalaman dan nilai yang ditawarkan.",
        status: summaryDetailed ? "good" : "warning",
      },
      {
        label: "Kata kunci",
        detail: keywordReady
          ? "Daftar kata kunci sudah cukup untuk menyesuaikan profil dengan bidang target."
          : "Tambahkan lebih banyak kata kunci yang sesuai industri target.",
        status: keywordReady ? "info" : "warning",
      },
    ],
  };
}

export default function LinkedInPage() {
  const [profileUrl, setProfileUrl] = useState("linkedin.com/in/budi-pratama");
  const [selectedIndustry, setSelectedIndustry] = useState<"tech" | "marketing" | "design">("tech");
  const [copied, setCopied] = useState(false);

  const activeTemplate = industryTemplates[selectedIndustry];
  const linkedinAudit = buildLinkedinAudit(profileUrl, activeTemplate);
  const score = linkedinAudit.score;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#d8c8c0] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d8c8c0] bg-[#202048]/5 px-3 py-1 text-xs font-semibold text-[#202048]">
              Fitur 2: LinkedIn Branding Optimizer
            </div>
            <h1 className="font-display mt-2 text-3xl font-bold text-[#202048] md:text-4xl">
              Optimasi Profil LinkedIn &amp; Referensi Copywriting
            </h1>
            <p className="mt-1 text-sm text-[#6f6870]">
              Lihat audit profil berbasis checklist, rekomendasi kata kunci, dan contoh deskripsi profesional untuk bidang yang kamu incar.
            </p>
          </div>

          <div className="rounded-xl border border-[#d8c8c0] bg-[#202048]/5 p-3 text-center shadow-sm">
            <span className="text-[10px] uppercase font-bold text-[#6f6870]">Skor Profil LinkedIn</span>
            <p className="font-display text-2xl font-bold text-[#202048]">{score}/100</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Profile Scorer & Settings */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-[#d8c8c0] bg-[#202048]/5 p-6 shadow-sm">
              <h2 className="font-display text-base font-bold text-[#202048] border-b border-[#f8e8d8] pb-3 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> Profile Scoring &amp; Audit URL
              </h2>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-[#6f6870]">Tautan URL LinkedIn Anda</label>
                <div className="mt-1">
                  <input
                    type="text"
                    value={profileUrl}
                    onChange={(e) => setProfileUrl(e.target.value)}
                    className="flex-1 rounded-xl border border-[#d8c8c0] px-3.5 py-2 text-xs focus:border-[#202048] focus:outline-none"
                  />
                  <p className="mt-2 text-[11px] text-[#6f6870]">
                    Skor contoh diperbarui dari format URL dan checklist profil di bawah.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <p className="text-xs font-bold text-[#202048]">Checklist Kelengkapan Profil:</p>
                <div className="space-y-2 text-xs">
                  {linkedinAudit.checklist.map((item) => (
                    <div
                      key={item.label}
                      className={`rounded-xl p-3 ${
                        item.status === "good"
                          ? "bg-[#c8a060]/12 text-[#202048]"
                          : item.status === "warning"
                            ? "bg-[#202048]/8 text-[#202048]"
                            : "bg-[#f8e8d8] text-[#202048]"
                      }`}
                    >
                      <p className="font-medium">
                        {item.status === "good" ? "✓" : item.status === "warning" ? "!" : "i"} {item.label}
                      </p>
                      <p className="mt-1 text-[11px] text-[#6f6870]">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Select Target Industry */}
            <div className="rounded-2xl border border-[#d8c8c0] bg-[#202048]/5 p-6 shadow-sm">
              <h2 className="font-display text-base font-bold text-[#202048] border-b border-[#f8e8d8] pb-3 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg> Pilih Bidang Industri Target
              </h2>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <button
                  onClick={() => setSelectedIndustry("tech")}
                  className={`rounded-xl p-3 text-xs font-bold transition-all ${
                    selectedIndustry === "tech"
                      ? "bg-[#202048] text-[#f8e8d8] shadow-md"
                      : "bg-[#f8e8d8] text-[#6f6870] hover:bg-[#d8c8c0]"
                  }`}
                >
                  Web Dev / IT
                </button>
                <button
                  onClick={() => setSelectedIndustry("marketing")}
                  className={`rounded-xl p-3 text-xs font-bold transition-all ${
                    selectedIndustry === "marketing"
                      ? "bg-[#202048] text-[#f8e8d8] shadow-md"
                      : "bg-[#f8e8d8] text-[#6f6870] hover:bg-[#d8c8c0]"
                  }`}
                >
                  Marketing &amp; Sales
                </button>
                <button
                  onClick={() => setSelectedIndustry("design")}
                  className={`rounded-xl p-3 text-xs font-bold transition-all ${
                    selectedIndustry === "design"
                      ? "bg-[#202048] text-[#f8e8d8] shadow-md"
                      : "bg-[#f8e8d8] text-[#6f6870] hover:bg-[#d8c8c0]"
                  }`}
                >
                  UI/UX &amp; Design
                </button>
              </div>
            </div>
          </div>

          {/* Copywriting Generator Output */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-[#d8c8c0] bg-[#202048]/5 p-6 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#f8e8d8] pb-3">
                <h2 className="font-display text-base font-bold text-[#202048] flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg> Referensi Copywriting
                </h2>
                {copied && (
                  <span className="text-xs font-semibold text-[#202048] bg-[#c8a060]/12 px-2.5 py-1 rounded-md">
                    ✓ Tersalin ke Clipboard!
                  </span>
                )}
              </div>

              {/* Headline Generator */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-[#202048]">1. Rekomendasi Headline LinkedIn</label>
                  <button
                    onClick={() => handleCopy(activeTemplate.headline)}
                    className="text-xs font-semibold text-[#202048] hover:text-[#c8a060]"
                  >
                    Salin Headline
                  </button>
                </div>
                <div className="rounded-xl border border-[#d8c8c0] bg-[#f8e8d8] p-4 text-xs font-medium text-[#6f6870] leading-relaxed">
                  {activeTemplate.headline}
                </div>
              </div>

              {/* About Generator */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-[#202048]">2. Rekomendasi Deskripsi &quot;About / Ringkasan&quot;</label>
                  <button
                    onClick={() => handleCopy(activeTemplate.about)}
                    className="text-xs font-semibold text-[#202048] hover:text-[#c8a060]"
                  >
                    Salin About
                  </button>
                </div>
                <div className="rounded-xl border border-[#d8c8c0] bg-[#f8e8d8] p-4 text-xs font-medium text-[#6f6870] leading-relaxed">
                  {activeTemplate.about}
                </div>
              </div>

              {/* Keywords Tag Cloud */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#202048]">3. Kata Kunci (Keywords) Wajib Disematkan:</label>
                <div className="flex flex-wrap gap-2 pt-1">
                  {activeTemplate.keywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg bg-[#202048]/5 px-3 py-1.5 text-xs font-semibold text-[#202048] border border-[#d8c8c0]"
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
