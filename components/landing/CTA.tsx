import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const shortcuts = [
  { key: "Skor ATS", href: "/cv" },
  { key: "Rewrite", href: "/cv" },
  { key: "Template", href: "/cv" },
  { key: "LinkedIn", href: "/linkedin" },
];

export default function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-[#d8c8c0] bg-white">
            <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:p-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  Masih bingung?
                </p>
                <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[#202048] md:text-4xl">
                  Perbaiki CV-mu
                  <br />
                  dengan beberapa klik
                </h2>
                <div className="mt-6 flex flex-wrap gap-2">
                  {shortcuts.map((s) => (
                    <Link
                      key={s.key}
                      href={s.href}
                      className="rounded-full border border-[#d8c8c0] bg-[#fbf2e8] px-3.5 py-1.5 text-xs font-medium text-[#5a545b] transition-colors hover:border-[#c4bab0] hover:bg-white"
                    >
                      {s.key}
                    </Link>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href="/cv">Buat CV Sekarang</Button>
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
                  src="/illustrations/keyboard.svg"
                  alt="Keyboard shortcut illustration"
                  width={480}
                  height={200}
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
