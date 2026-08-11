import Image from "next/image";
import Link from "next/link";

const featureLinks = [
  { label: "Asisten AI", href: "#demo" },
  { label: "Skor CV", href: "/cv" },
  { label: "LinkedIn", href: "/linkedin" },
  { label: "Portofolio", href: "/portfolio" },
];

const infoLinks = [
  { label: "Privasi", href: "#" },
  { label: "Syarat & Ketentuan", href: "#" },
];

export default function Footer() {
  return (
    <footer>
      <div className="border-t border-slate-200 bg-slate-50/80 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center lg:px-8">
          <Image
            src="/illustrations/footer-cloud.svg"
            alt=""
            width={320}
            height={120}
            className="mx-auto"
            aria-hidden
          />
          <h2 className="font-display mx-auto mt-6 max-w-lg text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Siap kirim lamaran?
            <br />
            Pastikan CV-mu sudah oke.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate-500">
            CV, LinkedIn, dan portofolio yang bikin HRD notice.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)] font-display text-sm font-bold text-white">
                  K
                </span>
                <span className="font-display text-lg font-bold text-slate-900">
                  Karierku
                </span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
                Platform CV, LinkedIn &amp; portofolio
                untuk mahasiswa &amp; fresh graduate.
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Ikuti kami
              </p>
              <div className="mt-2 flex gap-3">
                {["LinkedIn", "Instagram", "Twitter"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-xs font-medium text-slate-500 hover:text-slate-900"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Fitur Kami
              </h3>
              <ul className="mt-4 space-y-2.5">
                {featureLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Informasi
              </h3>
              <ul className="mt-4 space-y-2.5">
                {infoLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <p className="text-sm font-semibold text-slate-900">Kontak</p>
                <p className="mt-1 text-sm text-slate-500">
                  hello@karierku.id
                </p>
                <p className="text-sm text-slate-500">+62 812-3456-7890</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-8 text-center text-sm text-slate-400">
            © 2026 Karierku. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
