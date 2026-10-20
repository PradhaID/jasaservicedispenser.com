"use client";

import React, { useState } from "react";
import { X, Calendar, Wrench, Send, CheckCircle2 } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    dispenserType: "Galon Bawah",
    brand: "Miyako",
    issue: "Air tidak keluar / mampet",
    date: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*JADWALKAN SERVICE DISPENSER*
---------------------------------------
*Nama:* ${formData.name || "-"}
*No. WhatsApp:* ${formData.phone || "-"}
*Alamat Lokasi:* ${formData.address || "-"}
*Tipe Dispenser:* ${formData.dispenserType}
*Merek:* ${formData.brand}
*Kendala/Kerusakan:* ${formData.issue}
*Rencana Tanggal:* ${formData.date || "Secepatnya"}
*Catatan Tambahan:* ${formData.notes || "-"}
---------------------------------------
Halo DispenserFix, saya ingin booking jadwal service teknisi dengan data di atas. Mohon konfirmasi ketersediaan jadwal. Terima kasih.`;

    const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
      message
    )}`;
    window.open(waUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0c2340] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-400/30">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold">Jadwalkan Kunjungan Service</h3>
              <p className="text-xs text-slate-300">
                Teknisi siap datang ke alamat rumah atau kantor Anda
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form
          onSubmit={handleSubmit}
          className="p-5 sm:p-6 space-y-4 overflow-y-auto text-left text-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nama Lengkap *
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Budi"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nomor WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="0812xxxxxxxx"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs sm:text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Tipe Dispenser
              </label>
              <select
                value={formData.dispenserType}
                onChange={(e) =>
                  setFormData({ ...formData, dispenserType: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs sm:text-sm bg-white"
              >
                <option value="Galon Bawah">Galon Bawah</option>
                <option value="Galon Atas">Galon Atas</option>
                <option value="Dispenser RO (Reverse Osmosis)">
                  Dispenser RO (Reverse Osmosis)
                </option>
                <option value="Dispenser Meja / Portable">
                  Dispenser Meja / Portable
                </option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Merek Dispenser
              </label>
              <select
                value={formData.brand}
                onChange={(e) =>
                  setFormData({ ...formData, brand: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs sm:text-sm bg-white"
              >
                <option value="Miyako">Miyako</option>
                <option value="Sharp">Sharp</option>
                <option value="Polytron">Polytron</option>
                <option value="Aqua (Japan)">Aqua</option>
                <option value="Panasonic">Panasonic</option>
                <option value="Sanken">Sanken</option>
                <option value="Toshiba">Toshiba</option>
                <option value="LG">LG</option>
                <option value="Modena">Modena</option>
                <option value="Denpoo">Denpoo</option>
                <option value="Merek Lainnya">Merek Lainnya</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Kendala / Kerusakan yang Dialami
            </label>
            <select
              value={formData.issue}
              onChange={(e) =>
                setFormData({ ...formData, issue: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs sm:text-sm bg-white"
            >
              <option value="Air tidak keluar / mampet">
                Air tidak keluar / mampet
              </option>
              <option value="Tidak mau menyala / mati total">
                Tidak mau menyala / mati total
              </option>
              <option value="Bocor / rembesan air">Bocor / rembesan air</option>
              <option value="Tidak dingin">Tidak dingin</option>
              <option value="Tidak panas">Tidak panas</option>
              <option value="Ganti filter / Cuci & sanitasi">
                Ganti filter / Cuci & sanitasi
              </option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Alamat Lengkap Lokasi Service *
            </label>
            <textarea
              required
              rows={2}
              placeholder="Jalan, No Rumah, Kelurahan/Kecamatan, Kota (Jabodetabek)"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Rencana Tanggal Kunjungan
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs sm:text-sm"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Kirim &amp; Hubungi via WhatsApp</span>
            </button>
            <p className="text-[11px] text-center text-slate-400 mt-2">
              Data Anda aman &bull; Konfirmasi jadwal langsung ditanggapi teknisi
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
