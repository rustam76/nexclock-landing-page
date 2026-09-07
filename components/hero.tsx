"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  const headingText = "Kelola Kost Lebih Mudah dengan Kostmu";

  // Variants untuk container heading
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.7 },
    },
  };

  // Variants untuk animasi tiap kata
  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-[calc(100vh-6rem)] flex flex-col items-center py-20 px-6 bg-background text-foreground"
    >
      <div className="md:mt-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center max-w-2xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Badge className="bg-green-500 text-white rounded-full py-1 px-4 border-none shadow-md">
              ✨ Versi Beta telah hadir! 🚀
            </Badge>
          </motion.div>

          {/* Heading dengan animasi per kata */}
          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2] tracking-tight flex flex-wrap justify-center"
          >
            {headingText.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={wordAnimation}
                className={`mr-2 ${
                  word === "Kostmu"
                    ? "text-green-500"
                    : word === "Kost"
                    ? "text-primary"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-6 max-w-[60ch] xs:text-lg text-muted-foreground"
          >
            Solusi manajemen kost berbasis cloud yang memudahkan pencatatan
            penyewa, pembayaran, hingga laporan keuangan—semua dalam satu
            platform yang simpel, aman, dan terintegrasi.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4"
          >
            <Link
              href="https://wa.me/6285242850576?text=Halo%20saya%20tertarik%20dengan%20KostMu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full text-base bg-green-500 hover:bg-green-600 text-white shadow-lg focus:ring-4 focus:ring-green-300"
                >
                  Mulai Gratis <ArrowUpRight className="h-5 w-5 ml-2" />
                </Button>
              </motion.div>
            </Link>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full text-base shadow-none hover:bg-muted"
              >
                <CirclePlay className="h-5 w-5 mr-2" />
                Lihat Demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
