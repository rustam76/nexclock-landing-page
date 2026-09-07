"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import React, { useState } from "react";
import { useT } from "@/lib/i18n";

export const NavMenu = (props: NavigationMenuProps) => {
  const t = useT();
  const [activeLink, setActiveLink] = useState<string>("");

  const links = [
    { href: "/#features", label: t.nav.features },
    { href: "/#faq", label: t.nav.faq },
    { href: "/support", label: t.nav.support },
  ];

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        {links.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink asChild>
              <Link
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`pb-1 transition-all duration-200 ${
                  activeLink === link.href
                    ? "border-b-2 border-primary text-primary"
                    : "border-b-2 border-transparent hover:border-primary/40"
                }`}
              >
                {link.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
