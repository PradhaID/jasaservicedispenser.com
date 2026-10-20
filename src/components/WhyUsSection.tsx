"use client";

import React from "react";
import {
  Wrench,
  Zap,
  BadgePercent,
  Cpu,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export default function WhyUsSection() {
  const reasons = [
    {
      icon: <Wrench className="w-7 h-7 text-cyan-400" />,
      title: "Teknisi Berpengalaman",
      description:
        "Ditangani langsung oleh teknisi ahli yang berpengalaman bertahun-tahun di bidang service dispenser berbagai tipe dan merek.",
    },
    {
      icon: <Zap className="w-7 h-7 text-cyan-400" />,
      title: "Pengerjaan Cepat",
      description:
        "Respon cepat dan penanganan efisien. Kami mengupayakan perbaikan selesai pada hari yang sama di lokasi Anda.",
    },
    {
      icon: <BadgePercent className="w-7 h-7 text-cyan-400" />,
      title: "Harga Transparan",
      description:
        "Estimasi biaya disampaikan secara jujur sebelum pengerjaan dimulai. Bebas dari biaya tersembunyi yang merugikan.",
    },
    {
      icon: <Cpu className="w-7 h-7 text-cyan-400" />,
      title: "Sparepart Original",
      description:
        "Menggunakan suku cadang pengganti yang berkualitas, original, dan presisi sesuai dengan tipe dispenser Anda.",
    },
    {
      icon: <MapPin className="w-7 h-7 text-cyan-400" />,
      title: "Panggilan ke Lokasi",
      description:
        "Praktis tanpa repot membawa dispenser keluar. Teknisi kami siap datang ke rumah, kantor, atau tempat usaha Anda.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-cyan-400" />,
      title: "Garansi Service",
      description:
        "Kenyamanan Anda adalah prioritas. Kami memberikan garansi service dan jaminan perbaikan ulang jika ada kendala.",
    },
  ];

  return (
    <section
      id="tentang-kami"
      className="py-16 sm:py-24 bg-[#0c2340] text-white relative overflow-hidden"
    >
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-wider text-cyan-400 uppercase mb-2 block">
            KENAPA MEMILIH KAMI?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Alasan Memilih Kami
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Komitmen kami adalah memberikan rasa aman, kualitas kerja terbaik,
            dan kepuasan maksimal bagi setiap pelanggan.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.08] transition-all duration-300 shadow-lg text-left"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-cyan-500/25 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
