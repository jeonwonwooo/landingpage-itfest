import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Link from "next/link";

export const metadata = {
  title: "Harga — Karierku",
  description:
    "Pilih paket Karierku yang sesuai kebutuhanmu. Mulai gratis, upgrade saat dirasa perlu.",
};

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
      "Email Support",
    ],
    coba: "/login",
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
      "Update Template Gratis",
    ],
    coba: "/login",
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
      "Integrasi ATS",
      "Training & Onboarding",
    ],
    coba: "/login",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Apakah ada free trial untuk paket Pro?",
    a: "Ya, kamu bisa mencoba semua fitur Pro selama 7 hari tanpa kartu kredit. Jika tidak cocok, otomatis downgrade ke paket Starter.",
  },
  {
    q: "Bagaimana cara bayar paket Pro?",
    a: "Kami menerima pembayaran via transfer bank, e-wallet (GoPay, OVO, DANA), dan kartu kredit. Pembayaran otomatis diperpanjang setiap bulan.",
  },
  {
    q: "Bisakah upgrade atau downgrade kapan saja?",
    a: "Ya. Upgrade berlaku langsung, downgrade berlaku di akhir billing cycle. Tidak ada biaya tambahan untuk perubahan paket.",
  },
  {
    q: "Apakah ada paket khusus mahasiswa?",
    a: "Belum ada paket khusus, tapi paket Starter sudah cukup untuk mencoba fitur dasar. Paket Pro juga terjangkau untuk mahasiswa.",
  },
  {
    q: "Bagaimana jika saya tidak puas dengan layanan?",
    a: "Kami memberikan garansi uang kembali 30 hari untuk paket Pro. Hubungi support kami dan kami akan proses refund.",
  },
];

export default function HargaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 md:pt-28 md:pb-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl font-bold tracking-tight text-[#202048] md:text-5xl">
              Pilih Paket yang Sesuai
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[#6f6870] md:text-lg">
              Mulai gratis, upgrade saat dirasa perlu. Tidak ada biaya tersembunyi.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-20">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlight
                    ? "border-[#c8a060] bg-[#202048] text-[#f8e8d8] shadow-[0_8px_40px_-12px_rgba(200,160,96,0.3)]"
                    : "border-[#d8c8c0] bg-white shadow-sm"
                }`}
              >
                <div className="flex items-center gap-2">
                  <h3 className={`font-display text-lg font-bold ${plan.highlight ? "text-[#f8e8d8]" : "text-[#202048]"}`}>
                    {plan.name}
                  </h3>
                  {plan.highlight && (
                    <span className="rounded-full bg-[#c8a060] px-2 py-0.5 text-[9px] font-bold text-[#202048]">
                      Populer
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className={`font-display text-3xl font-bold ${plan.highlight ? "text-[#f8e8d8]" : "text-[#202048]"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlight ? "text-[#d8c8c0]" : "text-[#6f6870]"}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mt-2 text-sm ${plan.highlight ? "text-[#d8c8c0]" : "text-[#6f6870]"}`}>
                  {plan.desc}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-sm ${plan.highlight ? "text-[#f8e8d8]" : "text-[#202048]"}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.coba}
                  className={`mt-6 block rounded-xl py-3 text-center text-sm font-bold transition-all duration-300 ${
                    plan.highlight
                      ? "bg-[#c8a060] text-[#202048] hover:bg-[#f8e8d8] hover:shadow-md"
                      : "border border-[#d8c8c0] bg-[#f8e8d8] text-[#202048] hover:border-[#c8a060] hover:bg-[#c8a060]/10"
                  }`}
                >
                  {plan.price === "Gratis" ? "Mulai Gratis" : "Hubungi Kami"}
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#202048] md:text-4xl">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base text-[#6f6870]">
                Jawaban singkat seputar paket, pembayaran, dan fitur.
              </p>
            </div>
            <div className="divide-y divide-[#d8c8c0] rounded-2xl border border-[#d8c8c0] bg-white shadow-sm">
              {faqs.map((item) => (
                <div key={item.q} className="px-6 py-6">
                  <h3 className="font-semibold text-base text-[#202048] md:text-lg">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6f6870]">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}