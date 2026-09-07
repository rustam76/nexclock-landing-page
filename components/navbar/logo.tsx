import { SITE } from "@/lib/site";

export const Logo = () => (
  // Use a plain img so the landing build does not depend on sharp image optimization.
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/logo.png"
    alt={`${SITE.name} logo`}
    width={40}
    height={40}
    className="rounded-md"
  />
);
