import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section className="bg-[#f8e8d8]/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-[#d8c8c0] bg-white shadow-sm">
            <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:p-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a060]">
                  Masih bingung?
                </p>
                <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[#202048] md:text-4xl">
                  Perbaiki CV-mu
                  <br />
                  dengan beberapa klik
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#6f6870]">
                  Mulai dari data diri, optimasi headline LinkedIn, hingga portofolio yang siap dibagikan. Semua dalam satu platform.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/login"
                    className="inline-flex items-center gap-2 rounded-full bg-[#202048] px-6 py-3 text-sm font-bold text-[#f8e8d8] shadow-md transition-all hover:bg-[#c8a060] hover:shadow-lg active:scale-95"
                  >
                    Buat CV Sekarang
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                  <a
                    href="mailto:hello@karierku.id"
                    className="text-sm font-medium text-[#6f6870] hover:text-[#202048]"
                  >
                    hello@karierku.id
                  </a>
                </div>
              </div>

              <div className="flex justify-center">
                <Image
                  src="/illustrations/cv-preview.svg"
                  alt="CV Builder Preview"
                  width={480}
                  height={240}
                  className="w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
