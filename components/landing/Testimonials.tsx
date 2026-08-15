import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const testimonials = [
  {
    title: "CV untuk internship",
    quote:
      "Mahasiswa semester akhir yang ingin menerjemahkan pengalaman organisasi menjadi poin yang relevan untuk lamaran pertama.",
    name: "Use Case 01",
    role: "Mahasiswa Semester Akhir",
    accent: "#c8a060",
  },
  {
    title: "CV lebih fokus",
    quote:
      "Fresh graduate yang perlu merapikan deskripsi pengalaman agar tidak terlalu umum dan lebih mudah dipindai HR.",
    name: "Use Case 02",
    role: "Fresh Graduate",
    accent: "#202048",
  },
  {
    title: "Headline LinkedIn",
    quote:
      "Profesional muda yang ingin memperjelas headline dan About agar profil LinkedIn menjelaskan peran dan keahlian dengan lebih rapi.",
    name: "Use Case 03",
    role: "Technical Writer",
    accent: "#c8a060",
  },
  {
    title: "Checklist sebelum kirim",
    quote:
      "Pencari kerja yang butuh daftar cek sederhana untuk memastikan struktur CV sudah cukup rapi sebelum dikirim.",
    name: "Use Case 04",
    role: "Product Manager",
    accent: "#202048",
  },
  {
    title: "Portofolio lebih mudah dibagikan",
    quote:
      "Pelamar yang ingin mengumpulkan proyek, tautan, dan studi kasus dalam satu halaman yang mudah dibagikan ke recruiter.",
    name: "Use Case 05",
    role: "Career Switcher",
    accent: "#c8a060",
  },
  {
    title: "Butuh contoh rewrite",
    quote:
      "Pengguna yang mencari contoh kalimat sebelum dan sesudah agar lebih mudah menulis ulang pengalaman kerja dengan bahasa yang lebih kuat.",
    name: "Use Case 06",
    role: "Software Developer",
    accent: "#202048",
  },
];

const roles = [
  { label: "UI", name: "UI Designer", role: "Portofolio visual" },
  { label: "DEV", name: "Web Developer", role: "CV teknis" },
  { label: "PM", name: "Product Manager", role: "Headline LinkedIn" },
  { label: "DATA", name: "Data Analyst", role: "Ringkasan pengalaman" },
  { label: "MKT", name: "Marketing", role: "Contoh keyword" },
  { label: "ENG", name: "Engineer", role: "Checklist ATS" },
  { label: "HR", name: "HR Generalist", role: "Portofolio proyek" },
  { label: "OPS", name: "Operations", role: "Dokumen lamaran" },
];

function AvatarIcon({ accent }: { accent: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

function TestimonialCard({
  t,
}: {
  t: (typeof testimonials)[number];
}) {
  return (
    <article className="card-hover flex h-full w-[320px] shrink-0 flex-col rounded-2xl border border-[#d8c8c0] bg-white p-6 shadow-sm sm:w-[360px]">
      <h3 className="font-display text-base font-bold text-[#202048]">
        {t.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[#6f6870]">{t.quote}</p>
      <div className="mt-5 flex items-center gap-3 border-t border-[#f8e8d8] pt-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8e8d8]">
          <AvatarIcon accent={t.accent} />
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
    <section id="testimoni" className="overflow-hidden bg-[#f8e8d8]/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Use Case"
            title="Situasi yang sering dibawa pengguna"
            description="Contoh kebutuhan yang biasa dirapikan di Karierku, mulai dari CV awal hingga portofolio."
          />
        </Reveal>
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f8e8d8]/60 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f8e8d8]/60 to-transparent" />
        <div className="testimonial-track flex w-max gap-5 px-4">
          {items.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>

      <Reveal delay={2} className="mt-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-[#6f6870]">
              Digunakan oleh mahasiswa dan talenta muda dari berbagai bidang
            </p>
          </div>
          <div className="mt-8 grid grid-cols-4 gap-4 sm:gap-5 md:grid-cols-8 md:gap-4">
            {roles.map((u, i) => (
              <Reveal key={u.label} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="group text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d8c8c0] bg-white text-sm font-bold text-[#202048] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                    {u.label}
                  </div>
                  <p className="mt-2 text-[11px] font-semibold text-[#202048]">
                    {u.name}
                  </p>
                  <p className="text-[10px] text-[#6f6870]">{u.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
