import Image from "next/image";
import Link from "next/link";

const featureLinks = [
  { label: "About", href: "/about" },
  { label: "Fitur", href: "/fitur" },
  { label: "Harga", href: "/harga" },
  { label: "Blog", href: "/blog" },
];

const infoLinks = [
  { label: "Privasi", href: "#" },
  { label: "Syarat & Ketentuan", href: "#" },
];

export default function Footer() {
  return (
    <footer>
      <div className="border-t border-[#d8c8c0] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center lg:px-8">
          <Image
            src="/illustrations/footer-cta.svg"
            alt=""
            width={400}
            height={200}
            className="mx-auto"
            aria-hidden
          />
          <h2 className="font-display mx-auto mt-6 max-w-lg text-2xl font-bold tracking-tight text-[#202048] md:text-3xl">
            Siap kirim lamaran?
            <br />
            Pastikan CV-mu sudah oke.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-[#6f6870]">
            CV, LinkedIn, dan portofolio yang bikin HRD notice.
          </p>
        </div>
      </div>

      <div className="border-t border-[#d8c8c0] bg-[#f8e8d8]/30 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <Image
                  src="/logo.png"
                  alt=""
                  width={64}
                  height={64}
                  className="transition-transform duration-300 hover:scale-105"
                />
                <span className="font-display text-xl font-bold text-[#202048]">
                  Karierku
                </span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#6f6870]">
                Platform CV, LinkedIn &amp; portofolio
                untuk mahasiswa &amp; fresh graduate.
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#6f6870]">
                Ikuti kami
              </p>
              <div className="mt-2 flex gap-3">
                {["LinkedIn", "Instagram", "Twitter"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-xs font-medium text-[#6f6870] hover:text-[#202048]"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#202048]">
                Fitur Kami
              </h3>
              <ul className="mt-4 space-y-2.5">
                {featureLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6f6870] transition-colors hover:text-[#202048]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#202048]">
                Informasi
              </h3>
              <ul className="mt-4 space-y-2.5">
                {infoLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#6f6870] transition-colors hover:text-[#202048]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <p className="text-sm font-semibold text-[#202048]">Kontak</p>
                <a href="mailto:hello@karierku.id" className="mt-1 block text-sm text-[#6f6870] hover:text-[#202048]">
                  hello@karierku.id
                </a>
                <a href="tel:+6281234567890" className="block text-sm text-[#6f6870] hover:text-[#202048]">
                  +62 812-3456-7890
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-[#d8c8c0] pt-8 text-center text-sm text-[#6f6870]">
            &copy; 2026 Karierku. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
