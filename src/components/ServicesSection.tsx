"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Check, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: "galon",
      title: "Dispenser Galon",
      subtitle: "Galon Bawah & Atas",
      description:
        "Perbaikan dispenser galon bawah dan atas, untuk rumah, kantor, dan usaha.",
      image: "/images/dispenser_galon.jpg",
      points: [
        "Perbaikan pompa hisap galon bawah",
        "Perbaikan sistem kelistrikan & pemanas",
        "Penanganan kebocoran kran & sambungan",
      ],
      waMessage:
        "Halo DispenserFix, saya ingin service dispenser galon (bawah/atas). Mohon info biaya dan jadwal.",
    },
    {
      id: "ro",
      title: "Dispenser RO",
      subtitle: "Reverse Osmosis System",
      description:
        "Service dan perawatan dispenser RO, termasuk penggantian filter dan komponen.",
      image: "/images/dispenser_ro.jpg",
      points: [
        "Penggantian membran RO & sediment filter",
        "Perbaikan pompa booster RO macet",
        "Pengecekan TDS & rasa kemurnian air",
      ],
      waMessage:
        "Halo DispenserFix, saya butuh service/ganti filter dispenser sistem Reverse Osmosis (RO).",
    },
    {
      id: "sparepart",
      title: "Penggantian Sparepart",
      subtitle: "Original & Bergaransi",
      description:
        "Ganti sparepart original & berkualitas, seperti pompa, thermostat, kran, filter, dan lainnya.",
      image: "/images/dispenser_spareparts.jpg",
      points: [
        "Pompa galon bawah heavy-duty",
        "Thermostat suhu panas & dingin",
        "Kran child-lock & kran standar",
      ],
      waMessage:
        "Halo DispenserFix, saya membutuhkan penggantian sparepart untuk dispenser saya. Bisa dibantu?",
    },
    {
      id: "maintenance",
      title: "Cuci & Kuras (Maintenance)",
      subtitle: "Deep Cleaning & Sanitasi",
      description:
        "Membersihkan dan merawat sistem dispenser agar tetap higienis dan awet.",
      image: "/images/dispenser_maintenance.jpg",
      points: [
        "Pembersihan kerak kapur tangki pemanas",
        "Sterilisasi pipa dan penampungan air",
        "Sanitasi bebas bau & bakteri",
      ],
      waMessage:
        "Halo DispenserFix, saya mau memesan jasa cuci & kuras (maintenance pembersihan) dispenser.",
    },
  ];

  return (
    <section id="layanan" className="py-16 sm:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-wider text-cyan-600 uppercase mb-2 block">
            JENIS LAYANAN KAMI
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Service Berbagai Jenis Dispenser
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Solusi lengkap untuk segala kebutuhan perawatan dan perbaikan
            dispenser rumah tangga maupun perkantoran.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {services.map((item) => {
            const cardWaUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
              item.waMessage
            )}`;
            return (
              <div
                key={item.id}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Card Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-slate-700 shadow-sm">
                    {item.subtitle}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[3rem]">
                      {item.description}
                    </p>

                    {/* Features list */}
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                      {item.points.map((pt, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-start gap-2 text-xs text-slate-600"
                        >
                          <Check className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="mt-6 pt-3">
                    <a
                      href={cardWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-sky-50 group-hover:bg-emerald-500 group-hover:text-white text-cyan-800 text-xs sm:text-sm font-semibold transition-all duration-200"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Order Layanan</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
