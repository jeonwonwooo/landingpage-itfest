# Landing Page ITFest

Template kompetisi landing page berbasis Next.js 16 + Tailwind CSS 4.

## Menjalankan di Lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Struktur Penting

- `app/page.tsx`: konten landing page utama
- `app/globals.css`: styling global dan animasi
- `app/layout.tsx`: metadata dan konfigurasi font

## Build Produksi

```bash
npm run build
npm run start
```

## Deploy ke Vercel

### Opsi 1 (Paling mudah, via GitHub)

1. Push project ini ke repository GitHub.
2. Buka https://vercel.com/new dan login.
3. Pilih repository `landingpage-itfest`.
4. Klik Deploy (setting default Next.js sudah otomatis benar).
5. Setelah selesai, dapat URL produksi.

### Opsi 2 (Via CLI)

```bash
npm i -g vercel
vercel
```

Ikuti prompt login dan konfirmasi project.

Untuk update berikutnya:

```bash
vercel --prod
```

## Catatan Lomba

- Ganti konten hero, timeline, dan CTA sesuai brief resmi lomba.
- Optimasi aset gambar (WebP/AVIF) agar skor performa tetap tinggi.
- Jalankan Lighthouse sebelum submit URL final.
