import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const users = [
  { label: "UI", name: "UI Designer", role: "Portofolio visual", offset: "mt-0" },
  { label: "DEV", name: "Web Developer", role: "CV teknis", offset: "mt-8" },
  { label: "PM", name: "Product Manager", role: "Headline LinkedIn", offset: "mt-2" },
  { label: "DATA", name: "Data Analyst", role: "Ringkasan pengalaman", offset: "mt-10" },
  { label: "MKT", name: "Marketing", role: "Contoh keyword", offset: "mt-4" },
  { label: "ENG", name: "Engineer", role: "Checklist ATS", offset: "mt-12" },
  { label: "HR", name: "HR Generalist", role: "Portofolio proyek", offset: "mt-0" },
  { label: "OPS", name: "Operations", role: "Dokumen lamaran", offset: "mt-6" },
];

export default function UserShowcase() {
  return (
    <section className="overflow-hidden border-y border-[#d8c8c0]/80 bg-[#f8e8d8]/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm text-[#6f6870]">
            Digunakan oleh mahasiswa dan talenta muda dari berbagai bidang
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-4 gap-3 sm:gap-4 md:grid-cols-8 md:gap-3">
          {users.map((u, i) => (
            <Reveal key={u.label} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className={`group ${u.offset}`}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-[#d8c8c0] bg-[#202048]/5 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex h-full flex-col justify-between bg-gradient-to-b from-[#f8e8d8] via-[#f4dcc2] to-[#202048]/10 p-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#202048] text-[11px] font-bold text-[#f8e8d8] shadow-sm">
                      {u.label}
                    </div>
                    <div className="rounded-xl bg-[#202048]/80 p-2">
                      <p className="text-[10px] font-semibold text-[#f8e8d8]">
                        {u.name}
                      </p>
                      <p className="text-[9px] text-[#f8e8d8]/75">{u.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2} className="mt-10 flex justify-center">
          <Button href="/cv">Buat CV Sekarang</Button>
        </Reveal>
      </div>
    </section>
  );
}
