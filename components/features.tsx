"use client";

import {
  Users,
  ScanFace,
  MapPin,
  CalendarClock,
  Clock3,
  IdCard,
} from "lucide-react";
import React from "react";
import { useT } from "@/lib/i18n";

const icons = [Users, ScanFace, MapPin, CalendarClock, Clock3, IdCard];

const Features = () => {
  const t = useT();

  return (
    <div id="features" className="w-full py-12 xs:py-20 px-6">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
        {t.features.title}
      </h2>
      <div className="w-full max-w-(--breakpoint-lg) mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.features.items.map((feature, index) => {
          const Icon = icons[index]!;
          return (
            <div
              key={feature.title}
              className="flex flex-col bg-background border rounded-xl py-6 px-5"
            >
              <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-lg font-semibold">{feature.title}</span>
              <p className="mt-1 text-foreground/80 text-[15px]">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
