import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";

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
    coba: "/cv",
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
    coba: "/cv",
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
    coba: "mailto:hello@karierku.id",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="harga" className="bg-[#202048] py-20 md:py-28">
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
                <Link
                  href={plan.coba}
                  className={`mt-6 block rounded-xl py-3 text-center text-sm font-bold transition-all duration-300 ${
                    plan.highlight
                      ? "bg-[#c8a060] text-[#202048] hover:bg-[#f8e8d8] hover:shadow-md"
                      : "border border-[#d8c8c0]/40 bg-[#202048]/80 text-[#f8e8d8] hover:border-[#c8a060] hover:bg-[#c8a060]/10"
                  }`}
                >
                  {plan.price === "Gratis" ? "Mulai Gratis" : "Hubungi Kami"}
                </Link>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
