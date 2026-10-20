"use client";

import React from "react";
import {
  Power,
  Droplet,
  Droplets,
  Snowflake,
  Flame,
  Wrench,
  MessageCircle,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      id: "tidak-menyala",
      title: "Tidak Mau Menyala",
      desc: "Lampu indikator mati total atau dispenser tidak ada respon sama sekali.",
      icon: <Power className="w-8 h-8 text-cyan-600" />,
      waMessage:
        "Halo DispenserFix, dispenser saya tidak mau menyala sama sekali. Mohon info estimasi biaya dan jadwal pengecekan teknisi.",
    },
    {
      id: "air-tidak-keluar",
      title: "Air Tidak Keluar",
      desc: "Air macet, debit sangat kecil, atau pompa galon bawah tidak menyedot air.",
      icon: <Droplet className="w-8 h-8 text-cyan-600" />,
      waMessage:
        "Halo DispenserFix, air di dispenser saya tidak mau keluar / volumenya sangat kecil. Bisa tolong dicek?",
    },
    {
      id: "bocor-tetesan",
      title: "Bocor / Tetesan Air",
      desc: "Ada genangan di bawah dispenser, tetesan dari kran, atau rembesan selang.",
      icon: <Droplets className="w-8 h-8 text-cyan-600" />,
      waMessage:
        "Halo DispenserFix, dispenser saya mengalami kebocoran air / ada tetesan terus menerus. Mohon bantuan teknisi.",
    },
    {
      id: "tidak-dingin",
      title: "Tidak Dingin",
      desc: "Fitur pendingin tidak berfungsi, kompresor/thermostat pendingin bermasalah.",
      icon: <Snowflake className="w-8 h-8 text-cyan-600" />,
      waMessage:
        "Halo DispenserFix, dispenser saya tidak bisa menghasilkan air dingin. Mau minta tolong diservice.",
    },
    {
      id: "tidak-panas",
      title: "Tidak Panas",
      desc: "Air panas tidak mendidih, pemanas lambat, atau tabung pemanas bermasalah.",
      icon: <Flame className="w-8 h-8 text-cyan-600" />,
      waMessage:
        "Halo DispenserFix, air panas pada dispenser saya tidak menyala / tidak panas. Bisa jadwalkan perbaikan?",
    },
    {
      id: "masalah-lainnya",
      title: "Masalah Lainnya",
      desc: "Suara dengung bising, bau tidak sedap, error kelistrikan, dan kerusakan lainnya.",
      icon: <Wrench className="w-8 h-8 text-cyan-600" />,
      waMessage:
        "Halo DispenserFix, dispenser saya mengalami kendala teknis (bunyi berisik / error). Mohon konsultasi teknisi.",
    },
  ];

  const generalWaUrl =
    "https://wa.me/6281234567890?text=Halo%20DispenserFix,%20saya%20tidak%20yakin%20kerusakan%20dispenser%20saya%20apa.%20Bisa%20bantu%20diagnosa%20lewat%20WhatsApp?";

  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row with Consultation Card */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-bold tracking-wider text-cyan-600 uppercase mb-2 block">
              DIAGNOSA CEPAT
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Dispenser Anda Mengalami Masalah Ini?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Dispenser tidak mau menyala, air tidak keluar, bocor, atau ada
              kendala lainnya? Ceritakan masalahnya kepada teknisi kami melalui
              WhatsApp.
            </p>
          </div>

          {/* Consultation Box */}
          <div className="bg-white border border-sky-200/90 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:max-w-md shrink-0">
            <div className="p-3 rounded-xl bg-sky-50 text-cyan-600 shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-semibold text-slate-900 leading-snug">
                Tidak yakin kerusakannya apa?
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Kami siap membantu mendiagnosa gratis melalui WhatsApp.
              </p>
            </div>
            <a
              href={generalWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all whitespace-nowrap active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Konsultasi Gratis</span>
            </a>
          </div>
        </div>

        {/* 6 Problem Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {problems.map((prob) => {
            const cardWaUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
              prob.waMessage
            )}`;
            return (
              <a
                key={prob.id}
                href={cardWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-cyan-400 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                {/* Icon wrapper */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-sky-50 group-hover:bg-cyan-500/10 flex items-center justify-center mb-3 transition-colors">
                  {prob.icon}
                </div>

                {/* Title */}
                <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-cyan-700 transition-colors line-clamp-2 min-h-[2.5rem] flex items-center justify-center">
                  {prob.title}
                </h3>

                {/* Hidden/Subtle prompt on hover */}
                <div className="mt-2 text-[11px] font-semibold text-emerald-600 flex items-center gap-1 opacity-90 group-hover:opacity-100">
                  <span>Chat Masalah Ini</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
