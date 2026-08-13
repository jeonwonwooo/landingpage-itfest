"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "CV Builder & AI", href: "/cv" },
  { label: "LinkedIn Optimizer", href: "/linkedin" },
  { label: "Portfolio Builder", href: "/portfolio" },
  { label: "Inisiatif UMKM", href: "/#umkm" },
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
      {/* Signature gold masthead rule */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#c8a060] via-[#e2c491] to-[#c8a060]" />

      <div
        className={`border-b bg-[#fbf2e8]/90 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "border-[#d8c8c0] shadow-[0_4px_24px_-8px_rgba(32,32,72,0.15)]"
            : "border-[#d8c8c0]/60"
        }`}
      >
        <nav className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
          <Image
            src="/logo.png"
            alt="Karierku"
            width={40}
            height={40}
            className="rounded-full transition-transform duration-300 group-hover:scale-105"
          />
            
            
            
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-tight text-[#202048]">
                Karierku
              </span>
              <span className="mt-1 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#a17f4c]">
                <span className="h-[3px] w-[3px] rounded-full bg-[#c8a060]" />
                CV &amp; Karier
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === pathname ||
                (link.href.startsWith("/#") && pathname === "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-150 active:scale-95 ${
                    isActive
                      ? "bg-[#202048] text-[#f8e8d8] shadow-[0_2px_10px_-2px_rgba(32,32,72,0.4)]"
                      : "text-[#38365a] hover:bg-[#f0dfc8] hover:text-[#202048] active:bg-[#c8a060] active:text-[#202048]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="mailto:hello@karierku.id"
              className="hidden text-[13px] font-medium text-[#6f6870] transition-colors hover:text-[#202048] xl:inline"
            >
              hello@karierku.id
            </a>
            <span className="hidden h-5 w-px bg-[#d8c8c0] xl:inline" />
            <Button
              href="/cv"
              size="sm"
              className="rounded-full shadow-[0_2px_12px_-2px_rgba(200,160,96,0.5)]"
            >
              Buat CV ATS
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#202048] transition-colors hover:bg-[#f0dfc8] md:hidden"
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
              className="transition-transform duration-200"
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

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-b border-[#d8c8c0] bg-[#fbf2e8] transition-all duration-300 ease-out md:hidden ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 pb-6 pt-4">
          {navLinks.map((link, i) => {
            const isActive =
              link.href === pathname ||
              (link.href.startsWith("/#") && pathname === "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold transition-all duration-150 active:scale-[0.98] ${
                  isActive
                    ? "bg-[#202048] text-[#f8e8d8]"
                    : "text-[#38365a] hover:bg-[#f0dfc8] hover:text-[#202048] active:bg-[#c8a060] active:text-[#202048]"
                }`}
              >
                <span
                  className={`font-display text-[10px] ${
                    isActive ? "text-[#c8a060]" : "text-[#c8a060]"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link.label}
              </Link>
            );
          })}
          <div className="mt-3 flex flex-col gap-3 border-t border-[#d8c8c0] pt-4">
            <a
              href="mailto:hello@karierku.id"
              className="px-3 text-sm font-medium text-[#6f6870]"
            >
              hello@karierku.id
            </a>
            <Button href="/cv" className="w-full rounded-full">
              Buat CV ATS Sekarang
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
