"use client";

import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { buildWaUrl, useLocale, useT } from "@/lib/i18n";
import Link from "next/link";

export default function SupportPage() {
  const t = useT();
  const { locale } = useLocale();

  return (
    <>
      <Navbar />
      <main className="pt-24 xs:pt-28 sm:pt-32 px-6 pb-20 min-h-[70vh]">
        <div className="max-w-(--breakpoint-md) mx-auto">
          <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">
            {t.supportPage.title}
          </h1>
          <p className="mt-6 text-muted-foreground text-base xs:text-lg leading-relaxed">
            {t.supportPage.body}
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link
                href={buildWaUrl("support", locale)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.supportPage.contactSupport}
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
