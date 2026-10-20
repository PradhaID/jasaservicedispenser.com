"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Clock, Wrench, BadgeCheck } from "lucide-react";

export default function BottomCtaSection() {
  const waUrl =
    "https://wa.me/6281234567890?text=Halo%20DispenserFix,%20dispenser%20saya%20bermasalah.%20Mohon%20bantuan%20service%20secepatnya.";

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#0c2340] text-white p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Mini Dispenser on Left (Desktop) */}
            <div className="hidden lg:flex lg:col-span-3 justify-center">
              <div className="relative w-48 h-60 rounded-2xl overflow-hidden border border-white/15 bg-white/5 shadow-inner">
                <Image
                  src="/images/dispenser_galon.jpg"
                  alt="Dispenser air perbaikan cepat"
                  fill
                  sizes="200px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Middle & Right Content */}
            <div className="lg:col-span-9 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
                Dispenser Anda Bermasalah?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mb-8 leading-relaxed">
                Jangan tunggu sampai kerusakannya bertambah parah. Kirim pesan
                WhatsApp sekarang dan teknisi kami siap membantu perbaikan
                langsung ke tempat Anda.
              </p>

              {/* WhatsApp Button */}
              <div className="mb-8">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base shadow-xl shadow-emerald-500/30 transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Chat WhatsApp Sekarang</span>
                </a>
              </div>

              {/* 3 Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-6 border-t border-slate-700/60 w-full text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Respon cepat</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-cyan-400" />
                  <span>Teknisi berpengalaman</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-cyan-400" />
                  <span>Harga transparan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
