"use client";

import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  link: string;
  tags: string[];
}

export default function PortfolioPage() {
  const [username, setUsername] = useState("budi-pratama");
  const [template, setTemplate] = useState<"dev" | "design" | "writer" | "umkm">("dev");

  const [projects, setProjects] = useState<ProjectItem[]>([
    {
      id: "1",
      title: "Digitalisasi Pemesanan Online UMKM Kopi Lokal",
      category: "Web Development & E-Commerce",
      description: "Membangun sistem katalog digital & pemesanan WhatsApp terintegrasi yang berhasil meningkatkan penjualan harian UMKM hingga 35%.",
      link: "https://kopi-lokal-demo.vercel.app",
      tags: ["Next.js", "Tailwind CSS", "WhatsApp API"],
    },
    {
      id: "2",
      title: "Website Komite Seminar Nasional IT 2026",
      category: "Fullstack Web & Event Platform",
      description: "Sistem registrasi peserta dan cetak sertifikat otomatis untuk 1.500+ mahasiswa dari seluruh Indonesia.",
      link: "https://itfest-2026.id",
      tags: ["TypeScript", "React", "PostgreSQL"],
    }
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newLink, setNewLink] = useState("");
  const [newTags, setNewTags] = useState("");

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;
    setProjects([
      ...projects,
      {
        id: Date.now().toString(),
        title: newTitle,
        category: newCategory || "Proyek Digital",
        description: newDesc || "Studi kasus singkat pengembangan karya profesional.",
        link: newLink || "#",
        tags: newTags ? newTags.split(",").map((t) => t.trim()) : ["Portfolio"],
      }
    ]);
    setNewTitle("");
    setNewCategory("");
    setNewDesc("");
    setNewLink("");
    setNewTags("");
  };

  return (
    <div className="min-h-screen bg-[#fbf2e8] flex flex-col">
      <Navbar />

      <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#d8c8c0] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
              🎨 Fitur 3: Portfolio Builder &amp; Showcase
            </div>
            <h1 className="font-display mt-2 text-3xl font-bold text-[#202048] md:text-4xl">
              Bangun Showcase Karya Profesional &amp; Shareable Link
            </h1>
            <p className="mt-1 text-sm text-[#5a545b]">
              Pilih template layout, tambahkan studi kasus proyek, dan dapatkan 1 link portofolio unik.
            </p>
          </div>

          <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-4">
            <span className="text-[10px] font-bold uppercase text-purple-700">Shareable Custom Sub-Domain:</span>
            <div className="mt-1 flex items-center gap-2">
              <span className="font-display font-bold text-sm text-[#202048]">
                karierku.id/p/<span className="text-purple-600">{username}</span>
              </span>
              <button
                onClick={() => alert(`Tautan karierku.id/p/${username} disalin ke clipboard!`)}
                className="rounded-lg bg-purple-600 px-3 py-1 text-xs font-bold text-white hover:bg-purple-500"
              >
                Salin Link
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Builder Controls */}
          <div className="lg:col-span-5 space-y-6">
            {/* Template Selector */}
            <div className="rounded-2xl border border-[#d8c8c0] bg-white p-6 shadow-sm">
              <h2 className="font-display text-base font-bold text-[#202048] border-b border-[#f8e8d8] pb-3 flex items-center gap-2">
                <span>📐</span> Pilih Template Layout Portofolio
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  onClick={() => setTemplate("dev")}
                  className={`p-3 rounded-xl border text-left text-xs transition-all ${
                    template === "dev" ? "border-purple-600 bg-purple-50 font-bold text-purple-900" : "border-[#d8c8c0] text-[#38365a]"
                  }`}
                >
                  💻 Web Developer Layout
                </button>
                <button
                  onClick={() => setTemplate("design")}
                  className={`p-3 rounded-xl border text-left text-xs transition-all ${
                    template === "design" ? "border-purple-600 bg-purple-50 font-bold text-purple-900" : "border-[#d8c8c0] text-[#38365a]"
                  }`}
                >
                  🎨 Designer Visual Grid
                </button>
                <button
                  onClick={() => setTemplate("writer")}
                  className={`p-3 rounded-xl border text-left text-xs transition-all ${
                    template === "writer" ? "border-purple-600 bg-purple-50 font-bold text-purple-900" : "border-[#d8c8c0] text-[#38365a]"
                  }`}
                >
                  ✍️ Content Writer Case Study
                </button>
                <button
                  onClick={() => setTemplate("umkm")}
                  className={`p-3 rounded-xl border text-left text-xs transition-all ${
                    template === "umkm" ? "border-purple-600 bg-purple-50 font-bold text-purple-900" : "border-[#d8c8c0] text-[#38365a]"
                  }`}
                >
                  🏪 UMKM Consultant Portfolio
                </button>
              </div>
            </div>

            {/* Custom Subdomain Input */}
            <div className="rounded-2xl border border-[#d8c8c0] bg-white p-6 shadow-sm">
              <h2 className="font-display text-base font-bold text-[#202048] border-b border-[#f8e8d8] pb-3">
                🔗 Atur Custom Username Tautan
              </h2>
              <div className="mt-4">
                <label className="block text-xs font-semibold text-[#38365a]">Username Subdomain</label>
                <div className="mt-1 flex rounded-xl border border-[#d8c8c0] overflow-hidden text-xs">
                  <span className="bg-[#f8e8d8] px-3 py-2 text-[#6f6870] font-medium border-r border-[#d8c8c0]">
                    karierku.id/p/
                  </span>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/\s+/g, "-"))}
                    className="flex-1 px-3 py-2 font-bold text-[#202048] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Add Project Form */}
            <div className="rounded-2xl border border-[#d8c8c0] bg-white p-6 shadow-sm">
              <h2 className="font-display text-base font-bold text-[#202048] border-b border-[#f8e8d8] pb-3">
                + Tambah Proyek / Studi Kasus
              </h2>
              <form onSubmit={handleAddProject} className="mt-4 space-y-3">
                <input
                  type="text"
                  placeholder="Judul Proyek (misal: Redesain Landing Page UMKM)"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full rounded-xl border border-[#d8c8c0] px-3 py-2 text-xs focus:border-purple-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Kategori Proyek"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full rounded-xl border border-[#d8c8c0] px-3 py-2 text-xs focus:border-purple-500 focus:outline-none"
                />
                <textarea
                  rows={2}
                  placeholder="Studi kasus singkat &amp; dampak hasil proyek"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full rounded-xl border border-[#d8c8c0] p-3 text-xs focus:border-purple-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Link Live Proyek / Demo / Repository"
                  value={newLink}
                  onChange={(e) => setNewLink(e.target.value)}
                  className="w-full rounded-xl border border-[#d8c8c0] px-3 py-2 text-xs focus:border-purple-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Tags (pisahkan koma: Next.js, Figma, SEO)"
                  value={newTags}
                  onChange={(e) => setNewTags(e.target.value)}
                  className="w-full rounded-xl border border-[#d8c8c0] px-3 py-2 text-xs focus:border-purple-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-purple-700 py-2.5 text-xs font-bold text-white hover:bg-purple-600"
                >
                  + Publikasikan Proyek Ini
                </button>
              </form>
            </div>
          </div>

          {/* Live Preview Portfolio Canvas */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-[#c4bab0] bg-[#202048] p-8 text-white shadow-xl">
              <div className="border-b border-[#2b2a52] pb-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-purple-400">Live Public Preview Page</span>
                  <h2 className="font-display text-2xl font-bold text-white">Budi Pratama</h2>
                  <p className="text-xs text-[#a39da4] mt-1">karierku.id/p/{username}</p>
                </div>
                <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-300">
                  {template.toUpperCase()} Template
                </span>
              </div>

              <div className="mt-6 space-y-6">
                <p className="text-xs font-bold text-[#a39da4] uppercase tracking-wider">
                  Showcase Proyek ({projects.length} Karya)
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {projects.map((proj) => (
                    <div
                      key={proj.id}
                      className="rounded-xl border border-[#2b2a52] bg-[#14142e] p-5 transition-all hover:border-purple-500/50"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[10px] font-semibold text-purple-400 uppercase">{proj.category}</span>
                          <h3 className="font-display text-base font-bold text-white mt-0.5">{proj.title}</h3>
                        </div>
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-purple-400 hover:underline font-semibold"
                        >
                          Lihat Live →
                        </a>
                      </div>

                      <p className="mt-2 text-xs text-[#c4bab0] leading-relaxed">{proj.description}</p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {proj.tags.map((t, idx) => (
                          <span key={idx} className="rounded-md bg-[#2b2a52] px-2 py-0.5 text-[10px] text-[#c4bab0]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
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
