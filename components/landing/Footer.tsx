"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const featureLinks = [
  { label: "About", href: "/about" },
  { label: "Fitur", href: "/fitur" },
  { label: "Harga", href: "/harga" },
  { label: "Blog", href: "/blog" },
];

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<"privasi" | "syarat" | null>(null);

  const openModal = (type: "privasi" | "syarat") => {
    setModalContent(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setModalContent(null), 200);
  };

  return (
    <>
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
                  Platform CV, LinkedIn &amp; portofolio untuk mahasiswa &amp; fresh graduate.
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
                  Menu Utama
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
                {/* Bagian ini diubah jadi button biar bisa mentrigger Pop-up */}
                <ul className="mt-4 space-y-2.5">
                  <li>
                    <button
                      onClick={() => openModal("privasi")}
                      className="text-sm text-[#6f6870] transition-colors hover:text-[#202048]"
                    >
                      Privasi
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => openModal("syarat")}
                      className="text-sm text-[#6f6870] transition-colors hover:text-[#202048]"
                    >
                      Syarat & Ketentuan
                    </button>
                  </li>
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

      {/* --- DESAIN POP-UP (MODAL) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#202048]/40 backdrop-blur-sm">
          {/* Background overlay buat klik tutup */}
          <div className="absolute inset-0" onClick={closeModal}></div>
          
          {/* Kotak Pop-up */}
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-[#6f6870] hover:text-[#202048] w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f8e8d8] transition-colors"
            >
              ✕
            </button>
            
            <h2 className="text-2xl font-bold text-[#202048] mb-4">
              {modalContent === "privasi" ? "Kebijakan Privasi" : "Syarat & Ketentuan"}
            </h2>
            
            <div className="max-h-[60vh] overflow-y-auto pr-2 text-sm text-[#6f6870] space-y-4">
              {modalContent === "privasi" ? (
                <>
                  <p><strong>1. Pengumpulan Data:</strong> Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami saat membuat akun, mengisi profil, atau menggunakan layanan pembuatan CV dan portfolio kami.</p>
                  <p><strong>2. Penggunaan Data:</strong> Data Anda sepenuhnya digunakan untuk mengoptimalkan pengalaman Anda di platform Karierku. Kami tidak menjual data pribadi Anda kepada pihak ketiga.</p>
                  <p><strong>3. Keamanan:</strong> Kami menerapkan standar keamanan yang ketat untuk melindungi informasi pribadi Anda dari akses yang tidak sah.</p>
                </>
              ) : (
                <>
                  <p><strong>1. Ketentuan Penggunaan:</strong> Dengan mendaftar dan menggunakan layanan Karierku, Anda setuju untuk mematuhi semua aturan yang berlaku di platform ini.</p>
                  <p><strong>2. Hak Cipta:</strong> Semua template CV dan desain portfolio yang disediakan adalah hak milik Karierku. Anda bebas menggunakannya untuk keperluan melamar kerja, namun dilarang memperjualbelikannya kembali.</p>
                  <p><strong>3. Perubahan Layanan:</strong> Karierku berhak untuk mengubah, menangguhkan, atau menghentikan fitur layanan kapan saja dengan atau tanpa pemberitahuan sebelumnya.</p>
                </>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-[#d8c8c0] flex justify-end">
              <button 
                onClick={closeModal}
                className="bg-[#202048] text-[#f8e8d8] px-6 py-2.5 rounded-xl text-sm font-bold shadow-md hover:bg-[#c8a060] transition-colors active:scale-95"
              >
                Mengerti
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}