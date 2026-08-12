import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const users = [
  { name: "Rina", seed: "rina", role: "UI Designer", offset: "mt-0" },
  { name: "Budi", seed: "budi", role: "Dev", offset: "mt-8" },
  { name: "Sari", seed: "sari", role: "PM", offset: "mt-2" },
  { name: "Andi", seed: "andi", role: "Data", offset: "mt-10" },
  { name: "Dewi", seed: "dewi", role: "Marketing", offset: "mt-4" },
  { name: "Fajar", seed: "fajar", role: "Engineer", offset: "mt-12" },
  { name: "Maya", seed: "maya", role: "HR", offset: "mt-0" },
  { name: "Hadi", seed: "hadi", role: "Analyst", offset: "mt-6" },
];

export default function UserShowcase() {
  return (
    <section className="overflow-hidden border-y border-[#d8c8c0]/80 bg-[#fbf2e8]/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm text-[#6f6870]">
            Lebih dari{" "}
            <strong className="font-semibold text-[#2b2a52]">
              12.000+ mahasiswa
            </strong>{" "}
            sudah memperbaiki profil kariernya
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-4 gap-3 sm:gap-4 md:grid-cols-8 md:gap-3">
          {users.map((u, i) => (
            <Reveal key={u.seed} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className={`group ${u.offset}`}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-[#d8c8c0] bg-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src={`https://api.dicebear.com/7.x/notionists/svg?seed=${u.seed}&backgroundColor=b6e3f4,c0aede,d1d4f9`}
                    alt={`Profil ${u.name}`}
                    fill
                    className="object-cover p-2"
                    unoptimized
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#202048]/70 to-transparent p-2 pt-6">
                    <p className="text-[10px] font-semibold text-white">
                      {u.name}
                    </p>
                    <p className="text-[9px] text-white/70">{u.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2} className="mt-10 flex justify-center">
          <Button href="/cv">Buat CV Sekarang</Button>
        </Reveal>
      </div>
    </section>
  );
}
