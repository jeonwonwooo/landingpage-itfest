"use client";

import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

type AuditItem = {
  type: "good" | "warning";
  text: string;
};

function buildCvAudit(
  headline: string,
  summary: string,
  experiences: Experience[],
): { score: number; feedback: AuditItem[] } {
  let score = 54;
  const feedback: AuditItem[] = [];
  const summaryWordCount = summary.trim().split(/\s+/).filter(Boolean).length;
  const experiencesWithMetrics = experiences.filter((exp) => /\d/.test(exp.description));
  const experiencesWithActionVerbs = experiences.filter((exp) =>
    /^(meng|mem|men|ber|build|lead|design|develop|manage)/i.test(exp.description.trim()),
  );

  if (headline.trim().length >= 25) {
    score += 10;
    feedback.push({
      type: "good",
      text: "Headline sudah cukup spesifik dan membantu recruiter memahami fokus peranmu.",
    });
  } else {
    feedback.push({
      type: "warning",
      text: "Headline masih terlalu singkat. Tambahkan peran utama atau bidang yang kamu tuju.",
    });
  }

  if (summaryWordCount >= 18) {
    score += 12;
    feedback.push({
      type: "good",
      text: "Ringkasan profil sudah memberi konteks awal tentang pengalaman dan kemampuan utama.",
    });
  } else {
    feedback.push({
      type: "warning",
      text: "Ringkasan profil masih tipis. Tambahkan pengalaman, tools, atau konteks industri yang relevan.",
    });
  }

  if (experiences.length >= 2) {
    score += 10;
    feedback.push({
      type: "good",
      text: "Jumlah pengalaman sudah cukup untuk menunjukkan perkembangan peran dan tanggung jawab.",
    });
  } else {
    feedback.push({
      type: "warning",
      text: "Tambahkan minimal dua pengalaman agar recruiter melihat variasi kontribusimu.",
    });
  }

  if (experiencesWithMetrics.length > 0) {
    score += 12;
    feedback.push({
      type: "good",
      text: "Sudah ada pencapaian berbasis angka yang membuat dampak kerjamu lebih mudah dipahami.",
    });
  } else {
    feedback.push({
      type: "warning",
      text: "Belum ada metrik angka di pengalaman. Tambahkan jumlah, persentase, atau hasil yang terlihat.",
    });
  }

  if (experiencesWithActionVerbs.length === experiences.length && experiences.length > 0) {
    score += 10;
    feedback.push({
      type: "good",
      text: "Kalimat pengalaman sudah diawali kata kerja aktif sehingga terdengar lebih tegas.",
    });
  } else {
    feedback.push({
      type: "warning",
      text: "Sebagian deskripsi masih pasif. Coba awali dengan kata kerja seperti Mengelola, Membangun, atau Mengoordinasikan.",
    });
  }

  return {
    score: Math.min(96, score),
    feedback: feedback.slice(0, 4),
  };
}

export default function CVPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

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

  const cvAudit = buildCvAudit(headline, summary, experiences);
  const aiScore = cvAudit.score;
  const aiFeedback = cvAudit.feedback;

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
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail && loginPassword) {
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="w-full max-w-md">
            <div className="rounded-2xl border border-[#d8c8c0] bg-white p-8 shadow-lg">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#202048]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8a060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <h1 className="mt-4 font-display text-2xl font-bold text-[#202048]">
                  Masuk ke CV Builder
                </h1>
                <p className="mt-2 text-sm text-[#6f6870]">
                  Masuk untuk mengakses fitur pembuatan CV ATS dan review instan.
                </p>
              </div>

              <form onSubmit={handleLogin} className="mt-8 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#6f6870]">Email</label>
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="email@contoh.com"
                    className="mt-1 w-full rounded-xl border border-[#d8c8c0] px-4 py-3 text-sm focus:border-[#202048] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#6f6870]">Password</label>
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Masukkan password"
                    className="mt-1 w-full rounded-xl border border-[#d8c8c0] px-4 py-3 text-sm focus:border-[#202048] focus:outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#202048] py-3 text-sm font-bold text-[#f8e8d8] shadow-md transition-all hover:bg-[#c8a060] hover:shadow-lg"
                >
                  Masuk
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-[#6f6870]">
                  Belum punya akun?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLoggedIn(true)}
                    className="font-semibold text-[#202048] hover:text-[#c8a060]"
                  >
                    Daftar gratis
                  </button>
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#d8c8c0] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d8c8c0] bg-[#202048]/5 px-3 py-1 text-xs font-semibold text-[#202048]">
              Fitur 1: CV Builder &amp; Reviewer
            </div>
            <h1 className="font-display mt-2 text-3xl font-bold text-[#202048] md:text-4xl">
              Buat CV ATS-Friendly &amp; Koreksi Instan
            </h1>
            <p className="mt-1 text-sm text-[#6f6870]">
              Isi formulir di sebelah kiri, lihat pratinjau format ATS di kanan, dan baca ringkasan review berbasis struktur dokumen.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-[#d8c8c0] bg-[#202048]/5 p-3 text-center shadow-sm">
              <span className="text-[10px] uppercase font-bold text-[#6f6870]">Skor ATS Live</span>
              <p
                className={`font-display text-2xl font-bold ${
                  aiScore >= 80 ? "text-[#c8a060]" : "text-[#202048]"
                }`}
              >
                {aiScore}/100
              </p>
            </div>
            <button
              onClick={() => alert("CV berhasil di-export ke format PDF ATS Standard!")}
              className="rounded-xl bg-[#202048] px-5 py-3 font-display text-xs font-bold text-[#f8e8d8] shadow-md hover:bg-[#c8a060] transition-all"
            >
              Download CV (PDF)
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Input Section */}
          <div className="lg:col-span-6 space-y-6">
            {/* Personal Data */}
            <div className="rounded-2xl border border-[#d8c8c0] bg-[#202048]/5 p-6 shadow-sm">
              <h2 className="font-display text-base font-bold text-[#202048] border-b border-[#f8e8d8] pb-3 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> Data Pribadi &amp; Kontak
              </h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#6f6870]">Nama Lengkap</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-[#d8c8c0] px-3.5 py-2 text-xs focus:border-[#202048] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#6f6870]">Headline Profesional</label>
                  <input
                    type="text"
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-[#d8c8c0] px-3.5 py-2 text-xs focus:border-[#202048] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#6f6870]">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-[#d8c8c0] px-3.5 py-2 text-xs focus:border-[#202048] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#6f6870]">No. HP / WhatsApp</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-[#d8c8c0] px-3.5 py-2 text-xs focus:border-[#202048] focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-[#6f6870]">Ringkasan Profil (Summary)</label>
                <textarea
                  rows={3}
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-[#d8c8c0] p-3 text-xs focus:border-[#202048] focus:outline-none"
                />
              </div>
            </div>

            {/* Experience Form */}
            <div className="rounded-2xl border border-[#d8c8c0] bg-[#202048]/5 p-6 shadow-sm">
              <h2 className="font-display text-base font-bold text-[#202048] border-b border-[#f8e8d8] pb-3 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> Pengalaman Kerja &amp; Proyek
              </h2>

              <div className="mt-4 space-y-3">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="rounded-xl border border-[#f8e8d8] bg-[#f8e8d8]/60 p-3.5 text-xs relative group">
                    <div className="flex justify-between font-bold text-[#202048]">
                      <span>{exp.role} • {exp.company}</span>
                      <span className="text-[#6f6870] font-normal">{exp.period}</span>
                    </div>
                    <p className="mt-1.5 text-[#6f6870] leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>

              <form onSubmit={handleAddExperience} className="mt-5 border-t border-[#f8e8d8] pt-4 space-y-3">
                <p className="text-xs font-bold text-[#202048]">+ Tambah Pengalaman Baru</p>
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
                  className="w-full rounded-xl bg-[#202048] py-2.5 text-xs font-bold text-[#f8e8d8] hover:bg-[#c8a060]"
                >
                  + Tambahkan ke CV
                </button>
              </form>
            </div>
          </div>

          {/* Live ATS Preview & AI Feedback Panel */}
          <div className="lg:col-span-6 space-y-6">
            {/* Live ATS Document Paper */}
            <div className="rounded-2xl border border-[#d8c8c0] bg-[#202048]/5 p-8 shadow-lg font-sans text-[#202048]">
              <div className="border-b border-[#d8c8c0] pb-4 text-center">
                <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[#202048]">{fullName}</h2>
                <p className="text-xs font-semibold text-[#6f6870] mt-1">{headline}</p>
                <p className="text-[11px] text-[#6f6870] mt-1">{email} • {phone} • Jakarta, Indonesia</p>
              </div>

              <div className="mt-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#202048] border-b border-[#d8c8c0] pb-1">
                  RINGKASAN PROFIL
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#6f6870]">{summary}</p>
              </div>

              <div className="mt-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#202048] border-b border-[#d8c8c0] pb-1">
                  PENGALAMAN KERJA &amp; PROYEK
                </h3>
                <div className="mt-3 space-y-4">
                  {experiences.map((exp, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-baseline text-xs">
                        <span className="font-bold text-[#202048]">
                          {exp.role} • <span className="font-semibold text-[#6f6870]">{exp.company}</span>
                        </span>
                        <span className="text-[11px] font-medium text-[#6f6870]">{exp.period}</span>
                      </div>
                      <p className="mt-1 text-xs text-[#6f6870] leading-relaxed">• {exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#202048] border-b border-[#d8c8c0] pb-1">
                  KEAHLIAN &amp; TEKNOLOGI
                </h3>
                <p className="mt-2 text-xs text-[#6f6870]">
                  <strong>Technical:</strong> Next.js, TypeScript, Tailwind CSS, REST APIs, Git &amp; GitHub.<br />
                  <strong>Soft Skills:</strong> Problem Solving, Team Leadership, Communication.
                </p>
              </div>
            </div>

            {/* AI Reviewer Live Audit */}
            <div className="rounded-2xl border border-[#d8c8c0] bg-[#202048] p-6 text-[#f8e8d8] shadow-md">
              <div className="flex items-center justify-between border-b border-[#d8c8c0]/40 pb-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#c8a060] font-bold text-[#202048] text-xs">RV</span>
                  <h3 className="font-display text-sm font-bold">Ringkasan Tinjauan CV</h3>
                </div>
                <span className="text-[10px] text-[#d8c8c0]">Demo penilaian berbasis aturan</span>
              </div>

              <div className="mt-4 space-y-2.5">
                {aiFeedback.map((fb, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-2.5 rounded-xl border p-3 text-xs ${
                      fb.type === "good"
                        ? "border-[#c8a060]/30 bg-[#c8a060]/10 text-[#f8e8d8]"
                        : "border-[#d8c8c0]/40 bg-[#f8e8d8]/10 text-[#f8e8d8]"
                    }`}
                  >
                    <span>{fb.type === "good" ? "✓" : "!"}</span>
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
