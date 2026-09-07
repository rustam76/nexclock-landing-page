# NexClock Landing Page Rebrand — Design Spec

**Date:** 2026-09-07  
**Project:** nexclock-landing-page (formerly Kostmu landing)  
**Approach:** A — Content swap ketat (minimal redesign)  
**Status:** Approved in brainstorming dialogue

---

## 1. Goal

Rebrand the existing Kostmu landing page into the official **NexClock** website through **content and branding transformation only**. Preserve layout, section structure, components, spacing, typography system, animation, responsive behavior, and visual hierarchy.

The site must support Apple App Review positioning:

> NexClock is an independent workforce and attendance management product designed for businesses and organizations — not an exclusive app for a single company.

Organizations interested in NexClock can **Request a Demo** or **Contact Sales**.

### Explicit non-goals

- Total redesign or new visual system
- Framework / routing / component architecture changes
- Self-registration, Sign Up, Free Trial CTAs
- Fake testimonials, customer logos, statistics, or compliance claims
- Mention of Kostmu or Rajagadai anywhere on the public site

---

## 2. Decisions locked

| Topic | Decision |
| --- | --- |
| Language | Bilingual EN + ID; **English primary**; navbar toggle; `localStorage` preference |
| Brand colors | From logo: purple `#702D91`, lime `#9DC441` |
| Logo asset | `playstore-icon.png` (NexClock NC mark) |
| Pricing section | **Remove** from home (do not render) |
| Testimonials section | **Remove** from home (do not render; no fake social proof) |
| FAQ | Keep layout; rewrite for NexClock (includes org setup / how-it-works style Qs) |
| Benefits / How It Works sections | **Do not add** new sections; cover via Features + FAQ |
| Request Demo / Contact Sales | WhatsApp deep link only (no form, no backend) |
| WhatsApp number | `6285242850576` (same as previous Kostmu number) |
| Support / Privacy / Terms | New routes `/support`, `/privacy`, `/terms` |

---

## 3. Information architecture

### Home (`/`)

Order:

1. Navbar  
2. Hero  
3. Features (6 cards)  
4. FAQ  
5. CTA Banner  
6. Footer  

**Removed from home render:** Pricing, Testimonials.

### New pages

| Route | Purpose |
| --- | --- |
| `/support` | App Store Connect Support URL; public, no login |
| `/privacy` | Privacy Policy including required Facial/Biometric section |
| `/terms` | Minimal Terms of Service so footer links are not dead |

All new pages reuse Navbar + Footer and the existing typography/spacing language.

---

## 4. Branding & visual system

### Logo

- Replace Kostmu house SVG (`components/navbar/logo.tsx`) with NexClock icon image from `playstore-icon.png` (also copy/wire into `public/` as needed for favicon and navbar).
- Navbar/footer brand text: **NexClock** (not KOSTMU).

### Colors

Update CSS tokens / hard-coded Kostmu greens (`green-500`, `#4ADE80`, etc.) to brand tokens:

- **Primary:** `#702D91` — nav active states, primary buttons, brand text accents  
- **Accent:** `#9DC441` — badges, highlights, success/check accents  
- Keep existing background, muted, border, radius, and Inter font stack  
- Dark mode remains; adjust primary/accent usage for contrast readability  

### Do not change

- Floating rounded navbar shell  
- Hero word-stagger motion  
- Feature card grid  
- FAQ outline grid  
- CTA banner + `AnimatedGridPattern`  
- Responsive breakpoints and spacing scale  

---

## 5. Copy & messaging

### Positioning lines (use naturally in hero supporting copy, FAQ, and/or footer tagline)

- NexClock is an independent workforce and attendance management product designed for businesses and organizations.  
- Organizations interested in NexClock can request a demo or contact the NexClock sales team.

### Hero (EN)

- **Badge:** Workforce & Attendance Management (neutral; not “beta / free”)  
- **Headline:** Smarter Workforce & Attendance Management  
- **Description:** NexClock helps businesses and organizations manage employee attendance, schedules, and workforce operations from one simple platform.  
- **Primary CTA:** Request a Demo  
- **Secondary CTA:** Contact Sales  

Indonesian equivalents live in the i18n dictionary.

### Features (6 cards — same count/layout)

| Title | Description intent |
| --- | --- |
| Employee Attendance | Manage employee attendance efficiently |
| Face Verification | Verify employee identity as part of attendance |
| Location-Based Attendance | Support location-based attendance where applicable |
| Work Schedules | Manage employee working schedules |
| Shift Management | Organize employees across shifts |
| Employee Management | Manage employee information and workforce structure |

Only describe capabilities that exist in the product; keep wording factual.

### FAQ (6 items — same grid layout)

Topics (EN titles illustrative; finalize in implementation):

1. What is NexClock?  
2. Who is NexClock for?  
3. How do organizations get started? (request demo / contact sales — not self-serve signup)  
4. Does NexClock support face verification? (high-level, factual)  
5. How do we contact support?  
6. Where can we read the privacy policy?  

No trial/gratis/kost/payment-reminder content.

### CTA Banner

- **Headline:** Ready to simplify workforce management?  
- **Description:** See how NexClock can help your organization manage employee attendance and workforce operations.  
- Buttons: Request a Demo · Contact Sales  

### SEO / metadata

- **Title:** NexClock — Workforce & Attendance Management  
- **Description:** NexClock helps businesses and organizations manage employee attendance, schedules, and workforce operations.  
- Remove all Kostmu keywords, authors, Open Graph siteName/url/images alt.  
- Update `package.json` name, `site.webmanifest`, favicons/icons as available from the NexClock icon.  
- Prefer a NexClock canonical URL when known; until then use a clear placeholder such as `[NEXCLOCK_SITE_URL]` in metadata config comments or a single constant — do not leave `kostmu.id`.

### Forbidden copy

- Kostmu, Kost, Rajagadai  
- Sign Up / Register / Create Account / Start Free Trial  
- Fake social proof, unverified compliance, “Apple approved”

---

## 6. Navigation & footer

### Navbar

- Brand: logo + NexClock  
- Links (match existing link count spirit; do not force unused Solutions/About sections):  
  - Features → `#features`  
  - FAQ → `#faq`  
  - Support → `/support`  
- Language toggle: EN | ID (default EN)  
- CTA button: Request a Demo → WhatsApp  

### Footer

- Brand: NexClock  
- Tagline: Workforce & Attendance Management  
- Links: Features, FAQ, Request Demo (WA), Support, Privacy, Terms  
- Copyright: NexClock  
- Remove Kostmu newsletter subscribe block **or** replace with a short Contact Sales WA CTA (no fake email capture backend). Preferred: replace newsletter with Contact Sales CTA to avoid dead form UX.

---

## 7. WhatsApp CTA behavior

- Number: `6285242850576`  
- Primary actions open `https://wa.me/6285242850576?text=...`  
- Prefill messages differ by intent and active language, e.g.:  
  - Request Demo (EN): interest in a NexClock product demonstration  
  - Contact Sales (EN): interest in NexClock for the organization  
  - Support (EN): need help with NexClock  
- No registration system; no multi-field demo form on this iteration.

---

## 8. Support page (`/support`)

### Requirements

- Public, no login  
- NexClock branding only  
- Headline: **NexClock Support**  
- Body: Need help with NexClock? Our support team is available to assist organizations and employees with product-related questions and issues.  
- CTA: Contact Support → WhatsApp  
- ID translation via i18n  
- Suitable as App Store Connect Support URL  

---

## 9. Privacy Policy (`/privacy`)

Preserve a simple document/prose layout. Content is NexClock-specific.

### Required Facial / Biometric Data section

Must address factually:

- What facial data is collected  
- How it is collected  
- Purpose of use  
- Whether raw images are stored  
- Whether biometric templates/embeddings are created  
- How stored  
- Where stored  
- Whether shared with third parties  
- Whether a third-party facial recognition service is used  
- Retention period  
- How data is deleted  

Where implementation details are unknown, use searchable placeholders exactly:

- `[ACTUAL FACIAL DATA PROCESSING METHOD]`  
- `[ACTUAL STORAGE LOCATION]`  
- `[ACTUAL RETENTION PERIOD]`  
- `[ACTUAL THIRD-PARTY PROCESSOR, IF ANY]`  

Do not invent technical claims. Placeholders must be replaced before public launch.

---

## 10. Terms (`/terms`)

Minimal Terms of Service covering website use, demo/sales engagement, acceptable use, disclaimer, and contact. Bilingual via the same dictionary pattern.

---

## 11. i18n architecture

- Lightweight dictionary module (e.g. `lib/i18n.ts` or `lib/i18n/*`) — **no heavy i18n framework**  
- React context or small client provider for `locale` (`en` | `id`)  
- Persist preference in `localStorage`  
- Default: `en`  
- All landing + legal/support UI strings from dictionary  
- `html lang` attribute should reflect active locale where practical (client update or locale-aware layout strategy that does not break existing ThemeProvider)

---

## 12. File / component impact map

| Area | Action |
| --- | --- |
| `app/layout.tsx` | Metadata, icons, branding; no Kostmu |
| `app/page.tsx` | Drop Pricing & Testimonials imports/usage |
| `app/support/page.tsx` | Add |
| `app/privacy/page.tsx` | Add |
| `app/terms/page.tsx` | Add |
| `components/hero.tsx` | NexClock copy + CTAs + brand color accents |
| `components/features.tsx` | NexClock features + icons |
| `components/faq.tsx` | NexClock FAQ |
| `components/cta-banner.tsx` | NexClock CTA copy + WA |
| `components/footer.tsx` | NexClock branding/links; remove/replace newsletter |
| `components/navbar/*` | Brand, links, lang toggle, WA CTA |
| `components/navbar/logo.tsx` | NexClock icon |
| `app/globals.css` | Brand color tokens |
| `public/*` | Favicon/manifest from NexClock icon |
| `package.json` | Rename from `landing-kostmu` |
| `components/pricing.tsx`, `components/testimonials.tsx` | Leave unrendered (optional cleanup later) |
| `Jenkinsfile` / deploy paths | Out of scope unless needed for build; do not leave user-facing Kostmu strings |

---

## 13. Apple review checklist (acceptance)

- [ ] No Kostmu or Rajagadai strings in UI, metadata, alt text, manifest  
- [ ] Product clearly positioned for multiple businesses/organizations  
- [ ] Request Demo / Contact Sales available (WhatsApp)  
- [ ] `/support` public and NexClock-branded  
- [ ] `/privacy` includes Facial/Biometric section with placeholders if needed  
- [ ] No Sign Up / Free Trial / fake testimonials / fake stats  
- [ ] Build passes (`npm run build`)

---

## 14. Out of scope

- Backend form submission / CRM  
- Real facial-data technical documentation beyond placeholders  
- New Benefits / How It Works marketing sections  
- Redesign of motion, card system, or typography family  
- Jenkins/deploy path renames unless required to ship the site content  

---

## 15. Success definition

The result should feel like:

> The same Kostmu landing quality and structure — now clearly the official NexClock website.

Not:

> A new website that happens to reuse Kostmu code.
