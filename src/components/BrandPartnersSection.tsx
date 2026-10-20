"use client";

import React from "react";

export default function BrandPartnersSection() {
  const brands = [
    { name: "AQUA", color: "text-blue-600 font-extrabold tracking-wider" },
    { name: "Miyako", color: "text-sky-700 font-black tracking-tight" },
    { name: "POLYTRON", color: "text-red-600 font-black tracking-wider" },
    { name: "SHARP", color: "text-red-700 font-black tracking-widest" },
    { name: "Panasonic", color: "text-blue-800 font-bold tracking-tight" },
    { name: "SANKEN", color: "text-slate-800 font-extrabold tracking-wider" },
    { name: "TOSHIBA", color: "text-red-600 font-extrabold tracking-wide" },
    { name: "LG", color: "text-rose-700 font-black tracking-tight" },
    { name: "Denpoo", color: "text-blue-600 font-bold" },
    { name: "MODENA", color: "text-slate-900 font-black tracking-widest" },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-6 block">
          MEREK YANG KAMI TANGANI
        </span>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:bg-slate-100/80 transition-all duration-200 flex items-center justify-center min-w-[100px]"
            >
              <span className={`text-base sm:text-lg ${brand.color}`}>
                {brand.name}
              </span>
            </div>
          ))}
          <div className="px-3 py-1.5 text-xs font-medium text-slate-500 italic">
            dan merek lainnya...
          </div>
        </div>
      </div>
    </section>
  );
}
