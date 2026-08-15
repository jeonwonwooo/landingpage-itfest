import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Tentang Kami"
            title="Karierku hadir untuk mempermudah persiapan karier mahasiswa Indonesia"
            description="Kami percaya setiap pencari kerja berhak mendapat akses yang sama terhadap工具 penyusunan dokumen profesional tanpa harus membayar konsultan mahal."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <Reveal delay={1}>
            <div className="rounded-2xl border border-[#d8c8c0] bg-[#202048]/5 p-7">
              <h3 className="font-display text-lg font-bold text-[#202048]">
                Masalah yang kami lihat
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6f6870]">
                Banyak mahasiswa dan fresh graduate kesulitan menyusun CV, LinkedIn, dan portofolio karena tidak tahu standar industri. Mereka sering mengirim dokumen yang belum terstruktur, sehingga sulit bersaing di pasar kerja yang kompetitif.
              </p>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="rounded-2xl border border-[#d8c8c0] bg-[#202048]/5 p-7">
              <h3 className="font-display text-lg font-bold text-[#202048]">
                Solusi yang kami tawarkan
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6f6870]">
                Karierku menyediakan alat bantu berbasis aturan untuk menyusun CV ATS-friendly, merapikan profil LinkedIn, dan membuat portofolio dalam satu platform. Semua dirancang agar dokumenmu lebih rapi dan mudah dipindai oleh sistem rekrutmen.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={3} className="mt-12">
          <div className="rounded-2xl border border-[#c8a060]/30 bg-[#c8a060]/12 p-7">
            <h3 className="font-display text-lg font-bold text-[#202048]">
              Inisiatif Kolaborasi UMKM
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#6f6870]">
              Selain membantu pencari kerja, Karierku juga menjembatani kolaborasi antara talenta muda dengan UMKM lokal. Melalui portofolio dan showcase proyek, mahasiswa bisa menunjukkan kemampuan nyata sementara UMKM mendapat akses ke talenta digital yang relevan.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold text-[#202048]">
              <span className="rounded-full border border-[#c8a060]/40 bg-[#f8e8d8] px-3 py-1 transition-colors hover:bg-[#c8a060]/20">
                Talenta menunjukkan karya
              </span>
              <span className="rounded-full border border-[#c8a060]/40 bg-[#f8e8d8] px-3 py-1 transition-colors hover:bg-[#c8a060]/20">
                UMKM temukan kandidat
              </span>
              <span className="rounded-full border border-[#c8a060]/40 bg-[#f8e8d8] px-3 py-1 transition-colors hover:bg-[#c8a060]/20">
                Kolaborasi berbasis proyek
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
