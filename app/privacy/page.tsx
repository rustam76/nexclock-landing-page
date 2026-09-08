"use client";

import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { useT } from "@/lib/i18n";

export default function PrivacyPage() {
  const t = useT();

  return (
    <>
      <Navbar />
      <main className="pt-24 xs:pt-28 sm:pt-32 px-6 pb-20">
        <article className="max-w-(--breakpoint-md) mx-auto space-y-8">
          <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">
            {t.privacyPage.title}
          </h1>
          <p className="text-muted-foreground text-base xs:text-lg">
            {t.privacyPage.intro}
          </p>
          {t.privacyPage.sections.map((section) => (
            <section
              key={section.heading}
              id={section.heading
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "")}
              className="space-y-3"
            >
              <h2 className="text-xl xs:text-2xl font-semibold tracking-tight">
                {section.heading}
              </h2>
              <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                {section.body}
              </p>
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </>
  );
}
