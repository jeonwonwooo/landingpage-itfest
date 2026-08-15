"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Fitur", href: "/fitur" },
  { label: "Harga", href: "/harga" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="h-[3px] w-full bg-gradient-to-r from-[#c8a060] via-[#f8e8d8] to-[#c8a060]" />

      <div
        className={`border-b bg-[#f8e8d8]/90 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "border-[#d8c8c0] shadow-[0_4px_24px_-8px_rgba(32,32,72,0.15)]"
            : "border-[#d8c8c0]/60"
        }`}
      >
        <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex items-center"
            onClick={() => setOpen(false)}
            aria-label="Karierku - Beranda"
          >
            <Image
              src="/logo.png"
              alt=""
              width={64}
              height={64}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 text-[13px] font-semibold transition-colors duration-150 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#c8a060] after:transition-all after:duration-300 ${
                    isActive
                      ? "text-[#202048] after:w-full"
                      : "text-[#6f6870] hover:text-[#202048] after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/cv"
              className="rounded-full bg-[#202048] px-5 py-2 text-xs font-bold text-[#f8e8d8] shadow-md transition-all duration-200 hover:bg-[#c8a060] hover:shadow-lg active:scale-95"
            >
              Buat CV ATS
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#202048] transition-colors hover:bg-[#202048]/8 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </div>

      <div
        className={`overflow-hidden border-b border-[#d8c8c0] bg-[#f8e8d8] transition-all duration-300 ease-out md:hidden ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 pb-6 pt-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm font-semibold transition-all duration-150 ${
                  isActive
                    ? "bg-[#202048] text-[#f8e8d8]"
                    : "text-[#6f6870] hover:bg-[#202048]/8 hover:text-[#202048]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-3 flex flex-col gap-3 border-t border-[#d8c8c0] pt-4">
            <Link
              href="/cv"
              onClick={() => setOpen(false)}
              className="rounded-full bg-[#202048] py-3 text-center text-sm font-bold text-[#f8e8d8] transition-all hover:bg-[#c8a060]"
            >
              Buat CV ATS Sekarang
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
