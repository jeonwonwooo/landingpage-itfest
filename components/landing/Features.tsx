import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";

const features = [
  {
    title: "1. CV Builder & AI Reviewer",
    subtitle: "Pemeriksa & Pembuat CV Ramah ATS",
    desc: "Input data diri, riwayat pendidikan, dan pengalaman kerja ke dalam form yang secara otomatis digenerate menjadi CV berstandar ATS. Dilengkapi AI Chatbot Reviewer untuk menyoroti kekurangan dan rekomendasi perbaikan instan.",
    tags: ["Form Auto-Generate", "ATS Checker", "AI Feedback Bot"],
    href: "/cv",
    icon: "📄",
    color: "border-teal-200 bg-teal-50/30",
  },
  {
    title: "2. LinkedIn Branding Optimizer",
    subtitle: "Profile Scoring & Copywriting Generator",
    desc: "Masukkan URL LinkedIn untuk mendapatkan skor kelengkapan (1-100). Dapatkan panduan kata kunci (keywords) agar mudah ditemukan HRD serta generator copywriting otomatis untuk bagian Summary / About.",
    tags: ["Score 1-100", "Keyword Checklist", "Summary Generator"],
    href: "/linkedin",
    icon: "💼",
    color: "border-blue-200 bg-blue-50/30",
  },
  {
    title: "3. Portfolio Builder",
    subtitle: "Project Showcase & Shareable Link",
    desc: "Pamerkan karya dan proyek riil Anda dengan cara visual & terstruktur. Gunakan drag-and-drop template sesuai bidang (Dev, Designer, Writer) dan dapatkan 1 link unik yang bisa disematkan ke CV & LinkedIn.",
    tags: ["Custom Sub-Domain", "Visual Templates", "Case Study Cards"],
    href: "/portfolio",
    icon: "🎨",
    color: "border-purple-200 bg-purple-50/30",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-50 py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Badge variant="teal">Tiga Tools Utama</Badge>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Siap Kerja dari Lamaran sampai Wawancara
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Tiga alat yang saling terhubung: bikin CV, perkuat LinkedIn, dan tunjukkan portofolio — beres dalam satu tempat.
          </p>
        </Reveal>

        <Reveal delay={1} className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.color}`}
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-display mt-5 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-teal-700">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white px-2 py-1 text-[10px] font-semibold text-slate-600 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900"
                >
                  Buka Tools Ini →
                </Link>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
