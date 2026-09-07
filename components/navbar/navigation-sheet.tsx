"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { SITE } from "@/lib/site";
import { buildWaUrl, useLocale, useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const NavigationSheet = () => {
  const t = useT();
  const { locale, setLocale } = useLocale();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-center gap-2">
            <Logo />
            <SheetTitle className="text-left">{SITE.name}</SheetTitle>
          </div>
          <SheetDescription className="text-left">
            {t.footer.tagline}
          </SheetDescription>
        </SheetHeader>

        <NavMenu orientation="vertical" className="mt-12" />

        <div className="mt-8 space-y-4">
          <div className="flex items-center rounded-full border p-0.5 text-xs font-medium w-fit">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={cn(
                "px-3 py-1.5 rounded-full transition-colors",
                locale === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              )}
            >
              {t.lang.en}
            </button>
            <button
              type="button"
              onClick={() => setLocale("id")}
              className={cn(
                "px-3 py-1.5 rounded-full transition-colors",
                locale === "id"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              )}
            >
              {t.lang.id}
            </button>
          </div>

          <Button asChild className="w-full bg-primary hover:bg-primary/90">
            <Link
              href={buildWaUrl("demo", locale)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.nav.requestDemo}
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
