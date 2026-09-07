import Image from "next/image";
import { SITE } from "@/lib/site";

export const Logo = () => (
  <Image
    src="/logo.png"
    alt={`${SITE.name} logo`}
    width={40}
    height={40}
    className="rounded-md"
    priority
  />
);
