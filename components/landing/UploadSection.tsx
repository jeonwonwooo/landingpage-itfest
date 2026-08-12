import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function UploadSection() {
  return (
    <section className="border-y border-[#d8c8c0]/80 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Cek Gratis"
            title="Cek skor CV dan dapatkan feedback langsung"
            description="Kami identifikasi kekuatan CV-mu, prioritaskan perbaikan kritis, dan bantu optimasi agar lolos ATS serta ekspektasi recruiter."
          />
        </Reveal>

        <Reveal delay={1} className="mx-auto mt-12 max-w-xl">
          <div className="rounded-2xl border border-[#d8c8c0] bg-[#fbf2e8]/50 p-8 md:p-10">
            <h3 className="text-center text-sm font-semibold text-[#202048]">
              Upload CV untuk lihat skor ATS &amp; feedback
            </h3>

            <div className="mt-6 flex flex-col items-center rounded-xl border-2 border-dashed border-[#d8c8c0] bg-white px-6 py-10 text-center transition-colors hover:border-[var(--primary)]/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef0f8]">
                <svg
                  className="text-[var(--primary)]"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              <p className="mt-4 text-sm font-medium text-[#38365a]">
                Browse file atau drag &amp; drop di sini
              </p>
              <p className="mt-1 text-xs text-[#a39da4]">
                PDF, DOC · Maks. 2 MB
              </p>
            </div>

            <p className="mt-4 text-center text-xs text-[#a39da4]">
              100% Privat. Selalu.
            </p>

            <div className="mt-6 flex justify-center">
              <Button href="/cv">Upload &amp; Cek Skor</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
