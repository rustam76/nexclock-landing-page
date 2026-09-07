"use client";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { buildWaUrl, useLocale, useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const t = useT();
  const { locale, setLocale } = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-10 top-6 inset-x-4 h-14 xs:h-16 transition-all duration-300
      ${scrolled ? "bg-background/70 backdrop-blur-xs border dark:border-slate-700/70" : "bg-transparent border-transparent"}
      max-w-(--breakpoint-xl) mx-auto rounded-full`}
    >
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Link href="/" className="flex justify-center items-center">
          <Logo />
          <h1 className="px-2 text-lg font-bold text-primary dark:text-white">
            {SITE.name}
          </h1>
        </Link>

        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center rounded-full border p-0.5 text-xs font-medium">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={cn(
                "px-2 py-1 rounded-full transition-colors",
                locale === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t.lang.en}
            </button>
            <button
              type="button"
              onClick={() => setLocale("id")}
              className={cn(
                "px-2 py-1 rounded-full transition-colors",
                locale === "id"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t.lang.id}
            </button>
          </div>

          <ThemeToggle />

          <Link
            href={buildWaUrl("demo", locale)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="hidden xs:inline-flex bg-primary hover:bg-primary/90">
              {t.nav.requestDemo}
            </Button>
          </Link>

          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
