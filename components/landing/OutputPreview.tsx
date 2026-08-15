import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const outputs = [
  {
    label: "CV ATS-Friendly",
    desc: "Dokumen siap kirim ke HRD maupun sistem ATS.",
    tag: "PDF Export",
  },
  {
    label: "LinkedIn Profesional",
    desc: "Profil yang mudah ditemukan recruiter lewat kata kunci.",
    tag: "Score 1-100",
  },
  {
    label: "Portofolio Website",
    desc: "Satu tautan unik untuk menunjukkan karya terbaikmu.",
    tag: "Share Link",
  },
];

export default function OutputPreview() {
  return (
    <section className="border-y border-[#d8c8c0]/80 bg-[#f8e8d8]/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Output"
            title="Ini yang akan kamu dapatkan"
            description="Tiga output profesional siap pakai untuk melamar pekerjaan pertamamu."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {outputs.map((o, i) => (
            <Reveal key={o.label} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="card-hover overflow-hidden rounded-2xl border border-[#d8c8c0] bg-[#202048]/5">
                <div className="relative aspect-[4/3] bg-[#f8e8d8] p-6">
                  <div className="h-full rounded-lg border border-[#d8c8c0] bg-[#f8e8d8] p-4 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#d8c8c0]" />
                      <div className="h-2 w-2 rounded-full bg-[#d8c8c0]" />
                      <div className="h-2 w-2 rounded-full bg-[#d8c8c0]" />
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="h-2 w-3/4 rounded bg-[#d8c8c0]" />
                      <div className="h-2 w-1/2 rounded bg-[#d8c8c0]" />
                      <div className="mt-3 h-2 w-full rounded bg-[#202048]/10" />
                      <div className="h-2 w-5/6 rounded bg-[#f8e8d8]" />
                      <div className="h-2 w-4/6 rounded bg-[#f8e8d8]" />
                    </div>
                  </div>
                  <span className="absolute left-5 top-5 rounded-full bg-[#f8e8d8] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#6f6870] shadow-sm">
                    {o.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-bold text-[#202048]">
                    {o.label}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#6f6870]">{o.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
