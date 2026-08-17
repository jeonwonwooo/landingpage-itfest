"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const checkLogin = localStorage.getItem("isLoggedIn");
    if (!checkLogin) {
      router.push("/login");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/");
  };

  if (!isAuthorized) return null;

  return (
    <div className="min-h-screen bg-[#FAF6F0] selection:bg-[#c8a060] selection:text-white">
      <header className="sticky top-0 z-50 border-b border-[#d8c8c0] bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/dashboard" className="flex items-center gap-2 transition-transform hover:scale-105">
            <Image src="/logo.png" alt="Karierku" width={40} height={40} />
            <span className="font-display text-xl font-bold text-[#202048]">Karierku</span>
          </Link>
          <button
            onClick={handleLogout}
            className="rounded-full border border-[#d8c8c0] bg-white px-5 py-2 text-sm font-semibold text-[#202048] shadow-sm transition-all hover:border-[#e53e3e] hover:text-[#e53e3e] active:scale-95"
          >
            Keluar
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-[#202048] md:text-5xl">
            Selamat Datang di Workspace Kamu
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6f6870]">
            Pilih alat yang ingin kamu gunakan hari ini untuk mulai mengoptimalkan peluang karirmu.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1: CV Builder */}
          <Link
            href="/cv"
            className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-[#d8c8c0] bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-[#c8a060] hover:shadow-xl"
          >
            <div className="absolute top-4 right-4 rounded-full bg-[#202048] px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
              Aktif
            </div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#202048]/5 text-3xl transition-transform group-hover:scale-110 group-hover:bg-[#202048] group-hover:text-white">
              📄
            </div>
            <h2 className="text-xl font-bold text-[#202048]">Buat CV ATS</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#6f6870]">
              Buat CV profesional yang ramah sistem ATS agar peluang lolos screening lebih besar.
            </p>
            <div className="mt-6 flex items-center text-sm font-bold text-[#c8a060] opacity-0 transition-opacity group-hover:opacity-100">
              Mulai Buat <span className="ml-2 text-lg">→</span>
            </div>
          </Link>

          {/* Card 2: LinkedIn Optimizer */}
          <Link
            href="/linkedin"
            className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-[#d8c8c0] bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-[#c8a060] hover:shadow-xl"
          >
            <div className="absolute top-4 right-4 rounded-full bg-[#202048] px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
              Aktif
            </div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#202048]/5 text-3xl transition-transform group-hover:scale-110 group-hover:bg-[#202048] group-hover:text-white">
              💼
            </div>
            <h2 className="text-xl font-bold text-[#202048]">LinkedIn Optimizer</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#6f6870]">
              Perbaiki dan optimalkan profil LinkedIn-mu agar lebih mudah dilirik oleh para rekruter.
            </p>
            <div className="mt-6 flex items-center text-sm font-bold text-[#c8a060] opacity-0 transition-opacity group-hover:opacity-100">
              Optimalkan <span className="ml-2 text-lg">→</span>
            </div>
          </Link>

          {/* Card 3: Portfolio Builder */}
          <Link
            href="/portfolio"
            className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-[#d8c8c0] bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-[#c8a060] hover:shadow-xl"
          >
            <div className="absolute top-4 right-4 rounded-full bg-[#202048] px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
              Aktif
            </div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#202048]/5 text-3xl transition-transform group-hover:scale-110 group-hover:bg-[#202048] group-hover:text-white">
              🎨
            </div>
            <h2 className="text-xl font-bold text-[#202048]">Portfolio Builder</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#6f6870]">
              Bangun halaman portfolio profesional untuk memamerkan karya dan hasil kerjamu.
            </p>
            <div className="mt-6 flex items-center text-sm font-bold text-[#c8a060] opacity-0 transition-opacity group-hover:opacity-100">
              Buat Portfolio <span className="ml-2 text-lg">→</span>
            </div>
          </Link>

        </div>
      </main>
    </div>
  );
}