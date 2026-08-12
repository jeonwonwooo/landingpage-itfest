"use client";

import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Button from "@/components/ui/Button";

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export default function CVPage() {
  const [fullName, setFullName] = useState("Budi Pratama");
  const [email, setEmail] = useState("budi.pratama@email.com");
  const [phone, setPhone] = useState("+62 812-3456-7890");
  const [headline, setHeadline] = useState("Software Engineer Student & Tech Enthusiast");
  const [summary, setSummary] = useState("Mahasiswa Teknik Informatika tingkat akhir yang berpengalaman mengembangkan aplikasi web dengan Next.js dan Tailwind. Memiliki semangat tinggi dalam memecahkan masalah dan siap berkontribusi pada skala industri.");
  
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      role: "Web Developer Intern",
      company: "UMKM Kopi Lokal Nusantara",
      period: "Jan 2026 - Jun 2026",
      description: "Mengembangkan platform pemesanan online berbasis Next.js, mengintegrasikan payment gateway, dan meningkatkan trafik pengunjung toko hingga 35%.",
    },
    {
      role: "Ketua Divisi IT",
      company: "Himpunan Mahasiswa Komputer",
      period: "Sep 2024 - Des 2025",
      description: "Mengoordinasikan tim 8 orang untuk membangun website komite seminar nasional yang dikunjungi oleh 1.500+ peserta.",
    }
  ]);

  const [newRole, setNewRole] = useState("");
  const [newCompany, setNewCompany] = useState("");
  const [newPeriod, setNewPeriod] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const [aiScore, setAiScore] = useState(88);
  const [aiFeedback, setAiFeedback] = useState([
    { type: "good", text: "Struktur tanggal dan urutan riwayat kerja sudah memenuhi kriteria ATS." },
    { type: "warning", text: "Saran: Tambahkan lebih banyak metrik persentase pada deskripsi organisasi Himpunan." },
    { type: "good", text: "Penggunaan kata kerja aktif 'Mengembangkan', 'Mengintegrasikan', 'Mengoordinasikan' sangat baik." }
  ]);

  const handleAddExperience = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRole || !newCompany) return;
    setExperiences([...experiences, {
      role: newRole,
      company: newCompany,
      period: newPeriod || "2026",
      description: newDesc || "Menjalankan tugas profesional dengan tanggung jawab penuh.",
    }]);
    setNewRole("");
    setNewCompany("");
    setNewPeriod("");
    setNewDesc("");
    setAiScore(Math.min(98, aiScore + 4));
  };

  return (
    <div className="min-h-screen bg-[#fbf2e8] flex flex-col">
      <Navbar />

      <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#d8c8c0] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c6cbe8] bg-[#eef0f8] px-3 py-1 text-xs font-semibold text-[#151530]">
              ⚡ Fitur 1: CV Builder &amp; AI Reviewer
            </div>
            <h1 className="font-display mt-2 text-3xl font-bold text-[#202048] md:text-4xl">
              Buat CV ATS-Friendly &amp; Koreksi Instan
            </h1>
            <p className="mt-1 text-sm text-[#5a545b]">
              Isi formulir di sebelah kiri, lihat pratinjau format ATS di kanan, dan dapatkan masukan presisi dari AI.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-[#d8c8c0] bg-white p-3 text-center shadow-sm">
              <span className="text-[10px] uppercase font-bold text-[#a39da4]">Skor ATS Live</span>
              <p className={`font-display text-2xl font-bold ${aiScore >= 80 ? "text-[#b8935a]" : "text-[#b8935a]"}`}>
                {aiScore}/100
              </p>
            </div>
            <button
              onClick={() => alert("CV berhasil di-export ke format PDF ATS Standard!")}
              className="rounded-xl bg-[#1a1a3a] px-5 py-3 font-display text-xs font-bold text-white shadow-md hover:bg-[#202048] transition-all"
            >
              📥 Download CV (PDF)
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Input Section */}
          <div className="lg:col-span-6 space-y-6">
            {/* Personal Data */}
            <div className="rounded-2xl border border-[#d8c8c0] bg-white p-6 shadow-sm">
              <h2 className="font-display text-base font-bold text-[#202048] border-b border-[#f8e8d8] pb-3 flex items-center gap-2">
                <span>👤</span> Data Pribadi &amp; Kontak
              </h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#38365a]">Nama Lengkap</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-[#d8c8c0] px-3.5 py-2 text-xs focus:border-[#202048] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#38365a]">Headline Profesional</label>
                  <input
                    type="text"
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-[#d8c8c0] px-3.5 py-2 text-xs focus:border-[#202048] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#38365a]">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-[#d8c8c0] px-3.5 py-2 text-xs focus:border-[#202048] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#38365a]">No. HP / WhatsApp</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-[#d8c8c0] px-3.5 py-2 text-xs focus:border-[#202048] focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-[#38365a]">Ringkasan Profil (Summary)</label>
                <textarea
                  rows={3}
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-[#d8c8c0] p-3 text-xs focus:border-[#202048] focus:outline-none"
                />
              </div>
            </div>

            {/* Experience Form */}
            <div className="rounded-2xl border border-[#d8c8c0] bg-white p-6 shadow-sm">
              <h2 className="font-display text-base font-bold text-[#202048] border-b border-[#f8e8d8] pb-3 flex items-center gap-2">
                <span>💼</span> Pengalaman Kerja &amp; Proyek
              </h2>

              <div className="mt-4 space-y-3">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="rounded-xl border border-[#f8e8d8] bg-[#fbf2e8] p-3.5 text-xs relative group">
                    <div className="flex justify-between font-bold text-[#202048]">
                      <span>{exp.role} — {exp.company}</span>
                      <span className="text-[#a39da4] font-normal">{exp.period}</span>
                    </div>
                    <p className="mt-1.5 text-[#5a545b] leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>

              <form onSubmit={handleAddExperience} className="mt-5 border-t border-[#f8e8d8] pt-4 space-y-3">
                <p className="text-xs font-bold text-[#2b2a52]">+ Tambah Pengalaman Baru</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Posisi (misal: Digital Marketing)"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    className="rounded-xl border border-[#d8c8c0] px-3 py-2 text-xs focus:border-[#202048] focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Perusahaan / UMKM / Organisasi"
                    value={newCompany}
                    onChange={(e) => setNewCompany(e.target.value)}
                    className="rounded-xl border border-[#d8c8c0] px-3 py-2 text-xs focus:border-[#202048] focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Periode (misal: Jan 2025 - Jun 2025)"
                  value={newPeriod}
                  onChange={(e) => setNewPeriod(e.target.value)}
                  className="w-full rounded-xl border border-[#d8c8c0] px-3 py-2 text-xs focus:border-[#202048] focus:outline-none"
                />
                <textarea
                  rows={2}
                  placeholder="Deskripsi pencapaian (Gunakan kata kerja aktif + metrik angka)"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full rounded-xl border border-[#d8c8c0] p-3 text-xs focus:border-[#202048] focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#202048] py-2.5 text-xs font-bold text-white hover:bg-[#2b2a52]"
                >
                  + Tambahkan ke CV
                </button>
              </form>
            </div>
          </div>

          {/* Live ATS Preview & AI Feedback Panel */}
          <div className="lg:col-span-6 space-y-6">
            {/* Live ATS Document Paper */}
            <div className="rounded-2xl border border-[#c4bab0] bg-white p-8 shadow-lg font-sans text-[#2b2a52]">
              <div className="border-b border-[#c4bab0] pb-4 text-center">
                <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[#202048]">{fullName}</h2>
                <p className="text-xs font-semibold text-[#5a545b] mt-1">{headline}</p>
                <p className="text-[11px] text-[#6f6870] mt-1">{email} • {phone} • Jakarta, Indonesia</p>
              </div>

              <div className="mt-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#202048] border-b border-[#d8c8c0] pb-1">
                  RINGKASAN PROFIL
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#38365a]">{summary}</p>
              </div>

              <div className="mt-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#202048] border-b border-[#d8c8c0] pb-1">
                  PENGALAMAN KERJA &amp; PROYEK
                </h3>
                <div className="mt-3 space-y-4">
                  {experiences.map((exp, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-baseline text-xs">
                        <span className="font-bold text-[#202048]">{exp.role} — <span className="font-semibold text-[#38365a]">{exp.company}</span></span>
                        <span className="text-[11px] font-medium text-[#6f6870]">{exp.period}</span>
                      </div>
                      <p className="mt-1 text-xs text-[#5a545b] leading-relaxed">• {exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#202048] border-b border-[#d8c8c0] pb-1">
                  KEAHLIAN &amp; TEKNOLOGI
                </h3>
                <p className="mt-2 text-xs text-[#38365a]">
                  <strong>Technical:</strong> Next.js, TypeScript, Tailwind CSS, REST APIs, Git &amp; GitHub.<br />
                  <strong>Soft Skills:</strong> Problem Solving, Team Leadership, Communication.
                </p>
              </div>
            </div>

            {/* AI Reviewer Live Audit */}
            <div className="rounded-2xl border border-[#2b2a52] bg-[#202048] p-6 text-white shadow-md">
              <div className="flex items-center justify-between border-b border-[#2b2a52] pb-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#202048] font-bold text-[#14142e] text-xs">AI</span>
                  <h3 className="font-display text-sm font-bold">Karierku AI Audit Report</h3>
                </div>
                <span className="text-[10px] text-[#6f74b0]">Gemini Engine Verified</span>
              </div>

              <div className="mt-4 space-y-2.5">
                {aiFeedback.map((fb, idx) => (
                  <div key={idx} className={`p-3 rounded-xl text-xs flex items-start gap-2.5 ${
                    fb.type === 'good' ? 'bg-[#4d3d22]/40 border border-[#c8a060]/30 text-[#eed8ac]' : 'bg-[#4d3d22]/40 border border-[#c8a060]/30 text-[#eed8ac]'
                  }`}>
                    <span>{fb.type === 'good' ? '✓' : '⚠️'}</span>
                    <span>{fb.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
