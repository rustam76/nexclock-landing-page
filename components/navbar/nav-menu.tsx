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

export const NavMenu = (props: NavigationMenuProps) => {
  const [activeLink, setActiveLink] = useState<string>(""); // tidak aktif di awal

  const links = [
    { href: "#features", label: "Fitur" },
    { href: "#pricing", label: "Harga" },
    { href: "#faq", label: "Pertanyaan" },
    { href: "#testimonials", label: "Testimoni" },
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
                    ? "border-b-2 border-green-500 text-green-600"
                    : "border-b-2 border-transparent hover:border-green-300"
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
