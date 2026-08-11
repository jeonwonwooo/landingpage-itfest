"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";

interface PresetQuery {
  label: string;
  userText: string;
  aiReply: {
    score: number;
    verdict: string;
    tips: string[];
    betterText: string;
  };
}

const presets: PresetQuery[] = [
  {
    label: "Koreksi Deskripsi Pengalaman",
    userText: "Saya bertanggung jawab membuat postingan media sosial dan membantu promosi toko kelontong UMKM.",
    aiReply: {
      score: 68,
      verdict: "Kurang kata kerja aktif dan metrik dampak terukur.",
      tips: [
        "Gunakan kata kerja aksi seperti 'Merancang', 'Mengelola', 'Meningkatkan'.",
        "Tambahkan angka konkret (misal: jumlah konten, persentase penjualan).",
        "Sebutkan tools digital (Canva, Instagram Ads, Meta Business Suite)."
      ],
      betterText: "Merancang dan mengelola 25+ konten media sosial mingguan untuk UMKM kuliner lokal, berhasil meningkatkan pengikut Instagram sebesar 40% dan mendorong kenaikan omzet bulanan hingga 15%."
    }
  },
  {
    label: "Cek Kata Kerja Aktif",
    userText: "Tugas saya adalah membantu dosen menginput data mahasiswa dan mengurus berkas seminar.",
    aiReply: {
      score: 74,
      verdict: "Terlalu pasif, kata 'membantu' dapat ditingkatkan.",
      tips: [
        "Ganti 'membantu menginput' menjadi 'Mengadministrasikan & Memvalidasi'.",
        "Sebutkan ketelitian data (misal: 500+ entri data tanpa kesalahan)."
      ],
      betterText: "Mengadministrasikan dan memvalidasi 500+ entri data akademik mahasiswa dengan akurasi 100% serta mengoordinasikan logistik 3 agenda seminar nasional."
    }
  },
  {
    label: "Optimasi Skill untuk ATS",
    userText: "Keahlian: Pekerja keras, Jujur, Microsoft Word, HTML dasar, Kerja tim.",
    aiReply: {
      score: 55,
      verdict: "Hard skill terlalu umum, soft skill tidak terukur.",
      tips: [
        "Pisahkan menjadi 'Technical Skills' dan 'Core Competencies'.",
        "Gunakan istilah spesifik industri (misal: React.js, SEO Copywriting, Data Analysis)."
      ],
      betterText: "Technical: HTML5/CSS3, JavaScript (Basic), Microsoft Office Suite. Competencies: Cross-functional Collaboration, Time Management, Customer Service."
    }
  }
];

export default function AIChatbotDemo() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [customInput, setCustomInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const activePreset = presets[selectedIndex];

  const handleAnalyzeCustom = () => {
    if (!customInput.trim()) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 600);
  };

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Badge variant="teal">Fitur 1: AI Chatbot Reviewer</Badge>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Simulasi Koreksi CV Interaktif Berbasis AI
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Dapatkan masukan langsung mengenai kekurangan pada deskripsi pekerjaan Anda sebelum dikirimkan ke HRD atau pendaftaran magang.
          </p>
        </Reveal>

        <Reveal delay={1} className="mt-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Sidebar Presets */}
            <div className="lg:col-span-4 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Pilih Contoh Kalimat CV:
              </p>
              {presets.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setSelectedIndex(idx);
                    setCustomInput("");
                  }}
                  className={`w-full text-left rounded-xl p-4 border transition-all ${
                    selectedIndex === idx && !customInput
                      ? "border-teal-500 bg-teal-50/50 shadow-sm ring-1 ring-teal-500"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <p className="font-display text-sm font-bold text-slate-900">
                    {preset.label}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                    &quot;{preset.userText}&quot;
                  </p>
                </button>
              ))}

              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Atau Uji Kalimat Anda Sendiri:
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    placeholder="Ketik kalimat CV Anda di sini..."
                    className="flex-1 rounded-xl border border-slate-200 px-3.5 py-2 text-xs focus:border-teal-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleAnalyzeCustom}
                    className="rounded-xl bg-slate-900 px-3.5 py-2 text-xs font-bold text-white hover:bg-slate-800"
                  >
                    Analisis
                  </button>
                </div>
              </div>
            </div>

            {/* Main Interactive Chat Area */}
            <div className="lg:col-span-8">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 text-white shadow-xl">
                {/* Header Chat */}
                <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500 text-slate-950 font-bold text-sm">
                      K
                    </span>
                    <div>
                      <h3 className="font-display text-sm font-bold text-white">
                        Karierku AI Reviewer Bot (Gemini Engine)
                      </h3>
                      <p className="text-[10px] text-teal-400">
                        ● Online • Menjawab dalam &lt;1 detik
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">Skor Kualitas:</span>
                    <span className={`font-display font-bold text-sm px-2.5 py-1 rounded-lg ${
                      activePreset.aiReply.score >= 70 ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"
                    }`}>
                      {activePreset.aiReply.score}/100
                    </span>
                  </div>
                </div>

                {/* Body Chat */}
                <div className="p-6 space-y-4 max-h-[480px] overflow-y-auto">
                  {/* User Bubble */}
                  <div className="flex justify-end">
                    <div className="max-w-md rounded-2xl bg-teal-600 px-4 py-3 text-xs text-white shadow-sm">
                      <p className="font-semibold text-[10px] text-teal-100 mb-1">Anda (Pencari Kerja)</p>
                      <p className="leading-relaxed">
                        {customInput ? customInput : activePreset.userText}
                      </p>
                    </div>
                  </div>

                  {/* AI Bubble */}
                  {isAnalyzing ? (
                    <div className="flex items-center gap-2 text-slate-400 text-xs py-4">
                      <span className="h-2 w-2 rounded-full bg-teal-400 typing-dot" />
                      <span className="h-2 w-2 rounded-full bg-teal-400 typing-dot" />
                      <span className="h-2 w-2 rounded-full bg-teal-400 typing-dot" />
                      <span>Sedang menganalisis struktur ATS dan kata kunci...</span>
                    </div>
                  ) : (
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-teal-500 text-slate-950 font-bold text-xs">
                        AI
                      </div>
                      <div className="space-y-3 flex-1 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-xs">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <span className="font-semibold text-amber-400">
                            ⚠️ {activePreset.aiReply.verdict}
                          </span>
                          <span className="text-[10px] text-slate-500">Rekomendasi ATS</span>
                        </div>

                        <div>
                          <p className="text-[11px] font-bold text-slate-300">Poin Perbaikan Kritis:</p>
                          <ul className="mt-1.5 space-y-1 text-slate-400">
                            {activePreset.aiReply.tips.map((tip, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-teal-400 font-bold">•</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-xl border border-teal-500/30 bg-teal-950/40 p-3">
                          <p className="text-[11px] font-bold text-teal-300">💡 Saran Hasil Perbaikan (Siap Paste):</p>
                          <p className="mt-1 text-slate-200 leading-relaxed font-medium">
                            &quot;{activePreset.aiReply.betterText}&quot;
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Chat Action */}
                <div className="border-t border-slate-800 bg-slate-950 px-6 py-3 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Ingin mengoreksi seluruh dokumen CV Anda?</span>
                  <a
                    href="/cv"
                    className="rounded-lg bg-teal-500 px-4 py-1.5 font-bold text-slate-950 hover:bg-teal-400"
                  >
                    Buka Full CV Reviewer →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
