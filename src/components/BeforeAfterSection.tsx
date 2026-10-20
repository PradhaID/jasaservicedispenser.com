"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

export default function BeforeAfterSection() {
  const comparisons = [
    {
      id: "aliran-air",
      title: "Aliran Air Mampet & Pompa Mati",
      category: "Dispenser Galon",
      beforeLabel: "Sebelum: Air Macet / Tidak Keluar",
      afterLabel: "Sesudah: Normal Kembali & Lancar",
      beforeDesc: "Pompa hisap galon bawah mati dan selang internal tersumbat endapan kapur.",
      afterDesc: "Penggantian pompa baru dan pembersihan jalur selang, aliran air kembali deras normal.",
      beforeImage: "/images/pipe_leak.jpg",
      afterImage: "/images/hero_technician.jpg",
    },
    {
      id: "filter-ro",
      title: "Filter RO Kotor & Tersumbat",
      category: "Dispenser RO",
      beforeLabel: "Sebelum: Filter Kotor & Keruh",
      afterLabel: "Sesudah: Filter Bersih & Higienis",
      beforeDesc: "Filter sedimen berubah warna cokelat pekat karena telah melewati masa pakai.",
      afterDesc: "Dipasang set filter baru food-grade, kemurnian air kembali terjamin jernih dan higienis.",
      beforeImage: "/images/filter_dirty.jpg",
      afterImage: "/images/filter_clean.jpg",
    },
    {
      id: "kebocoran-pipa",
      title: "Bocor Pipa Sambungan Dalam",
      category: "Perbaikan Kebocoran",
      beforeLabel: "Sebelum: Bocor / Rembesan Air",
      afterLabel: "Sesudah: Rapi & Kering Sempurna",
      beforeDesc: "Fitting sambungan selang aus sehingga timbul rembesan air ke lantai dan body dispenser.",
      afterDesc: "Penggantian elbow fitting baru berstandar tekanan tinggi, sambungan kuat anti bocor.",
      beforeImage: "/images/pipe_leak.jpg",
      afterImage: "/images/pipe_fixed.jpg",
    },
    {
      id: "pendingin-kompresor",
      title: "Sistem Pendingin Tidak Berfungsi",
      category: "Dispenser Hot & Cold",
      beforeLabel: "Sebelum: Air Tidak Dingin",
      afterLabel: "Sesudah: Dingin Normal & Segar",
      beforeDesc: "Thermostat pendingin rusak dan kipas pendingin kotor berdebu tebal.",
      afterDesc: "Perbaikan sensor temperatur dan pembersihan kompresor, air dingin kembali segar.",
      beforeImage: "/images/dispenser_maintenance.jpg",
      afterImage: "/images/water_glass.jpg",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-wider text-cyan-600 uppercase mb-2 block">
            HASIL KERJA KAMI
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dispenser Rusak, Kembali Normal
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Berikut beberapa contoh hasil perbaikan dispenser dari pelanggan
            kami yang telah kembali berfungsi optimal seperti baru.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparisons.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-shadow p-5 sm:p-6 text-left"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-50 text-cyan-700">
                  {item.category}
                </span>
                <span className="text-xs font-semibold text-slate-700">
                  {item.title}
                </span>
              </div>

              {/* Side-by-side Before & After Images */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {/* Before Image Box */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-red-200/60">
                  <Image
                    src={item.beforeImage}
                    alt={item.beforeLabel}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-rose-600/90 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                    <AlertCircle className="w-3 h-3" />
                    <span>Sebelum</span>
                  </div>
                </div>

                {/* After Image Box */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-emerald-300/80">
                  <Image
                    src={item.afterImage}
                    alt={item.afterLabel}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-emerald-600/90 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Sesudah</span>
                  </div>
                </div>
              </div>

              {/* Text Description */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-600 border-t border-slate-100">
                <div>
                  <span className="font-semibold text-rose-700 block mb-0.5">
                    {item.beforeLabel}
                  </span>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {item.beforeDesc}
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-emerald-700 block mb-0.5">
                    {item.afterLabel}
                  </span>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {item.afterDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
