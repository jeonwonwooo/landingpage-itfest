import Link from "next/link";
import LogoMarquee from "@/components/ui/LogoMarquee";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[850px] -translate-x-1/2 rounded-full bg-[#c8a060]/18 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-[#202048] md:text-6xl lg:text-7xl">
            Tingkatkan Karirmu dengan CV dan LinkedIn yang Dilirik HRD
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#6f6870] md:text-xl">
            Susun CV ramah ATS, rapikan profil LinkedIn, dan tampilkan portofolio dengan alur yang lebih jelas.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/login"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#202048] px-8 py-4 text-base font-bold text-[#f8e8d8] shadow-lg transition-all duration-200 hover:bg-[#c8a060] hover:shadow-xl active:scale-95 sm:w-auto"
            >
              Coba Gratis Sekarang
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/fitur"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#d8c8c0] bg-white px-8 py-4 text-base font-bold text-[#202048] shadow-sm transition-all duration-200 hover:border-[#c8a060] hover:shadow-md active:scale-95 sm:w-auto"
            >
              Lihat Fitur
            </Link>
          </div>
        </Reveal>

        <Reveal delay={1} className="mt-14">
          <LogoMarquee />
        </Reveal>
      </div>
    </section>
  );
}
