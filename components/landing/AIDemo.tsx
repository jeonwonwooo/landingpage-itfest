"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const chatMessages = [
  {
    role: "user" as const,
    text: "Bisa bantu sesuaikan CV saya dengan job description ini?",
  },
  {
    role: "ai" as const,
    text: "Tentu! Saya analisa dulu — bagian pengalaman perlu metrik angka. Coba: \"Meningkatkan engagement 32% dalam 3 bulan lewat optimasi UX.\"",
  },
];

export default function AIDemo() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (visibleCount >= chatMessages.length) return;

    const isAi = chatMessages[visibleCount]?.role === "ai";
    const delay = visibleCount === 0 ? 800 : 1400;

    const timer = setTimeout(() => {
      if (isAi) setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setVisibleCount((c) => c + 1);
      }, isAi ? 1000 : 0);
    }, delay);

    return () => clearTimeout(timer);
  }, [visibleCount]);

  return (
    <section id="demo" className="border-y border-slate-200/80 bg-slate-50/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              AI Chat
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Asisten karier personal
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Chat dengan AI yang membantu menulis, menulis ulang, dan
              mengoptimalkan CV section-by-section — berdasarkan ATS, job
              description, dan ekspektasi recruiter.
            </p>
            <div className="mt-8">
              <Button href="/cv">Buat CV Sekarang</Button>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="relative">
              <div className="absolute -right-2 -top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#f59e0b"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_40px_-12px_rgba(15,23,42,0.12)]">
                <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-3.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)] text-xs font-bold text-white">
                    AI
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Karierku Assistant
                    </p>
                    <p className="text-xs text-slate-400">Online</p>
                  </div>
                </div>

                <div className="min-h-[200px] space-y-3 p-5">
                  {chatMessages.slice(0, visibleCount).map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "rounded-br-md bg-[var(--primary)] text-white"
                            : "rounded-bl-md bg-slate-100 text-slate-700"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}

                  {typing && (
                    <div className="flex justify-start">
                      <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-slate-100 px-4 py-3 text-sm text-slate-400">
                        <span className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <span className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <span className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
