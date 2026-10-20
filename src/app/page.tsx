import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import CareBenefitsSection from "@/components/CareBenefitsSection";
import ServicesSection from "@/components/ServicesSection";
import BrandPartnersSection from "@/components/BrandPartnersSection";
import WhyUsSection from "@/components/WhyUsSection";
import WorkflowAndPricingSection from "@/components/WorkflowAndPricingSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import BottomCtaSection from "@/components/BottomCtaSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header & Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Diagnosa Masalah Dispenser */}
        <ProblemSection />

        {/* Mengapa Perlu Perawatan Dispenser */}
        <CareBenefitsSection />

        {/* Jenis Layanan Kami */}
        <ServicesSection />

        {/* Merek Yang Kami Tangani */}
        <BrandPartnersSection />

        {/* Alasan Memilih Kami */}
        <WhyUsSection />

        {/* Cara Kerja & Perkiraan Biaya Service */}
        <WorkflowAndPricingSection />

        {/* Hasil Kerja Kami: Sebelum & Sesudah */}
        <BeforeAfterSection />

        {/* Testimoni Pelanggan */}
        <TestimonialsSection />

        {/* Pertanyaan yang Sering Ditanyakan (FAQ) */}
        <FaqSection />

        {/* Bottom CTA Banner */}
        <BottomCtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />
    </div>
  );
}
