# NexClock Landing Rebrand Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebrand the existing Kostmu Next.js landing page into the official NexClock website via content/branding swap only — preserve layout, components, motion, and structure.

**Architecture:** Keep the current Next.js App Router single-page marketing layout. Add a lightweight EN/ID locale context + dictionary (no i18n framework). Remove Pricing and Testimonials from the home render. Add `/support`, `/privacy`, and `/terms` pages reusing Navbar/Footer. All CTAs open WhatsApp (`6285242850576`) with intent-specific prefilled messages.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS 4, next-themes, lucide-react, motion (fix hero import if needed), no new heavy dependencies.

## Global Constraints

- Approach A only: content/branding transformation — no redesign, no new marketing section types beyond Support/Privacy/Terms pages
- Never mention Kostmu or Rajagadai in user-facing UI, metadata, alt text, or manifest
- No Sign Up / Register / Create Account / Start Free Trial CTAs
- No fake testimonials, logos, statistics, or unverified compliance claims
- Brand colors: primary `#702D91`, accent `#9DC441`
- Logo: NexClock mark from `playstore-icon.png`
- WhatsApp: `6285242850576` only; no demo form backend
- i18n: EN default + ID toggle via `localStorage`
- Facial/biometric privacy details unknown → use exact placeholders from the design spec
- Prefer existing patterns; leave `components/pricing.tsx` and `components/testimonials.tsx` unrendered (optional delete later)
- Git: repository may have no `.git` — skip commit steps if git is unavailable; do not `git init` unless the user asks
- Spec source of truth: `docs/superpowers/specs/2026-09-07-nexclock-rebrand-design.md`

---

## File Structure

| File | Responsibility |
| --- | --- |
| `lib/site.ts` | Site constants: WhatsApp number, brand name, URL placeholder |
| `lib/i18n/dictionaries.ts` | All EN/ID copy strings |
| `lib/i18n/locale-context.tsx` | Locale provider, `useLocale`, `useT`, `waLink` helper |
| `components/navbar/logo.tsx` | NexClock logo image |
| `components/navbar/*` | Nav links, lang toggle, Request Demo CTA |
| `components/hero.tsx` | Hero copy + CTAs |
| `components/features.tsx` | Six NexClock feature cards |
| `components/faq.tsx` | Six NexClock FAQ items |
| `components/cta-banner.tsx` | Bottom CTA banner |
| `components/footer.tsx` | Footer branding + links + Contact Sales |
| `app/page.tsx` | Home composition without Pricing/Testimonials |
| `app/layout.tsx` | Metadata, LocaleProvider wrap, lang |
| `app/globals.css` | Brand CSS variables / token mapping |
| `app/support/page.tsx` | Support page |
| `app/privacy/page.tsx` | Privacy + facial/biometric section |
| `app/terms/page.tsx` | Terms of Service |
| `public/logo.png` (+ icons/manifest) | Brand assets |
| `package.json` | Rename package from `landing-kostmu` |

---

### Task 1: Brand assets, site constants, CSS tokens

**Files:**
- Create: `lib/site.ts`
- Create: `public/logo.png` (copy from `playstore-icon.png`)
- Modify: `app/globals.css`
- Modify: `package.json`
- Modify: `public/site.webmanifest`

**Interfaces:**
- Consumes: none
- Produces: `SITE` constant exported from `lib/site.ts`

- [ ] **Step 1: Copy logo into public**

```bash
cp playstore-icon.png public/logo.png
cp playstore-icon.png public/android-chrome-192x192.png
cp playstore-icon.png public/android-chrome-512x512.png
cp playstore-icon.png public/apple-touch-icon.png
cp playstore-icon.png public/favicon-32x32.png
cp playstore-icon.png public/favicon-16x16.png
```

Also copy to `public/favicon.ico` if a dedicated ico is absent (PNG fallback is acceptable for Next metadata icons list).

- [ ] **Step 2: Create `lib/site.ts`**

```ts
export const SITE = {
  name: "NexClock",
  tagline: "Workforce & Attendance Management",
  // Replace before public launch:
  // [NEXCLOCK_SITE_URL]
  url: "https://nexclock.app",
  whatsappNumber: "6285242850576",
  brandPrimary: "#702D91",
  brandAccent: "#9DC441",
} as const;

export type WaIntent = "demo" | "sales" | "support";
```

- [ ] **Step 3: Update `public/site.webmanifest`**

```json
{
  "name": "NexClock",
  "short_name": "NexClock",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#702D91",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

- [ ] **Step 4: Map brand colors in `app/globals.css`**

In `:root`, set:

```css
--primary: hsl(282 52% 37%); /* #702D91 */
--primary-foreground: hsl(0 0% 100%);
--ring: hsl(282 52% 37%);
--brand-accent: #9dc441;
```

In `.dark`, keep readable contrast — use a lighter purple for primary foreground surfaces:

```css
--primary: hsl(282 55% 72%);
--primary-foreground: hsl(282 52% 12%);
--ring: hsl(282 55% 72%);
--brand-accent: #9dc441;
```

Expose accent in `@theme inline`:

```css
--color-brand-accent: var(--brand-accent);
```

- [ ] **Step 5: Rename package**

In `package.json`, set `"name": "nexclock-landing-page"`.

- [ ] **Step 6: Verify assets exist**

```bash
ls public/logo.png public/site.webmanifest lib/site.ts
```

Expected: all three paths exist.

- [ ] **Step 7: Commit (if git available)**

```bash
git add lib/site.ts public/logo.png public/*.png public/site.webmanifest app/globals.css package.json
git commit -m "$(cat <<'EOF'
chore: add NexClock brand assets and color tokens

EOF
)"
```

---

### Task 2: i18n dictionary + LocaleProvider

**Files:**
- Create: `lib/i18n/dictionaries.ts`
- Create: `lib/i18n/locale-context.tsx`
- Create: `lib/i18n/index.ts`
- Modify: `app/layout.tsx` (wrap provider only; metadata can wait for Task 9)

**Interfaces:**
- Consumes: `SITE`, `WaIntent` from `lib/site.ts`
- Produces:
  - `type Locale = "en" | "id"`
  - `dictionaries: Record<Locale, Dictionary>`
  - `LocaleProvider({ children })`
  - `useLocale(): { locale, setLocale }`
  - `useT(): Dictionary`
  - `buildWaUrl(intent: WaIntent, locale: Locale): string`

- [ ] **Step 1: Create dictionary with full EN/ID strings**

Create `lib/i18n/dictionaries.ts` containing at least these keys (complete both `en` and `id`):

```ts
export type Locale = "en" | "id";

export type Dictionary = {
  nav: {
    features: string;
    faq: string;
    support: string;
    requestDemo: string;
  };
  hero: {
    badge: string;
    headline: string;
    description: string;
    requestDemo: string;
    contactSales: string;
  };
  features: {
    title: string;
    items: Array<{ title: string; description: string }>; // length 6
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{ question: string; answer: string }>; // length 6
  };
  cta: {
    title: string;
    description: string;
    requestDemo: string;
    contactSales: string;
  };
  footer: {
    tagline: string;
    features: string;
    faq: string;
    requestDemo: string;
    support: string;
    privacy: string;
    terms: string;
    contactSales: string;
    contactSalesHint: string;
    copyright: string;
  };
  supportPage: {
    title: string;
    body: string;
    contactSupport: string;
  };
  privacyPage: {
    title: string;
    // long markdown-like sections rendered as JSX in the page; keep structured blocks
    intro: string;
    sections: Array<{ heading: string; body: string }>;
  };
  termsPage: {
    title: string;
    sections: Array<{ heading: string; body: string }>;
  };
  wa: {
    demo: string;
    sales: string;
    support: string;
  };
  lang: {
    en: string;
    id: string;
  };
};
```

**EN content requirements (verbatim where specified by spec):**

- `hero.headline`: `Smarter Workforce & Attendance Management`
- `hero.description`: `NexClock helps businesses and organizations manage employee attendance, schedules, and workforce operations from one simple platform.`
- `hero.badge`: `Workforce & Attendance Management`
- Feature titles: Employee Attendance, Face Verification, Location-Based Attendance, Work Schedules, Shift Management, Employee Management (with factual short descriptions)
- `cta.title`: `Ready to simplify workforce management?`
- `cta.description`: `See how NexClock can help your organization manage employee attendance and workforce operations.`
- FAQ must cover: what NexClock is; who it is for (businesses/orgs); how to start (demo/sales, not self-serve signup); face verification high-level; support contact; privacy policy link mention
- Include natural positioning: independent product for many organizations
- `wa.demo` EN example: `Hello, I am interested in a NexClock product demonstration.`
- `wa.sales` EN example: `Hello, I am interested in NexClock for my organization.`
- `wa.support` EN example: `Hello, I need help with NexClock.`

Provide complete Indonesian translations for every key (formal, clear Bahasa Indonesia).

Privacy facial section bodies in EN must include these exact placeholder tokens somewhere in the facial/biometric section text:

- `[ACTUAL FACIAL DATA PROCESSING METHOD]`
- `[ACTUAL STORAGE LOCATION]`
- `[ACTUAL RETENTION PERIOD]`
- `[ACTUAL THIRD-PARTY PROCESSOR, IF ANY]`

And must address: what is collected, how collected, purpose, raw image storage, templates/embeddings, how/where stored, third-party sharing, third-party FR service, retention, deletion.

- [ ] **Step 2: Create locale context**

```tsx
"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { SITE, type WaIntent } from "@/lib/site";
import { dictionaries, type Dictionary, type Locale } from "./dictionaries";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);
const STORAGE_KEY = "nexclock-locale";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved === "en" || saved === "id") setLocaleState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function useT() {
  return useLocale().t;
}

export function buildWaUrl(intent: WaIntent, locale: Locale) {
  const message = dictionaries[locale].wa[intent];
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
```

- [ ] **Step 3: Barrel export `lib/i18n/index.ts`**

```ts
export * from "./dictionaries";
export * from "./locale-context";
```

- [ ] **Step 4: Wrap provider in `app/layout.tsx`**

Inside `ThemeProvider`, wrap children with `LocaleProvider` (client boundary already satisfied by next-themes pattern — LocaleProvider is `"use client"`).

Keep existing structure:

```tsx
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  <LocaleProvider>
    <TooltipProvider>{children}</TooltipProvider>
  </LocaleProvider>
</ThemeProvider>
```

Change `html` default `lang` from `id` to `en`.

- [ ] **Step 5: Typecheck dictionary shape**

```bash
npx tsc --noEmit
```

Expected: no type errors related to `lib/i18n/*` (other pre-existing errors should be noted, not ignored if introduced by this task).

- [ ] **Step 6: Commit (if git available)**

```bash
git add lib/i18n app/layout.tsx
git commit -m "$(cat <<'EOF'
feat: add EN/ID locale dictionary and provider

EOF
)"
```

---

### Task 3: Logo + Navbar + mobile sheet

**Files:**
- Modify: `components/navbar/logo.tsx`
- Modify: `components/navbar/nav-menu.tsx`
- Modify: `components/navbar/navbar.tsx`
- Modify: `components/navbar/navigation-sheet.tsx`

**Interfaces:**
- Consumes: `useLocale`, `useT`, `buildWaUrl`, `SITE`
- Produces: updated navbar UX with lang toggle and Request Demo CTA

- [ ] **Step 1: Replace logo component**

```tsx
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
```

If Next Image requires `images` config for local public assets, default Next 15 allows `/logo.png` without remote patterns.

- [ ] **Step 2: Update `nav-menu.tsx` links**

Use `useT()` and links:

```ts
const { t } = useLocale(); // or useT + useLocale
const links = [
  { href: "/#features", label: t.nav.features },
  { href: "/#faq", label: t.nav.faq },
  { href: "/support", label: t.nav.support },
];
```

Active underline color: use `border-[#702D91]` / `text-[#702D91]` (or `border-primary text-primary`) instead of green.

Make `NavMenu` a client component that reads translations (already `"use client"`).

- [ ] **Step 3: Update `navbar.tsx`**

- Brand text: `SITE.name` / `NexClock` with `text-[#702D91]` (dark: keep readable white or primary)
- Replace WA “Mulai Gratis” with Request Demo using `buildWaUrl("demo", locale)`
- Add compact language toggle buttons `EN` / `ID` calling `setLocale`
- Keep scrolled floating navbar shell unchanged

- [ ] **Step 4: Update `navigation-sheet.tsx`**

- Show brand name next to logo if useful
- Mobile CTA: Request Demo → same WA URL
- Remove “Get Started” / any signup wording
- Ensure `NavMenu` vertical orientation still works

- [ ] **Step 5: Manual verify**

```bash
npm run dev
```

Open `/` — confirm navbar shows NexClock logo/name, 3 links, EN/ID toggle, Request Demo opens WhatsApp.

- [ ] **Step 6: Commit (if git available)**

```bash
git add components/navbar
git commit -m "$(cat <<'EOF'
feat: rebrand navbar with NexClock logo and locale toggle

EOF
)"
```

---

### Task 4: Hero

**Files:**
- Modify: `components/hero.tsx`

**Interfaces:**
- Consumes: `useT`, `useLocale`, `buildWaUrl`
- Produces: NexClock hero with Request Demo + Contact Sales

- [ ] **Step 1: Rewrite hero content wiring**

Keep motion structure (container, wordAnimation, badge, two CTAs). Changes:

- `headingText = t.hero.headline`
- Accent word coloring: highlight `NexClock` if present; otherwise highlight `Workforce` / key words using brand purple — do **not** look for `Kostmu`/`Kost`
- Badge: `t.hero.badge` with `bg-[#702D91]` or accent styling (no emoji spam required; keep simple)
- Description: `t.hero.description`
- Primary button → `buildWaUrl("demo", locale)` label `t.hero.requestDemo`
- Secondary button → `buildWaUrl("sales", locale)` label `t.hero.contactSales` (make it a Link like primary)
- Replace green button classes with brand purple (`bg-[#702D91] hover:bg-[#5a2474]`)
- Fix motion import if build fails: change `from "framer-motion"` to `from "motion/react"` (package.json lists `motion`)

- [ ] **Step 2: Verify no Kostmu strings in hero**

```bash
rg -n -i 'kostmu|kost|rajagadai|mulai gratis|sign up' components/hero.tsx
```

Expected: no matches.

- [ ] **Step 3: Commit (if git available)**

```bash
git add components/hero.tsx
git commit -m "$(cat <<'EOF'
feat: rebrand hero for NexClock messaging and WA CTAs

EOF
)"
```

---

### Task 5: Features

**Files:**
- Modify: `components/features.tsx`

**Interfaces:**
- Consumes: `useT`
- Produces: six NexClock feature cards

- [ ] **Step 1: Convert to client component using dictionary**

```tsx
"use client";

import {
  Users,
  ScanFace,
  MapPin,
  CalendarClock,
  Clock3,
  IdCard,
} from "lucide-react";
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
```

Ensure `t.features.items.length === 6` in the dictionary.

- [ ] **Step 2: Verify**

```bash
rg -n -i 'penyewa|kost|pembayaran|kamar' components/features.tsx
```

Expected: no matches.

- [ ] **Step 3: Commit (if git available)**

```bash
git add components/features.tsx
git commit -m "$(cat <<'EOF'
feat: replace feature cards with NexClock workforce capabilities

EOF
)"
```

---

### Task 6: FAQ

**Files:**
- Modify: `components/faq.tsx`

**Interfaces:**
- Consumes: `useT`
- Produces: six NexClock FAQ items in existing grid layout

- [ ] **Step 1: Wire FAQ to dictionary**

Keep the outline grid layout. Map icons (reuse lucide set) to the 6 FAQ items. Use `t.faq.title`, `t.faq.subtitle`, `t.faq.items`.

Make component `"use client"`.

Ensure answers mention demo/sales onboarding (not free trial) and that NexClock is for multiple organizations.

- [ ] **Step 2: Verify**

```bash
rg -n -i 'kostmu|trial|gratis|penyewa|whatsapp reminder' components/faq.tsx
```

Expected: no matches (WhatsApp as support channel in answer text is OK if it does not claim Kostmu payment reminders).

- [ ] **Step 3: Commit (if git available)**

```bash
git add components/faq.tsx
git commit -m "$(cat <<'EOF'
feat: rewrite FAQ for NexClock product positioning

EOF
)"
```

---

### Task 7: CTA Banner

**Files:**
- Modify: `components/cta-banner.tsx`

**Interfaces:**
- Consumes: `useT`, `useLocale`, `buildWaUrl`
- Produces: NexClock CTA banner with demo + sales WA links

- [ ] **Step 1: Rewrite CTA copy and buttons**

Keep `AnimatedGridPattern` shell. Convert to client component.

- Title/description from `t.cta`
- Primary Link → `buildWaUrl("demo", locale)`
- Secondary Link → `buildWaUrl("sales", locale)` (replace non-linked outline button)
- No “Coba Gratis” / “Lihat Fitur” Kostmu wording

- [ ] **Step 2: Commit (if git available)**

```bash
git add components/cta-banner.tsx
git commit -m "$(cat <<'EOF'
feat: update CTA banner to NexClock demo and sales actions

EOF
)"
```

---

### Task 8: Footer

**Files:**
- Modify: `components/footer.tsx`

**Interfaces:**
- Consumes: `useT`, `useLocale`, `buildWaUrl`, `SITE`, `Logo`
- Produces: NexClock footer without newsletter fake form

- [ ] **Step 1: Replace branding and links**

Convert to client component.

Links:

```ts
[
  { title: t.footer.features, href: "/#features" },
  { title: t.footer.faq, href: "/#faq" },
  { title: t.footer.requestDemo, href: buildWaUrl("demo", locale), external: true },
  { title: t.footer.support, href: "/support" },
  { title: t.footer.privacy, href: "/privacy" },
  { title: t.footer.terms, href: "/terms" },
]
```

- Brand text: `NexClock` with brand purple
- Tagline: `t.footer.tagline` (Workforce & Attendance Management / ID equivalent)
- Replace newsletter block with Contact Sales WA button using `t.footer.contactSales` + short `t.footer.contactSalesHint`
- Copyright uses `SITE.name`
- Remove unused social icon imports if links remain `#` placeholders — either keep generic icons without brand claims or remove the row; prefer keeping layout but ensuring no Kostmu references

- [ ] **Step 2: Verify**

```bash
rg -n -i 'kostmu|newsletter|langganan' components/footer.tsx
```

Expected: no Kostmu; newsletter/langganan removed.

- [ ] **Step 3: Commit (if git available)**

```bash
git add components/footer.tsx
git commit -m "$(cat <<'EOF'
feat: rebrand footer and replace newsletter with Contact Sales

EOF
)"
```

---

### Task 9: Home page composition + SEO metadata

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: updated section components; `SITE`
- Produces: home without Pricing/Testimonials; NexClock metadata

- [ ] **Step 1: Update `app/page.tsx`**

```tsx
import CTABanner from "@/components/cta-banner";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <Hero />
        <Features />
        <FAQ />
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
```

- [ ] **Step 2: Update metadata in `app/layout.tsx`**

```ts
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "NexClock — Workforce & Attendance Management",
  description:
    "NexClock helps businesses and organizations manage employee attendance, schedules, and workforce operations.",
  keywords: [
    "workforce management",
    "attendance management",
    "employee attendance",
    "face verification attendance",
    "shift management",
    "NexClock",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
    url: SITE.url,
    title: "NexClock — Workforce & Attendance Management",
    description:
      "NexClock helps businesses and organizations manage employee attendance, schedules, and workforce operations.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "NexClock",
      },
    ],
  },
  authors: [{ name: "NexClock", url: SITE.url }],
  creator: "NexClock",
  icons: [
    { rel: "icon", url: "/logo.png" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
  robots: { index: true, follow: true },
  manifest: "/site.webmanifest",
};
```

Add a short code comment above `SITE.url` usage noting replace `[NEXCLOCK_SITE_URL]` before launch if the constant is still a placeholder domain.

- [ ] **Step 3: Grep home metadata for Kostmu**

```bash
rg -n -i 'kostmu|kostmu\.id|rajagadai' app/layout.tsx app/page.tsx
```

Expected: no matches.

- [ ] **Step 4: Commit (if git available)**

```bash
git add app/page.tsx app/layout.tsx
git commit -m "$(cat <<'EOF'
feat: compose NexClock home page and update SEO metadata

EOF
)"
```

---

### Task 10: Support page

**Files:**
- Create: `app/support/page.tsx`

**Interfaces:**
- Consumes: Navbar, Footer, `useT`, `useLocale`, `buildWaUrl`
- Produces: public `/support` page for App Store Support URL

- [ ] **Step 1: Create page**

```tsx
"use client";

import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { buildWaUrl, useLocale, useT } from "@/lib/i18n";
import Link from "next/link";

export default function SupportPage() {
  const t = useT();
  const { locale } = useLocale();

  return (
    <>
      <Navbar />
      <main className="pt-24 xs:pt-28 sm:pt-32 px-6 pb-20 min-h-[70vh]">
        <div className="max-w-(--breakpoint-md) mx-auto">
          <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight">
            {t.supportPage.title}
          </h1>
          <p className="mt-6 text-muted-foreground text-base xs:text-lg leading-relaxed">
            {t.supportPage.body}
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-[#702D91] hover:bg-[#5a2474]">
              <Link
                href={buildWaUrl("support", locale)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.supportPage.contactSupport}
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
```

Dictionary EN title: `NexClock Support`. Body per design spec.

- [ ] **Step 2: Verify route**

```bash
npm run build
```

Expected: build lists `/support` route; no errors.

- [ ] **Step 3: Commit (if git available)**

```bash
git add app/support/page.tsx
git commit -m "$(cat <<'EOF'
feat: add public NexClock support page

EOF
)"
```

---

### Task 11: Privacy page (incl. facial/biometric)

**Files:**
- Create: `app/privacy/page.tsx`

**Interfaces:**
- Consumes: Navbar, Footer, `useT` privacy sections
- Produces: `/privacy` with searchable technical placeholders

- [ ] **Step 1: Create privacy page rendering `t.privacyPage.sections`**

Use a simple prose layout:

```tsx
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
            <section key={section.heading} className="space-y-3">
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
```

Ensure dictionary includes a dedicated Facial / Biometric Data section containing the four exact placeholders and covering all required bullet topics from the design spec.

- [ ] **Step 2: Verify placeholders exist**

```bash
rg -n '\[ACTUAL FACIAL DATA PROCESSING METHOD\]|\[ACTUAL STORAGE LOCATION\]|\[ACTUAL RETENTION PERIOD\]|\[ACTUAL THIRD-PARTY PROCESSOR, IF ANY\]' lib/i18n/dictionaries.ts
```

Expected: each placeholder appears at least once (EN; ID may keep the same tokens for find-replace).

- [ ] **Step 3: Commit (if git available)**

```bash
git add app/privacy/page.tsx lib/i18n/dictionaries.ts
git commit -m "$(cat <<'EOF'
feat: add NexClock privacy policy with biometric placeholders

EOF
)"
```

---

### Task 12: Terms page

**Files:**
- Create: `app/terms/page.tsx`

**Interfaces:**
- Consumes: Navbar, Footer, `useT`
- Produces: `/terms` minimal ToS

- [ ] **Step 1: Create terms page**

Mirror privacy page structure with `t.termsPage.title` and `t.termsPage.sections` covering: website use, demo/sales engagement, acceptable use, disclaimer, contact.

- [ ] **Step 2: Commit (if git available)**

```bash
git add app/terms/page.tsx
git commit -m "$(cat <<'EOF'
feat: add minimal NexClock terms of service page

EOF
)"
```

---

### Task 13: Final verification (Apple checklist)

**Files:**
- Modify only if grep/build finds leftover issues
- Optional: leave `components/pricing.tsx` / `components/testimonials.tsx` unused

**Interfaces:**
- Consumes: full app
- Produces: green build + clean brand scan

- [ ] **Step 1: Brand leak scan (user-facing sources)**

```bash
rg -n -i 'kostmu|rajagadai|kostmu\.id|support@kostmu|mulai gratis|coba gratis|pemilik kost|penyewa' app components lib public/site.webmanifest package.json
```

Expected: no matches in user-facing content. (`Jenkinsfile` may still mention old paths — out of scope unless it blocks build; do not surface those strings in the website.)

- [ ] **Step 2: Forbidden CTA scan**

```bash
rg -n -i 'sign up|create account|start free trial|register now' app components lib/i18n
```

Expected: no matches.

- [ ] **Step 3: Production build**

```bash
npm run build
```

Expected: success; routes include `/`, `/support`, `/privacy`, `/terms`.

- [ ] **Step 4: Smoke-check in browser**

- Home EN default; toggle ID updates copy
- Request Demo / Contact Sales / Support WA links open with NexClock messages
- `/support`, `/privacy`, `/terms` render with Navbar/Footer
- No Pricing or Testimonials sections on home

- [ ] **Step 5: Final commit (if git available)**

```bash
git add -A
git status
git commit -m "$(cat <<'EOF'
chore: finish NexClock rebrand verification cleanup

EOF
)"
```

Only commit if there are remaining relevant changes; do not commit secrets.

---

## Self-Review (plan vs spec)

| Spec requirement | Task |
| --- | --- |
| Minimal content swap / Approach A | Global Constraints + all tasks |
| Remove Pricing & Testimonials | Task 9 |
| EN/ID toggle default EN | Task 2 + Task 3 |
| Brand colors + logo | Task 1 + Task 3 |
| Hero/Features/FAQ/CTA copy | Tasks 4–7 |
| WA CTAs only | Tasks 3–8, 10 |
| Footer links + no Kostmu | Task 8 |
| `/support` | Task 10 |
| `/privacy` + biometric placeholders | Task 11 |
| `/terms` | Task 12 |
| SEO metadata | Task 9 |
| Apple checklist / build | Task 13 |
| No fake testimonials/stats/signup | Global Constraints + Task 13 scans |

**Note:** Benefits / How It Works dedicated sections intentionally omitted (Approach A); covered via Features + FAQ per approved design.
