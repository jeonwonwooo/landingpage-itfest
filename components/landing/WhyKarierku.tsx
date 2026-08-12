import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const reasons = [
  {
    title: "Lebih terarah",
    desc: "Tahu persis apa yang perlu diperbaiki di CV, LinkedIn, dan portofolio — tanpa menebak-nebak.",
  },
  {
    title: "Dibantu AI",
    desc: "Rekomendasi otomatis yang cepat, spesifik, dan mudah dipahami untuk setiap bagian.",
  },
  {
    title: "All-in-one",
    desc: "CV, LinkedIn, dan portofolio dalam satu platform. Tidak perlu berpindah-pindah tool.",
  },
];

export default function WhyKarierku() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Kenapa Karierku"
            title="Dibangun untuk mengurangi kebingungan pencari kerja"
            description="Menyusun dokumen profesional standar industri tidak harus rumit."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="card-hover rounded-xl border border-[#d8c8c0] bg-white p-7">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eef0f8] font-display text-sm font-bold text-[var(--primary)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display mt-4 text-lg font-bold text-[#202048]">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5a545b]">
                  {r.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
