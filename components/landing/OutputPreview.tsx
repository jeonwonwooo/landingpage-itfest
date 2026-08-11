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
    tag: "Score 1–100",
  },
  {
    label: "Portofolio Website",
    desc: "Satu tautan unik untuk menunjukkan karya terbaikmu.",
    tag: "Share Link",
  },
];

export default function OutputPreview() {
  return (
    <section className="border-y border-slate-200/80 bg-slate-50/60 py-20 md:py-28">
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
              <div className="card-hover overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="relative aspect-[4/3] bg-slate-100 p-6">
                  <div className="h-full rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-slate-300" />
                      <div className="h-2 w-2 rounded-full bg-slate-300" />
                      <div className="h-2 w-2 rounded-full bg-slate-300" />
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="h-2 w-3/4 rounded bg-slate-200" />
                      <div className="h-2 w-1/2 rounded bg-slate-200" />
                      <div className="mt-3 h-2 w-full rounded bg-teal-100" />
                      <div className="h-2 w-5/6 rounded bg-slate-100" />
                      <div className="h-2 w-4/6 rounded bg-slate-100" />
                    </div>
                  </div>
                  <span className="absolute left-5 top-5 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500 shadow-sm">
                    {o.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-bold text-slate-900">
                    {o.label}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600">{o.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
