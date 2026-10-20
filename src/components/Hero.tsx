"use client";

import React from "react";
import Image from "next/image";
import {
  MessageCircle,
  Calendar,
  MapPin,
  CheckCircle2,
  FileText,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const waUrl =
    "https://wa.me/6281234567890?text=Halo%20DispenserFix,%20saya%20mau%20konsultasi%20service%20dispenser.%20Mohon%20info%20ketersediaan%20teknisi.";

  const trustHighlights = [
    {
      icon: <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />,
      text: "Bisa dipanggil ke lokasi",
    },
    {
      icon: <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />,
      text: "Semua merek dispenser",
    },
    {
      icon: <FileText className="w-4 h-4 text-cyan-400 shrink-0" />,
      text: "Estimasi biaya sebelum perbaikan",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />,
      text: "Garansi service",
    },
  ];

  return (
    <section
      id="beranda"
      className="relative bg-[#0c2340] text-white pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Decorative Background Lighting */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-32 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Service Dispenser Semua Merek</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.15] mb-5">
              Dispenser Rusak? <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-200 bg-clip-text text-transparent">
                Kami Siap Perbaiki.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Jasa service dan perbaikan dispenser (galon &amp; RO) untuk rumah,
              kantor, dan usaha. Teknisi berpengalaman, cepat, biaya transparan,
              dan bergaransi.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-base shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat WhatsApp Sekarang</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-base transition-all duration-200 backdrop-blur-sm hover:border-white/30 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-cyan-300" />
                <span>Jadwalkan Service</span>
              </button>
            </div>

            {/* 4 Trust Highlights (Inline Icon & Text) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 pt-6 border-t border-slate-700/60 w-full">
              {trustHighlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 shrink-0 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs sm:text-[13px] text-slate-300 font-medium leading-snug">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-3xl opacity-30 blur-lg group-hover:opacity-50 transition duration-1000" />

              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#0b1e38]">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full">
                  <Image
                    src="/images/hero_technician.jpg"
                    alt="Teknisi profesional service dispenser panggilan di lokasi"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-center"
                  />
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c2340]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Assurance Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#0c2340]/85 backdrop-blur-md border border-white/15 text-white flex items-center gap-3 shadow-lg">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-semibold text-white">
                      Teknisi Tersedia Hari Ini
                    </span>
                    <span className="text-[11px] text-slate-300">
                      Respon cepat &bull; Garansi service 30 hari
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
