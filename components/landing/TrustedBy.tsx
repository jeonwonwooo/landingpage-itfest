import LogoMarquee from "@/components/ui/LogoMarquee";
import Reveal from "@/components/ui/Reveal";

export default function TrustedBy() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Dipakai mahasiswa
            <br />
            <span className="text-[var(--primary)]">yang serius cari kerja</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-slate-600">
            Pengguna Karierku telah melamar ke berbagai perusahaan di Indonesia.
          </p>
        </Reveal>

        <Reveal delay={1} className="mt-12">
          <LogoMarquee label="Profesional kami bekerja di" />
        </Reveal>
      </div>
    </section>
  );
}
