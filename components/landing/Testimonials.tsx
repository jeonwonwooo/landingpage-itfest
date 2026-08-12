import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const testimonials = [
  {
    title: "CV yang lolos shortlist",
    quote:
      "Setelah pakai rekomendasi Karierku, CV saya terasa lebih selaras dengan role yang dilamar. Akhirnya dapat shortlist untuk internship impian.",
    name: "Rina A.",
    role: "Mahasiswa Semester Akhir",
    initials: "RA",
    color: "bg-[#eef0f8] text-[#101026]",
  },
  {
    title: "Dari ditolak ke shortlist",
    quote:
      "Sebelumnya sering ditolak diam-diam. Setelah perbaiki CV, mulai dapat email shortlist untuk role yang sama.",
    name: "Dito S.",
    role: "Fresh Graduate",
    initials: "MS",
    color: "bg-cyan-50 text-cyan-800",
  },
  {
    title: "LinkedIn lebih ditemukan",
    quote:
      "Fitur optimasi LinkedIn-nya spesifik. Headline dan About langsung lebih profesional dan recruiter mulai reach out.",
    name: "Bayu K.",
    role: "Technical Writer",
    initials: "AK",
    color: "bg-[#fbf3e4] text-[#8c6f3f]",
  },
  {
    title: "Tahu kapan CV siap",
    quote:
      "Saya akhirnya tahu kapan CV sudah cukup baik untuk dikirim. Skor ATS dan checklist-nya jelas banget.",
    name: "Rizky P.",
    role: "Product Manager",
    initials: "KP",
    color: "bg-[#fbf3e4] text-[#8c6f3f]",
  },
  {
    title: "Portofolio dalam satu link",
    quote:
      "Portfolio builder-nya simpel tapi rapi. Satu link untuk semua proyek, langsung dibagikan di lamaran.",
    name: "Dian P.",
    role: "HR Manager",
    initials: "SP",
    color: "bg-violet-50 text-violet-800",
  },
  {
    title: "Rekomendasi yang actionable",
    quote:
      "AI-nya tidak generic. Setiap saran bisa langsung diterapkan — dari kata kerja aktif sampai metrik.",
    name: "Fajar S.",
    role: "Software Developer",
    initials: "SS",
    color: "bg-rose-50 text-rose-800",
  },
];

function TestimonialCard({
  t,
}: {
  t: (typeof testimonials)[number];
}) {
  return (
    <article className="card-hover flex h-full w-[320px] shrink-0 flex-col rounded-2xl border border-[#d8c8c0] bg-white p-6 sm:w-[360px]">
      <h3 className="font-display text-base font-bold text-[#202048]">
        {t.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5a545b]">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3 border-t border-[#f8e8d8] pt-5">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${t.color}`}
        >
          {t.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#202048]">{t.name}</p>
          <p className="text-xs text-[#6f6870]">{t.role}</p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const items = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Testimoni"
            title="Apa kata pengguna kami"
            description="Cerita dari mahasiswa dan profesional muda yang pakai Karierku untuk perbaiki kariernya."
          />
        </Reveal>
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--background)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--background)] to-transparent" />
        <div className="testimonial-track flex w-max gap-5 px-4">
          {items.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
