import {
  Users,
  CreditCard,
  FileText,
  BellRing,
  ChartPie,
  MessageCircle,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Users,
    title: "Manajemen Penyewa",
    description:
      "Kelola data penyewa secara lengkap, mulai dari identitas, durasi sewa, hingga status kamar dengan mudah.",
  },
  {
    icon: CreditCard,
    title: "Pembayaran Otomatis",
    description:
      "Catat dan pantau pembayaran secara real-time, dengan dukungan berbagai metode pembayaran digital.",
  },
  {
    icon: FileText,
    title: "Laporan Keuangan",
    description:
      "Dapatkan laporan pemasukan dan pengeluaran secara otomatis untuk memudahkan analisis bisnis kost Anda.",
  },
  {
    icon: BellRing,
    title: "Reminder Pembayaran",
    description:
      "Kirim pengingat otomatis kepada penyewa sebelum jatuh tempo untuk mengurangi keterlambatan pembayaran.",
  },
  {
    icon: ChartPie,
    title: "Analisis Bisnis",
    description:
      "Lihat performa kost melalui grafik dan statistik yang membantu Anda mengambil keputusan lebih baik.",
  },
  {
    icon: MessageCircle,
    title: "Komunikasi Mudah",
    description:
      "Chat atau kirim pengumuman ke penyewa langsung dari platform tanpa aplikasi tambahan.",
  },
];

const Features = () => {
  return (
    <div id="features" className="w-full py-12 xs:py-20 px-6">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
        Kelola Kost Lebih Mudah dan Efisien
      </h2>
      <div className="w-full max-w-(--breakpoint-lg) mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col bg-background border rounded-xl py-6 px-5"
          >
            <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
              <feature.icon className="h-6 w-6" />
            </div>
            <span className="text-lg font-semibold">{feature.title}</span>
            <p className="mt-1 text-foreground/80 text-[15px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
