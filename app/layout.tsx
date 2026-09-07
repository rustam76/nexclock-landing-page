import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KostMu - Aplikasi Manajemen Kost Modern & Otomatis",
  description:
    "KostMu adalah SaaS untuk pemilik kost yang memudahkan pengelolaan penyewa, laporan keuangan, reminder pembayaran, dan manajemen kamar. Tingkatkan efisiensi dan keuntungan bisnis kost Anda.",
  keywords: [
    "manajemen kost",
    "aplikasi kost",
    "software kost",
    "SaaS manajemen kost",
    "laporan kost otomatis",
    "pengingat pembayaran kost",
    "aplikasi pemilik kost",
    "kelola kost online",
    "software manajemen properti",
    "kost digital",
  ],
  openGraph: {
    type: "website",
    siteName: "KostMu",
    locale: "id_ID",
    url: "https://kostmu.id",
    title: "KostMu - Aplikasi Manajemen Kost Modern & Otomatis",
    description:
      "Kelola bisnis kost Anda dengan mudah menggunakan KostMu. SaaS untuk pemilik kost dengan fitur laporan otomatis, reminder pembayaran, dan manajemen penyewa.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KostMu SaaS Preview",
      },
    ],
  },
  authors: [
    {
      name: "KostMu Team",
      url: "https://kostmu.id",
    },
  ],
  creator: "KostMu Team",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    { rel: "icon", type: "image/png", url: "/favicon-32x32.png", sizes: "32x32" },
    { rel: "icon", type: "image/png", url: "/favicon-16x16.png", sizes: "16x16" },
    { rel: "icon", type: "image/png", url: "/android-chrome-192x192.png", sizes: "192x192" },
    { rel: "icon", type: "image/png", url: "/android-chrome-512x512.png", sizes: "512x512" },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
