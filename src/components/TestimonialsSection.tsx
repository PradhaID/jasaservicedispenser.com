"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Budi Santoso",
      location: "Jakarta",
      role: "Pelanggan Kantor",
      avatar: "/images/avatar_1.jpg",
      quote:
        "Teknisi datang tepat waktu, penjelasan kerusakannya jelas dan harganya juga sesuai. Dispenser di kantor kami sekarang sudah normal kembali.",
      rating: 5,
    },
    {
      name: "Siti Rahmawati",
      location: "Bekasi",
      role: "Ibu Rumah Tangga",
      avatar: "/images/avatar_2.jpg",
      quote:
        "Pelayanan cepat dan ramah, harga jelas, dan teknisinya sangat profesional. Langsung selesai di tempat tanpa repot. Sangat direkomendasikan!",
      rating: 5,
    },
    {
      name: "Andika Pratama",
      location: "Depok",
      role: "Pemilik Usaha Kafe",
      avatar: "/images/avatar_3.jpg",
      quote:
        "Dispenser RO saya bermasalah, setelah diservice akhirnya lancar lagi. Tidak ada biaya tambahan yang aneh-aneh. Sangat puas dengan layanannya!",
      rating: 5,
    },
  ];

  return (
    <section id="testimoni" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-wider text-cyan-600 uppercase mb-2 block">
            TESTIMONI PELANGGAN
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Apa Kata Pelanggan Kami?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Kepercayaan dan kepuasan pelanggan adalah bukti dedikasi kami dalam
            memberikan layanan perbaikan dispenser terbaik.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, sIdx) => (
                    <Star
                      key={sIdx}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0 bg-slate-200">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-900">
                    {item.name}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {item.location} &bull; {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
