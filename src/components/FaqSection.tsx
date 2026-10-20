"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Apakah bisa service dispenser di rumah?",
      answer:
        "Bisa! Layanan kami adalah service panggilan langsung ke lokasi Anda. Teknisi profesional kami akan datang membawa peralatan dan sparepart yang diperlukan untuk melakukan pengecekan dan perbaikan langsung di rumah, kantor, atau tempat usaha Anda.",
    },
    {
      question: "Berapa biaya service dispenser?",
      answer:
        "Biaya perbaikan mulai dari Rp 50.000 untuk pengecekan awal, dan mulai dari Rp 100.000 untuk service dispenser galon. Biaya final bergantung pada jenis kerusakan serta kebutuhan penggantian suku cadang. Teknisi kami selalu menginfokan estimasi biaya sebelum perbaikan dimulai secara transparan.",
    },
    {
      question: "Apakah semua merek dispenser bisa diperbaiki?",
      answer:
        "Ya, teknisi kami memiliki pengalaman menangani berbagai brand ternama seperti Miyako, Sharp, Polytron, Aqua, Panasonic, Sanken, Toshiba, LG, Denpoo, Modena, GEA, Arisa, dan merek dispenser lainnya baik tipe galon atas maupun galon bawah.",
    },
    {
      question: "Berapa lama proses perbaikan?",
      answer:
        "Sebagian besar kerusakan umum seperti air mampet, kran menetes, penggantian selang, pompa galon lemah, atau thermostat rusak dapat diselesaikan dalam waktu 30 hingga 60 menit langsung di lokasi Anda.",
    },
    {
      question: "Apakah ada garansi service?",
      answer:
        "Tentu ada! Kami memberikan garansi service hingga 30 hari untuk setiap pengerjaan dan garansi resmi sparepart yang diganti. Jika terjadi kendala yang sama selama masa garansi, kami siap membantu tanpa biaya tambahan.",
    },
    {
      question: "Bisa perbaiki dispenser RO (Reverse Osmosis)?",
      answer:
        "Sangat bisa. Kami melayani service menyeluruh untuk sistem Reverse Osmosis (RO), mulai dari penggantian filter sedimen/karbon, penggantian membran RO, perbaikan booster pump, tangki tekanan, hingga pengecekan TDS kemurnian air.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-wider text-cyan-600 uppercase mb-2 block">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Temukan jawaban cepat seputar layanan perbaikan dispenser panggilan
            kami.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none hover:bg-slate-50/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-cyan-500 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 mt-1">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-sky-50 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-600 text-white shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                Punya pertanyaan lain yang belum terjawab?
              </p>
              <p className="text-xs text-slate-600">
                Hubungi teknisi kami langsung untuk konsultasi gratis.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/6281234567890?text=Halo%20DispenserFix,%20saya%20punya%20pertanyaan%20seputar%20service%20dispenser."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white text-xs sm:text-sm font-semibold transition-colors shrink-0"
          >
            Hubungi Customer Care
          </a>
        </div>
      </div>
    </section>
  );
}
