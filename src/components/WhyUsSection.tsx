import React from "react";
import {
  Wrench,
  Zap,
  BadgePercent,
  Cpu,
  MapPin,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

interface ReasonItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const reasons: ReasonItem[] = [
  {
    icon: Wrench,
    title: "Teknisi Berpengalaman",
    description:
      "Ditangani langsung oleh teknisi ahli yang berpengalaman bertahun-tahun di bidang service dispenser berbagai tipe dan merek.",
  },
  {
    icon: Zap,
    title: "Pengerjaan Cepat",
    description:
      "Respon cepat dan penanganan efisien. Kami mengupayakan perbaikan selesai pada hari yang sama di lokasi Anda.",
  },
  {
    icon: BadgePercent,
    title: "Harga Transparan",
    description:
      "Estimasi biaya disampaikan secara jujur sebelum pengerjaan dimulai. Bebas dari biaya tersembunyi yang merugikan.",
  },
  {
    icon: Cpu,
    title: "Sparepart Original",
    description:
      "Menggunakan suku cadang pengganti yang berkualitas, original, dan presisi sesuai dengan tipe dispenser Anda.",
  },
  {
    icon: MapPin,
    title: "Panggilan ke Lokasi",
    description:
      "Praktis tanpa repot membawa dispenser keluar. Teknisi kami siap datang ke rumah, kantor, atau tempat usaha Anda.",
  },
  {
    icon: ShieldCheck,
    title: "Garansi Service",
    description:
      "Kenyamanan Anda adalah prioritas. Kami memberikan garansi service dan jaminan perbaikan ulang jika ada kendala.",
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="tentang-kami"
      className="py-16 sm:py-20 bg-[#0c2340] text-white relative overflow-hidden"
    >
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reasons.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="group p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.08] transition-all duration-300 shadow-lg text-left"
              >
                {/* Header: Icon badge & Title strictly inline */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-cyan-500/25 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Description below */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
