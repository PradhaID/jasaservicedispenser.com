"use client";

import React from "react";
import { Droplets, Phone, MapPin, Clock, MessageCircle, Shield } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  const areas = [
    "Jakarta Selatan",
    "Jakarta Barat",
    "Jakarta Pusat",
    "Jakarta Timur",
    "Jakarta Utara",
    "Depok & Sawangan",
    "Tangerang & Tangsel",
    "Bekasi & Cikarang",
    "Bogor & Cibinong",
  ];

  return (
    <footer className="bg-[#08162b] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800 text-left">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-md">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                  Dispenser<span className="text-cyan-400">Fix</span>
                </span>
                <span className="text-[10px] font-medium text-slate-400 tracking-wide uppercase">
                  Service &amp; Perbaikan Dispenser
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              Pusat jasa service dan perbaikan dispenser panggilan terpercaya
              untuk wilayah Jabodetabek. Menangani dispenser galon atas, galon
              bawah, dan sistem Reverse Osmosis (RO) semua merek.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-800/40 px-3 py-1.5 rounded-lg w-fit">
              <Shield className="w-4 h-4" />
              <span>Garansi Service 30 Hari</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="#beranda"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Layanan Kami
                </a>
              </li>
              <li>
                <a
                  href="#tentang-kami"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#testimoni"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Testimoni Pelanggan
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Service Area (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Wilayah Jangkauan</span>
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Layanan panggilan teknisi ke lokasi:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {areas.map((area, idx) => (
                <span
                  key={idx}
                  className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Contact & Hours (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Kontak &amp; Operasional
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Jam Operasional:</div>
                  <div className="text-slate-400">
                    Senin - Minggu: 08:00 - 20:00 WIB
                  </div>
                  <div className="text-[11px] text-cyan-400">
                    (Tetap Buka di Hari Libur)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">WhatsApp &amp; Telp:</div>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline font-mono"
                  >
                    +62 812-3456-7890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            &copy; {currentYear} jasaservicedispenser.com (DispenserFix). Hak
            Cipta Dilindungi Undang-Undang.
          </p>
          <p className="text-slate-400">
            Jasa Service Dispenser Profesional &bull; Galon Bawah, Atas &amp; RO
          </p>
        </div>
      </div>
    </footer>
  );
}
