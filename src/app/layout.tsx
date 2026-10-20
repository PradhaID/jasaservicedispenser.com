import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0c2340",
};

export const metadata: Metadata = {
  title: "Jasa Service & Perbaikan Dispenser Galon & RO | DispenserFix",
  description:
    "Jasa service dan perbaikan dispenser panggilan (galon & RO) untuk rumah, kantor, dan usaha. Teknisi berpengalaman, respon cepat, biaya transparan & bergaransi.",
  keywords: [
    "service dispenser",
    "jasa service dispenser",
    "perbaikan dispenser",
    "service dispenser panggilan",
    "service dispenser galon",
    "service dispenser RO",
    "jasaservicedispenser.com",
    "DispenserFix",
  ],
  authors: [{ name: "DispenserFix" }],
  openGraph: {
    title: "Jasa Service & Perbaikan Dispenser Galon & RO | DispenserFix",
    description:
      "Jasa service dan perbaikan dispenser panggilan terpercaya. Teknisi berpengalaman, biaya transparan, cepat, dan bergaransi.",
    url: "https://jasaservicedispenser.com",
    siteName: "DispenserFix - Service & Perbaikan Dispenser",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${jakarta.variable} font-sans scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
