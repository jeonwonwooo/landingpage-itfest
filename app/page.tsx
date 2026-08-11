export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <div className="aurora" aria-hidden="true" />

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-10 sm:pt-16 lg:px-10 lg:pt-20">
        <div className="reveal-up flex items-center justify-between gap-4 rounded-full border border-white/45 bg-white/50 px-4 py-2 text-xs backdrop-blur-xl sm:px-5 sm:text-sm">
          <p className="tracking-[0.2em] text-slate-700 uppercase">ITFEST 2026</p>
          <a
            href="#register"
            className="rounded-full bg-slate-900 px-4 py-1.5 font-semibold text-white transition hover:bg-slate-700"
          >
            Daftar Tim
          </a>
        </div>

        <div className="mt-10 grid items-end gap-10 lg:mt-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="reveal-up-delay space-y-6">
            <p className="font-display text-sm tracking-[0.4em] text-amber-600 uppercase">
              Landing Page Challenge
            </p>
            <h1 className="font-display text-balance text-4xl leading-[1.02] font-bold text-slate-900 sm:text-6xl lg:text-7xl">
              Bangun Cerita Digital yang Sulit Dilupakan
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
              Kompetisi ini menilai kombinasi estetika, performa, copywriting, dan
              ketepatan brand. Gunakan halaman ini sebagai pondasi tim kamu untuk
              memulai eksekusi lebih cepat.
            </p>
            <div className="flex flex-col gap-3 pt-3 sm:flex-row">
              <a
                href="#brief"
                className="rounded-full bg-amber-500 px-6 py-3 text-center text-sm font-bold text-slate-900 transition hover:bg-amber-400"
              >
                Lihat Brief Penilaian
              </a>
              <a
                href="#milestone"
                className="rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-center text-sm font-semibold text-slate-800 transition hover:bg-white"
              >
                Timeline Lomba
              </a>
            </div>
          </div>

          <aside className="reveal-up-delay-2 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-2xl backdrop-blur-xl">
            <p className="text-xs tracking-[0.25em] text-slate-500 uppercase">Format Nilai</p>
            <div className="mt-5 space-y-4">
              <div className="score-card">
                <span>Visual Storytelling</span>
                <strong>35%</strong>
              </div>
              <div className="score-card">
                <span>Responsive & Accessibility</span>
                <strong>25%</strong>
              </div>
              <div className="score-card">
                <span>Performance (Core Web Vitals)</span>
                <strong>20%</strong>
              </div>
              <div className="score-card">
                <span>Copywriting & CTA</span>
                <strong>20%</strong>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="brief" className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="reveal-up rounded-2xl border border-slate-200/80 bg-white/85 p-6">
            <h2 className="font-display text-xl font-semibold text-slate-900">Intentional UI</h2>
            <p className="mt-2 text-slate-700">
              Setiap elemen wajib punya tujuan komunikasi. Kurangi ornamen yang tidak
              mendukung pesan utama.
            </p>
          </article>
          <article className="reveal-up-delay rounded-2xl border border-slate-200/80 bg-white/85 p-6">
            <h2 className="font-display text-xl font-semibold text-slate-900">Fast by Design</h2>
            <p className="mt-2 text-slate-700">
              Optimasi aset, komponen, dan layout agar interaksi terasa ringan di semua
              ukuran layar.
            </p>
          </article>
          <article className="reveal-up-delay-2 rounded-2xl border border-slate-200/80 bg-white/85 p-6">
            <h2 className="font-display text-xl font-semibold text-slate-900">Convincing CTA</h2>
            <p className="mt-2 text-slate-700">
              Dorong aksi dengan value proposition yang jelas, alur copy yang ringkas,
              dan CTA yang tegas.
            </p>
          </article>
        </div>
      </section>

      <section id="milestone" className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <div className="rounded-3xl border border-slate-200/90 bg-white/85 p-7 md:p-10">
          <h3 className="font-display text-2xl font-semibold text-slate-900">
            Milestone Eksekusi
          </h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            <div className="milestone-item">
              <p className="milestone-day">H-7</p>
              <p className="milestone-title">Riset & Moodboard</p>
            </div>
            <div className="milestone-item">
              <p className="milestone-day">H-4</p>
              <p className="milestone-title">Build & Polish UI</p>
            </div>
            <div className="milestone-item">
              <p className="milestone-day">H-1</p>
              <p className="milestone-title">Audit & Final Submit</p>
            </div>
          </div>
        </div>
      </section>

      <section id="register" className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div className="reveal-up rounded-3xl bg-slate-900 p-8 text-slate-100 md:p-12">
          <p className="text-xs tracking-[0.28em] text-amber-300 uppercase">Ready to Launch</p>
          <h4 className="mt-3 font-display text-3xl leading-tight font-bold sm:text-4xl">
            Deploy ke Vercel, kirim URL, dan menangkan panggung.
          </h4>
          <p className="mt-3 max-w-2xl text-slate-300">
            Proyek sudah berbasis Next.js + Tailwind CSS. Tinggal sesuaikan konten brand
            timmu, lalu publish dalam hitungan menit.
          </p>
          <a
            className="mt-7 inline-flex rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-300"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Vercel Dashboard
          </a>
        </div>
      </section>
    </main>
  );
}
