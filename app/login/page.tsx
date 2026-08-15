"use client";

import Navbar from "@/components/landing/Navbar";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateLogin = () => {
    const newErrors: Record<string, string> = {};
    if (!email) newErrors.email = "Email wajib diisi";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Format email tidak valid";
    if (!password) newErrors.password = "Password wajib diisi";
    else if (password.length < 6) newErrors.password = "Password minimal 6 karakter";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateRegister = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName) newErrors.fullName = "Nama lengkap wajib diisi";
    if (!email) newErrors.email = "Email wajib diisi";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Format email tidak valid";
    if (!password) newErrors.password = "Password wajib diisi";
    else if (password.length < 6) newErrors.password = "Password minimal 6 karakter";
    if (password !== confirmPassword) newErrors.confirmPassword = "Konfirmasi password tidak cocok";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = mode === "login" ? validateLogin() : validateRegister();
    if (isValid) {
      alert(`${mode === "login" ? "Login" : "Registrasi"} berhasil! Mengalihkan ke dashboard...`);
    }
  };

  const switchMode = (newMode: "login" | "register") => {
    setMode(newMode);
    setErrors({});
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFullName("");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-68px)] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-[#d8c8c0] bg-white p-8 shadow-xl">
            <div className="text-center mb-8">
              <Link href="/" className="inline-flex items-center justify-center mb-6">
                <Image
                  src="/logo.png"
                  alt="Karierku"
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
              </Link>
              <h1 className="font-display text-2xl font-bold text-[#202048]">
                {mode === "login" ? "Selamat Datang Kembali" : "Buat Akun Baru"}
              </h1>
              <p className="mt-2 text-sm text-[#6f6870]">
                {mode === "login"
                  ? "Masuk untuk akses CV Builder, LinkedIn Optimizer, & Portfolio Builder"
                  : "Daftar gratis untuk memulai perjalanan kariermu"}
              </p>
            </div>

            <div className="mb-6 border-b border-[#f8e8d8]">
              <nav className="flex -mb-px" aria-label="Tab autentikasi">
                <button
                  type="button"
                  onClick={() => switchMode("login")}
                  className={`flex-1 py-3 text-sm font-semibold text-center transition-colors rounded-t-xl ${
                    mode === "login"
                      ? "bg-[#f8e8d8] text-[#202048] border-b-2 border-[#c8a060] -mb-px"
                      : "text-[#6f6870] hover:text-[#202048]"
                  }`}
                >
                  Masuk
                </button>
                <button
                  type="button"
                  onClick={() => switchMode("register")}
                  className={`flex-1 py-3 text-sm font-semibold text-center transition-colors rounded-t-xl ${
                    mode === "register"
                      ? "bg-[#f8e8d8] text-[#202048] border-b-2 border-[#c8a060] -mb-px"
                      : "text-[#6f6870] hover:text-[#202048]"
                  }`}
                >
                  Daftar
                </button>
              </nav>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {mode === "register" && (
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-[#6f6870] mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nama lengkap"
                    className={`w-full rounded-xl border px-4 py-3 text-sm focus:border-[#202048] focus:outline-none focus:ring-2 focus:ring-[#c8a060]/20 ${
                      errors.fullName ? "border-[#e53e3e]" : "border-[#d8c8c0]"
                    }`}
                    required
                    autoComplete="name"
                    aria-invalid={errors.fullName ? "true" : "false"}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-[#e53e3e]" role="alert">
                      {errors.fullName}
                    </p>
                  )}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-[#6f6870] mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@contoh.com"
                  className={`w-full rounded-xl border px-4 py-3 text-sm focus:border-[#202048] focus:outline-none focus:ring-2 focus:ring-[#c8a060]/20 ${
                    errors.email ? "border-[#e53e3e]" : "border-[#d8c8c0]"
                  }`}
                  required
                  autoComplete={mode === "login" ? "email" : "email"}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-[#e53e3e]" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-xs font-semibold text-[#6f6870] mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password"
                  className={`w-full rounded-xl border px-4 py-3 text-sm focus:border-[#202048] focus:outline-none focus:ring-2 focus:ring-[#c8a060]/20 ${
                    errors.password ? "border-[#e53e3e]" : "border-[#d8c8c0]"
                  }`}
                  required
                  autoComplete={mode === "login" ? "current-password" : "new-password"}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && (
                  <p className="mt-1 text-xs text-[#e53e3e]" role="alert">
                    {errors.password}
                  </p>
                )}
              </div>

              {mode === "register" && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-xs font-semibold text-[#6f6870] mb-1">
                    Konfirmasi Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Ulangi password"
                    className={`w-full rounded-xl border px-4 py-3 text-sm focus:border-[#202048] focus:outline-none focus:ring-2 focus:ring-[#c8a060]/20 ${
                      errors.confirmPassword ? "border-[#e53e3e]" : "border-[#d8c8c0]"
                    }`}
                    required
                    autoComplete="new-password"
                    aria-invalid={errors.confirmPassword ? "true" : "false"}
                  />
                  {errors.confirmPassword && (
                    <p className="mt-1 text-xs text-[#e53e3e]" role="alert">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-[#202048] py-3 text-sm font-bold text-[#f8e8d8] shadow-md transition-all hover:bg-[#c8a060] hover:shadow-lg active:scale-[0.98]"
              >
                {mode === "login" ? "Masuk" : "Buat Akun"}
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-[#6f6870]">
              {mode === "login" ? (
                <>
                  Belum punya akun?{" "}
                  <button
                    type="button"
                    onClick={() => switchMode("register")}
                    className="font-semibold text-[#202048] hover:text-[#c8a060]"
                  >
                    Daftar gratis
                  </button>
                </>
              ) : (
                <>
                  Sudah punya akun?{" "}
                  <button
                    type="button"
                    onClick={() => switchMode("login")}
                    className="font-semibold text-[#202048] hover:text-[#c8a060]"
                  >
                    Masuk
                  </button>
                </>
              )}
            </p>

            <div className="mt-6 pt-6 border-t border-[#f8e8d8]">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-[#d8c8c0] bg-white px-4 py-2.5 text-sm font-semibold text-[#202048] shadow-sm transition-all hover:border-[#c8a060] hover:shadow-md"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.539,3.921,1.411l2.814-2.813C17.543,1.467,14.968,0,12.062,0C7.152,0,3.138,4.014,3.138,8.925c0,2.294,0.909,4.356,2.318,5.814" />
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.539,3.921,1.411l2.814-2.813C17.543,1.467,14.968,0,12.062,0C7.152,0,3.138,4.014,3.138,8.925c0,2.294,0.909,4.356,2.318,5.814" />
                </svg>
                Lanjutkan dengan Google
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-[#f8e8d8]">
              <p className="text-center text-xs text-[#6f6870]">
                Dengan melanjutkan, Anda menyetujui{" "}
                <a href="#" className="text-[#c8a060] hover:text-[#202048]">
                  Syarat & Ketentuan
                </a>{" "}
                dan{" "}
                <a href="#" className="text-[#c8a060] hover:text-[#202048]">
                  Kebijakan Privasi
                </a>
                .
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-[#d8c8c0]">
            © 2026 Karierku. Semua hak dilindungi.
          </p>
        </div>
      </main>
    </>
  );
}