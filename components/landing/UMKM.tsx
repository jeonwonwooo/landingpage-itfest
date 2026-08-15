import Reveal from "@/components/ui/Reveal";

export default function UMKM() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <Reveal>
          <div className="rounded-2xl border border-[#d8c8c0]/60 bg-[#202048]/5 px-8 py-10 text-center md:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Kolaborasi
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold text-[#202048] md:text-3xl">
              Lebih dari pencari kerja
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#6f6870]">
              Karierku juga membuka peluang kolaborasi antara{" "}
              <strong className="font-semibold text-[#202048]">
                talenta muda
              </strong>{" "}
              dan{" "}
              <strong className="font-semibold text-[#202048]">UMKM</strong>{" "}
              melalui portofolio dan showcase proyek.
            </p>
            <p className="mx-auto mt-3 max-w-lg text-sm font-medium text-[var(--primary-dark)]">
              Talenta menunjukkan kemampuan, UMKM lebih mudah menemukan kandidat yang relevan.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
