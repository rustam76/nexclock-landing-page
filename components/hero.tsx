"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { buildWaUrl, useLocale, useT } from "@/lib/i18n";

const Hero = () => {
  const t = useT();
  const { locale } = useLocale();
  const headingText = t.hero.headline;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.7 },
    },
  };

  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Badge className="bg-primary text-primary-foreground rounded-full py-1 px-4 border-none shadow-md">
              {t.hero.badge}
            </Badge>
          </motion.div>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-[22ch] mx-auto text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2] tracking-tight flex flex-wrap justify-center"
          >
            {headingText.split(" ").map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                variants={wordAnimation}
                className={`mr-2 ${
                  word === "Workforce" ||
                  word === "Attendance" ||
                  word === "Tenaga" ||
                  word === "Kehadiran"
                    ? "text-primary"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-6 max-w-[60ch] mx-auto xs:text-lg text-muted-foreground"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4"
          >
            <Link
              href={buildWaUrl("demo", locale)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                >
                  {t.hero.requestDemo} <ArrowUpRight className="h-5 w-5 ml-2" />
                </Button>
              </motion.div>
            </Link>

            <Link
              href={buildWaUrl("sales", locale)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-full text-base shadow-none hover:bg-muted"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  {t.hero.contactSales}
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
