"use client";

import React from "react";
import {
  MessageCircle,
  HelpCircle,
  FileCheck,
  Wrench,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

export default function WorkflowAndPricingSection() {
  const steps = [
    {
      num: "01",
      title: "Hubungi Kami",
      desc: "Kirim pesan WhatsApp dan ceritakan masalah dispenser Anda.",
      icon: <MessageCircle className="w-5 h-5 text-cyan-600" />,
    },
    {
      num: "02",
      title: "Konsultasi & Diagnosa",
      desc: "Teknisi menanyakan gejala dan melakukan pengecekan awal.",
      icon: <HelpCircle className="w-5 h-5 text-cyan-600" />,
    },
    {
      num: "03",
      title: "Estimasi Biaya",
      desc: "Anda mendapatkan informasi mengenai kebutuhan perbaikan dan estimasi biaya transparan.",
      icon: <FileCheck className="w-5 h-5 text-cyan-600" />,
    },
    {
      num: "04",
      title: "Perbaikan",
      desc: "Teknisi melakukan perbaikan secara profesional setelah mendapatkan persetujuan Anda.",
      icon: <Wrench className="w-5 h-5 text-cyan-600" />,
    },
    {
      num: "05",
      title: "Testing & Selesai",
      desc: "Dispenser diuji kembali untuk memastikan seluruh fungsi panas, dingin, dan aliran berjalan normal.",
      icon: <CheckCircle2 className="w-5 h-5 text-cyan-600" />,
    },
  ];

  const pricingItems = [
    {
      title: "Pengecekan Dispenser",
      price: "Mulai dari Rp 50.000",
      desc: "Pengecekan menyeluruh sistem pompa, kelistrikan, & pendingin.",
      waText:
        "Halo DispenserFix, saya ingin booking pengecekan dispenser (mulai Rp 50.000).",
    },
    {
      title: "Service Dispenser Galon",
      price: "Mulai dari Rp 100.000",
      desc: "Perbaikan pompa galon bawah, kran macet, air tidak panas/dingin.",
      waText:
        "Halo DispenserFix, saya ingin pesan service dispenser galon (mulai Rp 100.000).",
    },
    {
      title: "Service Dispenser RO",
      price: "Mulai dari Rp 150.000",
      desc: "Perawatan membran RO, kuras tangki tekanan, dan pengecekan TDS.",
      waText:
        "Halo DispenserFix, saya ingin pesan service dispenser RO (mulai Rp 150.000).",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left: Cara Kerja (7 cols) */}
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-bold tracking-wider text-cyan-600 uppercase mb-2 block">
              CARA KERJA
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Service Dispenser Jadi Lebih Mudah
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-10">
              Proses pemesanan cepat dan terstruktur agar dispenser Anda kembali
              berfungsi normal tanpa hambatan.
            </p>

            {/* Steps Timeline */}
            <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-cyan-200">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex items-start gap-4 group">
                  {/* Number Badge & Marker */}
                  <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-cyan-500 text-white font-bold text-xs flex items-center justify-center ring-4 ring-white shadow-sm">
                    {step.num}
                  </div>

                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex-1 group-hover:border-cyan-400 group-hover:bg-sky-50/50 transition-all">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="p-1 rounded-md bg-white border border-slate-200">
                        {step.icon}
                      </div>
                      <h3 className="text-base font-bold text-slate-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Perkiraan Biaya Service (5 cols) */}
          <div className="lg:col-span-5 text-left lg:sticky lg:top-28">
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 shadow-sm">
              <span className="text-xs font-bold tracking-wider text-cyan-600 uppercase mb-2 block">
                BIAYA TRANSPARAN
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-3">
                Perkiraan Biaya Service
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Setiap kerusakan memiliki biaya yang berbeda. Kami melakukan
                pengecekan terlebih dahulu agar Anda mendapatkan estimasi biaya
                yang jelas sebelum pengerjaan.
              </p>

              {/* Price Cards */}
              <div className="space-y-3.5 mb-6">
                {pricingItems.map((item, idx) => {
                  const itemWaUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
                    item.waText
                  )}`;
                  return (
                    <a
                      key={idx}
                      href={itemWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-4 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <div className="text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                        <div className="text-right shrink-0 flex items-center gap-1">
                          <span className="text-xs font-bold text-cyan-600">
                            {item.price}
                          </span>
                          <ChevronRight className="w-4 h-4 text-cyan-500 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Disclaimer */}
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/60 flex items-start gap-2.5 text-[11px] sm:text-xs text-amber-800">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  *Harga dapat berbeda berdasarkan jenis kerusakan, tipe/merek
                  dispenser, lokasi kunjungan, dan kebutuhan penggantian sparepart.
                </p>
              </div>

              {/* Fast WhatsApp CTA */}
              <div className="mt-6">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20DispenserFix,%20saya%20mau%20tanya%20estimasi%20biaya%20service%20dispenser%20saya."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Tanya Estimasi Biaya via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
