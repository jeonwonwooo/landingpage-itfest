"use client";

import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "Gratis",
    period: "selamanya",
    desc: "Cocok untuk mencoba fitur dasar sebelum commit.",
    features: [
      "CV Builder (1 template)",
      "Skor ATS (1x per hari)",
      "Preview LinkedIn Audit",
      "1 Portofolio Link",
    ],
    buttonText: "Mulai Gratis",
    actionType: "link", // Ngarah ke halaman login
    highlight: false,
  },
  {
    name: "Pro",
    price: "Rp 49rb",
    period: "/bulan",
    desc: "Untuk pencari kerja yang serius ingin lolos seleksi.",
    features: [
      "Semua fitur Starter",
      "CV Builder (unlimited template)",
      "Skor ATS unlimited",
      "AI Rewrite & Saran",
      "LinkedIn Optimization",
      "Portfolio Unlimited",
      "Prioritas Support",
    ],
    buttonText: "Hubungi Kami",
    actionType: "modal", // Munculin Pop-up
    highlight: true,
  },
  {
    name: "Team",
    price: "Rp 199rb",
    period: "/bulan",
    desc: "Untuk tim rekrutmen atau kampus yang butuh batch processing.",
    features: [
      "Semua fitur Pro",
      "Batch CV Review (hingga 50 CV)",
      "Dashboard Analytics",
      "Dedicated Account Manager",
      "Custom Branding",
      "API Access",
    ],
    buttonText: "Hubungi Kami",
    actionType: "modal", // Munculin Pop-up
    highlight: false,
  },
];

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = (planName: string) => {
    setSelectedPlan(planName);
    setIsSubmitted(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulasi loading ngirim data, terus nutup otomatis setelah 2.5 detik
    setTimeout(() => {
      setIsModalOpen(false);
    }, 2500);
  };

  return (
    <>
      <section id="harga" className="bg-[#202048] py-20 md:py-28 relative">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#f8e8d8] md:text-4xl">
              Pilih paket yang sesuai kebutuhanmu
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[#d8c8c0]">
              Mulai gratis, upgrade saat dirasa perlu. Tidak ada biaya tersembunyi.
            </p>
          </Reveal>

          <Reveal delay={1} className="mt-14">
            <div className="grid gap-6 md:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                    plan.highlight
                      ? "border-[#c8a060] bg-[#c8a060]/12 shadow-[0_8px_40px_-12px_rgba(200,160,96,0.3)]"
                      : "border-[#d8c8c0]/40 bg-[#202048]/80"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-lg font-bold text-[#f8e8d8]">
                      {plan.name}
                    </h3>
                    {plan.highlight && (
                      <Badge variant="emerald" className="text-[9px]">
                        Populer
                      </Badge>
                    )}
                  </div>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-display text-3xl font-bold text-[#f8e8d8]">
                      {plan.price}
                    </span>
                    <span className="text-sm text-[#d8c8c0]">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-[#d8c8c0]">{plan.desc}</p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-[#f8e8d8]"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {plan.actionType === "link" ? (
                    <Link
                      href="/login"
                      className={`mt-6 block rounded-xl py-3 text-center text-sm font-bold transition-all duration-300 ${
                        plan.highlight
                          ? "bg-[#c8a060] text-[#202048] hover:bg-[#f8e8d8] hover:shadow-md"
                          : "border border-[#d8c8c0]/40 bg-[#202048]/80 text-[#f8e8d8] hover:border-[#c8a060] hover:bg-[#c8a060]/10"
                      }`}
                    >
                      {plan.buttonText}
                    </Link>
                  ) : (
                    <button
                      onClick={() => openModal(plan.name)}
                      className={`mt-6 w-full rounded-xl py-3 text-center text-sm font-bold transition-all duration-300 ${
                        plan.highlight
                          ? "bg-[#c8a060] text-[#202048] hover:bg-[#f8e8d8] hover:shadow-md"
                          : "border border-[#d8c8c0]/40 bg-[#202048]/80 text-[#f8e8d8] hover:border-[#c8a060] hover:bg-[#c8a060]/10"
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- DESAIN POP-UP (MODAL) UPGRADE --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#202048]/60 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={closeModal}></div>
          
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-[#6f6870] hover:text-[#e53e3e] w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              ✕
            </button>

            {!isSubmitted ? (
              <>
                <h2 className="text-2xl font-bold text-[#202048] mb-2">
                  Upgrade ke {selectedPlan}
                </h2>
                <p className="text-sm text-[#6f6870] mb-6">
                  Isi detail di bawah ini, tim kami akan mengirimkan instruksi pembayaran.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#6f6870] mb-1">Nama Lengkap</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Masukkan nama"
                      className="w-full rounded-xl border border-[#d8c8c0] px-4 py-3 text-sm focus:border-[#202048] focus:outline-none focus:ring-2 focus:ring-[#c8a060]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#6f6870] mb-1">Email</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="email@contoh.com"
                      className="w-full rounded-xl border border-[#d8c8c0] px-4 py-3 text-sm focus:border-[#202048] focus:outline-none focus:ring-2 focus:ring-[#c8a060]/20"
                    />
                  </div>
                  
                  {/* DROPDOWN PEMBAYARAN BARU */}
                  <div>
                    <label className="block text-xs font-semibold text-[#6f6870] mb-1">Metode Pembayaran</label>
                    <select 
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-[#d8c8c0] bg-white px-4 py-3 text-sm text-[#6f6870] focus:border-[#202048] focus:outline-none focus:ring-2 focus:ring-[#c8a060]/20"
                    >
                      <option value="" disabled>Pilih metode...</option>
                      <option value="qris">QRIS (GoPay, OVO, DANA)</option>
                      <option value="bca">Transfer Bank - BCA</option>
                      <option value="mandiri">Transfer Bank - Mandiri</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="mt-4 w-full bg-[#202048] text-[#f8e8d8] px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-[#c8a060] transition-colors active:scale-95"
                  >
                    Lanjutkan Pembayaran
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#c8a060]/20 text-[#c8a060]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#202048] mb-2">Permintaan Diterima!</h2>
                <p className="text-sm text-[#6f6870]">
                  Terima kasih! Kami akan segera mengirimkan tagihan pembayaran ke email kamu.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}