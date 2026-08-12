"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "CV Builder & AI", href: "/cv" },
  { label: "LinkedIn Optimizer", href: "/linkedin" },
  { label: "Portfolio Builder", href: "/portfolio" },
  { label: "Inisiatif UMKM", href: "/#umkm" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d8c8c0]/80 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1a1a3a] font-display text-sm font-bold text-white shadow-sm">
            K
          </span>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-tight text-[#202048] leading-none">
              Karierku
            </span>
            <span className="text-[9px] font-semibold text-[#1a1a3a] tracking-wider uppercase mt-0.5">
              CV &amp; Karier
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold text-[#5a545b] transition-colors hover:text-[#1a1a3a]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/cv" size="sm">
            Buat CV ATS
          </Button>
        </div>

        <button
          type="button"
          aria-label="Buka menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#38365a] hover:bg-[#f8e8d8] md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="22"
            height="22"
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

      {open && (
        <div className="border-t border-[#d8c8c0] bg-white px-4 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-[#38365a] hover:bg-[#fbf2e8]"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#f8e8d8] flex flex-col gap-2">
              <Button href="/cv" className="w-full">
                Buat CV ATS Sekarang
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
