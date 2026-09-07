"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { Logo } from "./navbar/logo";
import { SITE } from "@/lib/site";
import { buildWaUrl, useLocale, useT } from "@/lib/i18n";

const Footer = () => {
  const t = useT();
  const { locale } = useLocale();

  const footerLinks = [
    { title: t.footer.features, href: "/#features" },
    { title: t.footer.faq, href: "/#faq" },
    {
      title: t.footer.requestDemo,
      href: buildWaUrl("demo", locale),
      external: true,
    },
    { title: t.footer.support, href: "/support" },
    { title: t.footer.privacy, href: "/privacy" },
    { title: t.footer.terms, href: "/terms" },
  ];

  return (
    <footer className="dark:border-t mt-40 dark bg-background text-foreground">
      <div className="max-w-(--breakpoint-xl) mx-auto">
        <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
          <div className="flex flex-col items-start">
            <div className="flex justify-center items-center">
              <Logo />
              <h1 className="px-2 text-lg font-bold text-primary dark:text-white">
                {SITE.name}
              </h1>
            </div>
            <p className="mt-6 text-muted-foreground max-w-md">
              {t.footer.tagline}
            </p>

            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href, external }) => (
                <li key={title}>
                  <Link
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-xs w-full">
            <h6 className="font-semibold">{t.footer.contactSales}</h6>
            <p className="mt-3 text-sm text-muted-foreground">
              {t.footer.contactSalesHint}
            </p>
            <Button asChild className="mt-6 bg-primary hover:bg-primary/90">
              <Link
                href={buildWaUrl("sales", locale)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.footer.contactSales}
              </Link>
            </Button>
          </div>
        </div>
        <Separator />
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          <span className="text-muted-foreground text-center sm:text-start">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/">{SITE.name}</Link>. {t.footer.copyright}
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link href="#" aria-label="Twitter">
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
