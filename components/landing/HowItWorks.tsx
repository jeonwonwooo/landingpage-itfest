import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    num: "01",
    title: "Isi Data",
    desc: "Masukkan data diri, pendidikan, dan pengalaman ke form sederhana.",
  },
  {
    num: "02",
    title: "AI Menganalisa",
    desc: "Sistem AI memberi skor dan rekomendasi perbaikan otomatis.",
  },
  {
    num: "03",
    title: "Dapatkan Hasil",
    desc: "Download CV, optimasi LinkedIn, dan bagikan portofolio dari satu tempat.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-t border-[#d8c8c0]/80 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Cara Kerja"
            title="Mulai dari nol hingga siap melamar"
            description="Tiga langkah sederhana — semuanya dibantu AI."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="relative text-center">
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[calc(50%+2rem)] top-8 hidden h-px w-[calc(100%-4rem)] bg-[#d8c8c0] md:block"
                  />
                )}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--primary)] bg-white font-display text-lg font-bold text-[var(--primary)]">
                  {step.num}
                </div>
                <h3 className="font-display mt-5 text-lg font-bold text-[#202048]">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-[#5a545b]">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
