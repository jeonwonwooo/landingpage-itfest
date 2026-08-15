import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const problems = [
  {
    title: "Bingung membuat CV",
    desc: "Tidak tahu cara menulis CV yang menarik perhatian HRD.",
  },
  {
    title: "CV tidak ATS-friendly",
    desc: "Format CV tidak lolos sistem seleksi otomatis perusahaan.",
  },
  {
    title: "LinkedIn biasa saja",
    desc: "Profil belum terlihat profesional di mata recruiter.",
  },
  {
    title: "Tidak punya portofolio",
    desc: "Belum ada tempat untuk menunjukkan kemampuan & karya nyata.",
  },
];

export default function Problem() {
  return (
    <section className="bg-[#f8e8d8] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Masalah Umum"
            title="Kesulitan memulai karier? Kamu tidak sendiri."
            description="Banyak mahasiswa dan fresh graduate menghadapi tantangan yang sama sebelum mendapatkan pekerjaan pertama."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="card-hover h-full rounded-xl border border-[#d8c8c0] bg-[#202048]/5 p-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#c8a060]/12">
                  <svg
                    className="text-[#c8a060]"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <h3 className="font-display mt-4 text-base font-bold text-[#202048]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6f6870]">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2} className="mt-14 text-center">
          <p className="text-sm font-medium text-[var(--primary)]">
            Karierku membantu menyelesaikannya
          </p>
        </Reveal>
      </div>
    </section>
  );
}
