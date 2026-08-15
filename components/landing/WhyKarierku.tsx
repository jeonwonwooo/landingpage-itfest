import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const reasons = [
  {
    title: "Lebih terarah",
    desc: "Tahu bagian mana yang perlu dibenahi di CV, LinkedIn, dan portofolio tanpa coba-coba.",
  },
  {
    title: "Masukan cepat",
    desc: "Dapatkan catatan singkat yang mudah dipahami untuk setiap bagian dokumen.",
  },
  {
    title: "Lebih praktis",
    desc: "CV, LinkedIn, dan portofolio ditata dalam satu alur sehingga kamu tidak perlu berpindah-pindah tool.",
  },
];

export default function WhyKarierku() {
  return (
    <section className="bg-[#f8e8d8] py-20 md:py-28">
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
              <div className="card-hover rounded-xl border border-[#d8c8c0] bg-[#202048]/5 p-7">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#202048]/5 font-display text-sm font-bold text-[var(--primary)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display mt-4 text-lg font-bold text-[#202048]">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6f6870]">
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
