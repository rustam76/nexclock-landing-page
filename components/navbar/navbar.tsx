"use client";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Navbar = () => {

   const [scrolled, setScrolled] = useState(false);
  const waMessage = encodeURIComponent("Halo, saya ingin mencoba KostMu gratis.");

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
          <h1 className="px-2 text-lg font-bold text-green-500 dark:text-white">
            KOSTMU
          </h1>
        </Link>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* <Button variant="outline" className="hidden sm:inline-flex">
            Sign In
          </Button> */}
          <Link
            href={`https://wa.me/6285242850576?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="hidden xs:inline-flex">Mulai Gratis</Button>
          </Link>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
