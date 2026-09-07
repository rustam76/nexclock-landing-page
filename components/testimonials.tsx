import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import Link from "next/link";
import React, { ComponentProps } from "react";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    designation: "Pemilik Kost",
    company: "Kost Harmoni",
    testimonial:
      "Sejak menggunakan Kostmu, pencatatan penyewa dan pembayaran jadi lebih mudah dan rapi. Saya tidak perlu lagi mencatat manual di buku.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Siti Rahma",
    designation: "Manajer Kost",
    company: "Kost Melati",
    testimonial:
      "Fitur pengingat pembayaran via WhatsApp sangat membantu. Penyewa jadi jarang telat bayar dan laporan keuangan bisa saya akses kapan saja.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 3,
    name: "Andi Wijaya",
    designation: "Pemilik Kost",
    company: "Kost Wijaya",
    testimonial:
      "Kostmu membuat manajemen kost lebih profesional. Saya bisa mengelola puluhan kamar tanpa pusing lagi dengan catatan manual.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Nur Aini",
    designation: "Manajer Kost",
    company: "Kost Sejahtera",
    testimonial:
      "Dashboard yang mudah digunakan dan fitur laporan otomatis sangat membantu. Saya bisa memantau pendapatan bulanan dengan jelas.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Rizky Pratama",
    designation: "Pemilik Kost",
    company: "Kost Rizky",
    testimonial:
      "Investasi terbaik untuk bisnis kost saya! Kostmu sangat mempermudah pengelolaan penyewa, pembayaran, dan reminder otomatis.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Dewi Lestari",
    designation: "Pemilik Kost",
    company: "Kost Lestari",
    testimonial:
      "Tampilan aplikasi bersih dan mudah dipahami. Tim support juga responsif membantu setiap kali saya punya pertanyaan.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const Testimonials = () => (
  <div id="testimonials" className="flex justify-center items-center py-20">
    <div className="h-full w-full">
      <h2 className="mb-12 text-4xl md:text-5xl font-bold text-center tracking-tight px-6">
        Apa Kata Pengguna Kostmu
      </h2>
      <div className="relative">
        <div className="z-10 absolute left-0 inset-y-0 w-[15%] bg-linear-to-r from-background to-transparent" />
        <div className="z-10 absolute right-0 inset-y-0 w-[15%] bg-linear-to-l from-background to-transparent" />
        <Marquee pauseOnHover className="[--duration:20s]">
          <TestimonialList />
        </Marquee>
        <Marquee pauseOnHover reverse className="mt-0 [--duration:20s]">
          <TestimonialList />
        </Marquee>
      </div>
    </div>
  </div>
);

const TestimonialList = () =>
  testimonials.map((testimonial) => (
    <div
      key={testimonial.id}
      className="min-w-96 max-w-sm bg-accent rounded-xl p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.designation}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" asChild>
          <Link href="#" target="_blank">
            <TwitterLogo className="w-4 h-4" />
          </Link>
        </Button>
      </div>
      <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
    </div>
  ));

const TwitterLogo = (props: ComponentProps<"svg">) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>X</title>
    <path
      fill="currentColor"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    />
  </svg>
);

export default Testimonials;
