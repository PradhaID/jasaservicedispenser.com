"use client";

import React from "react";
import Image from "next/image";
import { Clock, ShieldCheck, AlertTriangle, CheckCircle } from "lucide-react";

export default function CareBenefitsSection() {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-cyan-600" />,
      title: "Meningkatkan Umur Pakai",
      description:
        "Dengan perawatan yang tepat dan pembersihan berkala, komponen pemanas dan pendingin dispenser bisa bekerja lebih awet hingga bertahun-tahun.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-cyan-600" />,
      title: "Kualitas Air Lebih Terjaga",
      description:
        "Sistem jalur air dan filter tetap bersih dari lumut, kerak kapur, dan bakteri, sehingga air minum keluarga selalu higienis dan segar.",
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-cyan-600" />,
      title: "Mencegah Kerusakan Besar",
      description:
        "Deteksi dini pada kebocoran pipa atau pompa yang lemah mencegah korsleting listrik serta biaya perbaikan besar di masa depan.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left / Top Copy */}
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-bold tracking-wider text-cyan-600 uppercase mb-2 block">
              PERAWATAN BERKALA
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Mengapa Perlu Perawatan Dispenser?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              Perawatan rutin membantu dispenser tetap awet, higienis, dan
              bekerja dengan optimal. Kami siap menangani berbagai masalah,
              mulai dari perawatan ringan hingga perbaikan total.
            </p>

            {/* Benefit items */}
            <div className="space-y-6">
              {benefits.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right / Visual Box */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-900">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                <Image
                  src="/images/water_glass.jpg"
                  alt="Kualitas air dispenser bersih higienis dan jernih"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2340] via-[#0c2340]/40 to-transparent" />
              </div>

              {/* Bottom Quote Banner */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="flex items-center gap-2 mb-2 text-cyan-400">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Jaminan Kualitas
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  Percayakan pada teknisi berpengalaman kami untuk menjaga
                  dispenser Anda tetap dalam kondisi terbaik, higienis, dan aman
                  untuk konsumsi setiap hari.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
