"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { CircleCheck, CircleHelp } from "lucide-react";
import Link from "next/link"; // ✅ Import next/link
import { useState } from "react";

const tooltipContent = {
  rooms: "Jumlah maksimal kamar yang bisa Anda kelola dalam paket ini.",
  reminder: "Fitur pengingat otomatis untuk penyewa yang mendekati jatuh tempo pembayaran.",
  laporan: "Laporan keuangan otomatis yang dapat diekspor dalam berbagai format.",
};

const YEARLY_DISCOUNT = 20;
const plans = [
  {
    name: "Free",
    price: 0,
    description:
      "Gratis 1 bulan untuk mencoba semua fitur dasar Kostmu, cocok untuk kost kecil.",
    features: [
      { title: "Kelola hingga 1 kamar", tooltip: tooltipContent.rooms },
      { title: "Pencatatan penyewa & pembayaran" },
      { title: "Laporan keuangan dasar", tooltip: tooltipContent.laporan },
      { title: "Pengingat pembayaran otomatis", tooltip: tooltipContent.reminder },
      { title: "Masa aktif 1 bulan" },
    ],
    buttonText: "Coba Gratis 1 Bulan",
  },
  {
    name: "Basic",
    price: 50000,
    description:
      "Kelola hingga 50 kamar dengan fitur lengkap untuk memudahkan manajemen kost Anda.",
    features: [
      { title: "Kelola hingga 50 kamar", tooltip: tooltipContent.rooms },
      { title: "Pencatatan penyewa & pembayaran otomatis" },
      { title: "Laporan keuangan lengkap", tooltip: tooltipContent.laporan },
      { title: "Pengingat pembayaran otomatis", tooltip: tooltipContent.reminder },
      { title: "Analisis bisnis & grafik pendapatan" },
    ],
    buttonText: "Pilih Paket Basic",
    isPopular: true,
  },
  {
    name: "Pro",
    price: 150000,
    description:
      "Paket premium dengan kapasitas unlimited kamar dan dukungan prioritas.",
    features: [
      { title: "Unlimited kamar" },
      { title: "Pencatatan dan otomatisasi pembayaran penuh" },
      { title: "Laporan keuangan mendetail", tooltip: tooltipContent.laporan },
      { title: "Pengingat pembayaran otomatis & multi-notifikasi" },
      { title: "Analisis bisnis lanjutan" },
      { title: "Dukungan prioritas 24/7" },
    ],
    buttonText: "Pilih Paket Pro",
  },
];

const formatRupiah = (value: number) => {
  if (value === 0) return "Gratis";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};

const Pricing = () => {
  const [selectedBillingPeriod, setSelectedBillingPeriod] = useState("monthly");

  return (
    <div
      id="pricing"
      className="flex flex-col items-center justify-center py-12 xs:py-20 px-6"
    >
      <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold text-center tracking-tight">
        Pilih Paket Kostmu
      </h1>
      <Tabs
        value={selectedBillingPeriod}
        onValueChange={setSelectedBillingPeriod}
        className="mt-8"
      >
        <TabsList className="h-11 px-1.5 rounded-full bg-primary/5">
          <TabsTrigger value="monthly" className="py-1.5 rounded-full">
            Bulanan
          </TabsTrigger>
          <TabsTrigger value="yearly" className="py-1.5 rounded-full">
            Tahunan (Hemat {YEARLY_DISCOUNT}%)
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="mt-12 max-w-(--breakpoint-lg) mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
        {plans.map((plan) => {
          const price =
            selectedBillingPeriod === "monthly"
              ? plan.price
              : plan.price * ((100 - YEARLY_DISCOUNT) / 100);

          const waMessage = encodeURIComponent(
            `Halo saya tertarik dengan KostMu paket ${plan.name}`
          );

          return (
            <div
              key={plan.name}
              className={cn("relative border rounded-xl p-6 bg-background/50", {
                "border-[2px] border-primary bg-background py-10":
                  plan.isPopular,
              })}
            >
              {plan.isPopular && (
                <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                  Paling Populer
                </Badge>
              )}
              <h3 className="text-lg font-medium">{plan.name}</h3>
              <p className="mt-2 text-4xl font-bold">
                {formatRupiah(price)}
                {plan.price > 0 && (
                  <span className="ml-1.5 text-sm text-muted-foreground font-normal">
                    /bulan
                  </span>
                )}
              </p>
              <p className="mt-4 font-medium text-muted-foreground">
                {plan.description}
              </p>

              <Link
                href={`https://wa.me/6285242850576?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={plan.isPopular ? "default" : "outline"}
                  size="lg"
                  className="w-full mt-6 text-base"
                >
                  {plan.buttonText}
                </Button>
              </Link>
              <Separator className="my-8" />
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-1.5">
                    <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
                    {feature.title}
                    {feature.tooltip && (
                      <Tooltip>
                        <TooltipTrigger className="cursor-help">
                          <CircleHelp className="h-4 w-4 mt-1 text-gray-500" />
                        </TooltipTrigger>
                        <TooltipContent>{feature.tooltip}</TooltipContent>
                      </Tooltip>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
