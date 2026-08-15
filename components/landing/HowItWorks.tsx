import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    num: "01",
    title: "Isi Data Dasar",
    desc: "Masukkan data diri, pendidikan, pengalaman, dan target dokumen yang ingin dirapikan.",
  },
  {
    num: "02",
    title: "Tinjau Masukan",
    desc: "Pelajari catatan review, contoh rewrite, dan checklist yang tampil dari data yang kamu isi.",
  },
  {
    num: "03",
    title: "Rapikan & Gunakan",
    desc: "Perbarui dokumenmu lalu gunakan hasilnya untuk CV, LinkedIn, atau portofolio.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-t border-[#d8c8c0]/80 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#202048] md:text-4xl">
            Alur pakai Karierku
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#6f6870]">
            Mulai dari data dasar, lalu rapikan dokumen sesuai kebutuhan lamaranmu.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="relative text-center">
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[calc(50%+2.5rem)] top-7 hidden h-px w-[calc(100%-5rem)] bg-gradient-to-r from-[#d8c8c0] to-[#d8c8c0]/40 md:block"
                  />
                )}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#202048] bg-[#f8e8d8] font-display text-lg font-bold text-[#202048] shadow-sm">
                  {step.num}
                </div>
                <h3 className="font-display mt-5 text-lg font-bold text-[#202048]">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-[#6f6870]">
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
