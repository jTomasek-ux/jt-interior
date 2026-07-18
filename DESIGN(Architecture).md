# JT Interiors — Design & Architecture Reference

Living spec aligned with the current codebase. Use this file when asking AI to match the site.

---

## Site map

| Route | Status | Implementation |
|---|---|---|
| `/` | Built | `app/page.tsx` — full homepage |
| `/contact` | Built | `app/contact/page.tsx` + `ContactForm` |
| `/gallery` | Built | `app/gallery/page.tsx` — project list |
| `/gallery/[slug]` | Built | `app/gallery/[slug]/page.tsx` — WIP placeholder |
| `/privacy` | Built | `app/privacy/page.tsx` via `LegalPage` |
| `/terms` | Built | `app/terms/page.tsx` via `LegalPage` |
| `/works` | Placeholder | Centered heading only |
| `/studio` | Placeholder | Centered heading only |
| `/process` | Placeholder | Centered heading only |

### Homepage section order (`app/page.tsx`)

1. `HomeHero` — fixed full-viewport hero
2. `ScrollActions` — sticky CTA + menu (appears after scroll)
3. `ProjectsSection` — Featured Works grid (`#works`)
4. `CapabilitiesSection` — Our Capabilities (`#capabilities`)
5. `TestimonialSection` — client quote (`#testimonial`)
6. `PreFooter` — large headline + CTA
7. `SiteFooter` — nav, studio note, info (`#footer`)

---

## Global foundations

### Font

- **Implemented:** Satoshi Variable (`app/fonts/satoshi/Satoshi-Variable.woff2`)
- **Applied via:** `font-sans` on `<body>` in `app/layout.tsx`
- **CSS token:** `--font-sans: var(--font-satoshi), Arial, sans-serif`
- **Note:** Original Figma used Doner / Switzer — code uses Satoshi everywhere.

### Colors (`app/globals.css`)

| Token | Value | Usage |
|---|---|---|
| `background` | `#EDE7DE` | Page sections, cards area |
| `foreground` | `#000000` | Default text |
| `on-dark` | `#FCFCFC` | Text on dark backgrounds / black buttons |
| `black` | Tailwind black | Buttons, overlays |
| `#F8F8F8` | Hardcoded | Light menu / Menu button background |
| `foreground/55`, `/60`, `/65`, `/80`, `/85` | Opacity variants | Labels, meta, body copy |
| `black/10`, `black/15`, `black/20` | Opacity variants | Borders, dividers |
| `red-700` | Tailwind | Form error text |

Project cards use per-project `hoverColor` from `lib/projects.ts`.

### Layout spacing (recurring)

| Context | Classes |
|---|---|
| Section horizontal padding | `px-4 md:px-8 lg:px-12` |
| Hero horizontal padding | `px-6 md:px-12 lg:px-16` |
| Projects section padding | `px-2 md:px-3`, `pt-20 md:pt-28` |
| Section vertical rhythm | `pb-24 md:pb-32`, `pt-16 md:pt-20` |

### Border radius (actual usage)

| Name | Value | Used for |
|---|---|---|
| pill | `100px` / `rounded-[100px]` | All CTA / menu buttons |
| full | `rounded-full` | Dot indicators on buttons |
| none | `0` | Images, cards (square crop) |

Design tokens `sm`/`md`/`lg`/`pill-category` are **not used** in components.

### Motion system

- **Smooth scroll:** Lenis (`components/smooth-scroll.tsx`), `lerp: 0.075`, synced with GSAP ScrollTrigger
- **Reduced motion:** All GSAP animations gated behind `prefers-reduced-motion: no-preference`; Lenis disabled when reduced motion is on
- **Standard easing:** `cubic-bezier(0.625, 0.05, 0, 1)` — hover text slides, menu drawer
- **Standard hover duration:** `500ms` for text-slide and image scale
- **Scroll scrub:** Hero `0.7`, ScrollSlide `0.9`, ParallaxImage `0.8`

---

## Typography (implemented)

All sizes use Satoshi via `font-sans` unless noted.

### Display / headlines

| Name | Classes | Used in |
|---|---|---|
| hero-logo | `text-[24px] leading-[28px] font-bold tracking-[-0.04em] md:text-[56px] md:leading-[59px]` | Hero "JT Interiors" |
| page-title-lg | `text-[40px] leading-[44px] font-bold tracking-[-0.03em] md:text-[56px] md:leading-[59px]` | Gallery, project WIP |
| display-stacked | `text-[clamp(2.75rem,10.5vw,9.5rem)] leading-[0.9] font-bold tracking-[-0.04em] uppercase` | Featured / Works header |
| display-count | `text-[clamp(1.75rem,5vw,4.5rem)] leading-none font-bold tracking-[-0.03em]` | Project count `(14)` |
| pre-footer-headline | `text-[clamp(2.75rem,11vw,9.5rem)] leading-[0.88] font-bold tracking-[-0.05em] uppercase` | PreFooter |
| footer-monogram | `text-[clamp(7rem,24vw,16rem)] font-bold tracking-[-0.06em]` | Footer "JT" |
| menu-link | `text-[42px] leading-[1.05] font-bold tracking-[-0.04em] md:text-[56px]` | Mobile menu links |

### Body / UI

| Name | Classes | Used in |
|---|---|---|
| hero-tagline | `text-[22px] leading-[28px] font-bold tracking-[-0.02em] md:text-[33px] md:leading-[39px]` | Hero bottom-left quote |
| hero-scroll-hint | `text-[16px] leading-[19px] font-bold tracking-[0.06em]` | `(SCROLL DOWN)` |
| hero-center-tag | `text-[15px] leading-[17px] font-black tracking-[0.08em] md:text-[16px] md:leading-[18px]` | "we are different" |
| nav-link | `text-[14px] leading-[14px] font-semibold tracking-[0.08em]` | Hero nav |
| section-eyebrow | `text-[14px] leading-[17px] font-bold tracking-[0.06em] uppercase` | `( Our Capabilities )`, `( Hear from our client )` |
| section-eyebrow-sm | `text-[12px] leading-[15px] font-bold tracking-[0.08em] uppercase` | Footer / contact labels |
| capabilities-body | `text-[clamp(2rem,4.6vw,3.75rem)] leading-[1.02] font-bold tracking-[-0.035em]` | Capabilities copy paragraphs |
| testimonial-quote | `text-[clamp(1.35rem,2.8vw,2.15rem)] leading-[1.25] font-bold tracking-[-0.03em]` | Testimonial blockquote |
| footer-nav-link | `text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.02] font-bold tracking-[-0.035em]` | Footer navigation |
| contact-h1 | `text-[clamp(2rem,5.5vw,3.5rem)] leading-[0.95] font-bold tracking-[-0.04em]` | Contact page title |
| legal-h1 | `text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95] font-bold tracking-[-0.04em]` | Legal pages |
| body-md | `text-[14px] leading-[18px] font-medium tracking-[-0.01em]` | Footer studio note, capabilities list |
| body-sm | `text-[13px] leading-[14px] font-bold tracking-[0.06em] uppercase` | Back home link |
| placeholder-page | `text-[33px] leading-[39px] font-normal` | Works / Studio / Process stubs |

### Project card captions

| Name | Classes | Position |
|---|---|---|
| under-photo-left | `text-[11px] leading-[14px] font-bold tracking-tight` | Below image, left |
| under-photo-right | `text-[10px] leading-[13px] font-medium` | Below image, right |
| hover-panel-title | `text-[15px] leading-tight font-black tracking-[-0.02em] md:text-[18px]` | Card hover overlay |
| hover-panel-category | `text-[10px] leading-[13px] font-black` | Card hover overlay |
| hover-monogram | `text-[60px] leading-none font-bold tracking-[-0.06em] md:text-[80px]` | Card hover monogram |

---

## Reusable components

### `ButtonPrimary` (`components/button-primary.tsx`)

Default black pill CTA. Props: `href`, `label`, `className`.

```tsx
<ButtonPrimary />
<ButtonPrimary href="/process" label="GET TO KNOW OUR PROCESS" className="w-fit self-start md:self-center" />
<ButtonPrimary href="/contact" label="TELL US ABOUT YOUR PROJECT" />
```

| Property | Value |
|---|---|
| Element | Next.js `Link` |
| Default label | `GET IN TOUCH` |
| Default href | `/contact` |
| root-className | `group inline-flex items-center gap-2.5 rounded-[100px] bg-black px-5 py-4 text-[14px] leading-[14px] font-bold tracking-[0.06em] text-on-dark` |
| Text animation | `animation-text-slide-replace` (h-[14px]) |
| Dot | `size-1.5 shrink-0 rounded-full border border-white`, fills white on hover/focus |

### `button-secondary` (light pill — Menu)

Same shape as primary, no dot. Used in `ScrollActions`.

| Property | Value |
|---|---|
| Element | `<button>` |
| root-className | `group inline-flex items-center rounded-[100px] bg-[#F8F8F8] px-5 py-4 text-[14px] leading-[14px] font-bold tracking-[0.06em] text-black` |
| Label | `Menu` |
| Text animation | `animation-text-slide-replace` (h-[14px]) |

### `button-close` (in menu drawer)

| Property | Value |
|---|---|
| root-className | `group inline-flex items-center rounded-[100px] bg-black px-5 py-4 text-[14px] leading-[14px] font-bold tracking-[0.06em] text-on-dark` |
| Label | `Close` |
| No dot | Text animation only |

### `button-submit` (contact form)

Same visual as `ButtonPrimary` but `<button type="submit">`, slightly shorter mobile padding.

| Property | Value |
|---|---|
| root-className | `group inline-flex w-fit items-center gap-2.5 rounded-[100px] bg-black px-5 py-3.5 text-[14px] leading-[14px] font-bold tracking-[0.06em] text-on-dark disabled:opacity-60 md:py-4` |
| Labels | `SEND ENQUIRY` / `SENDING…` (pending) |
| Has dot | Yes, same as ButtonPrimary |

### Form fields (`components/contact-form.tsx`)

| Part | Classes |
|---|---|
| Label | `text-[11px] leading-[14px] font-bold tracking-[0.08em] uppercase text-foreground/55` |
| Input / textarea | `border-0 border-b border-black/20 bg-transparent px-0 py-2 text-[15px] leading-[20px] font-medium tracking-[-0.01em] focus:border-black md:py-2.5 md:text-[16px] md:leading-[22px]` |
| Placeholder | `text-foreground/35` |
| Error | `text-[13px] leading-[18px] font-medium text-red-700` |
| Success title | `text-[20px] leading-[1.25] font-bold md:text-[26px]` |

---

## Animations

### `animation-text-slide-replace`

On hover/focus-visible, visible text slides up; duplicate below replaces it. Same string twice — motion only.

| Property | Value |
|---|---|
| Trigger | Parent with `group` + `group-hover` / `group-focus-visible` |
| Duration | `500ms` |
| Easing | `cubic-bezier(0.625, 0.05, 0, 1)` |
| Motion | Inner stack `-translate-y-1/2` |
| Structure | outer (overflow hidden, fixed height) → inner flex-col → line 1 + line 2 (aria-hidden) |

**Tailwind pattern (14px text — default):**

```
outer:  relative block h-[14px] overflow-hidden
inner:  flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2
line:   block h-[14px]
```

**Height variants in codebase** (match viewport height to line-height):

| Context | Viewport height |
|---|---|
| CTA, nav, footer legal, back links | `h-[14px]` |
| "different" link (mobile / desktop) | `h-[17px]` / `md:h-[18px]` |
| Testimonial "View project" | `h-[16px]` |
| Footer nav links | `h-[1.02em]` |
| Menu drawer links | `h-[44px]` / `md:h-[59px]` |

**Used in:** `ButtonPrimary`, hero nav, "different" link, footer nav + legal links, contact back link, scroll menu, testimonial link, contact form submit, menu/close buttons.

### `animation-hero-scroll` (`components/home-hero.tsx`)

Fixed hero; content scrolls over it via spacer `h-dvh`.

| Target | Scroll behavior (scrub 0.7) |
|---|---|
| Hero image | `yPercent: 0→22`, `scale: 1→1.14` |
| Hero content | `yPercent: 0→-18`, `opacity: 1→0` |

Also: bottom gradient `h-[42%] bg-gradient-to-t from-black/55 via-black/20 to-transparent`.

### `animation-scroll-slide` (`components/scroll-slide.tsx`)

Section children slide up on enter. Props: `fromY` (default `120`).

| Property | Value |
|---|---|
| From | `y: fromY`, `opacity: 0.25` |
| To | `y: 0`, `opacity: 1` |
| Trigger | `start: "top 95%"`, `end: "top 40%"`, `scrub: 0.9` |

Used in: Projects, Capabilities, Testimonial, PreFooter, Footer.

### `animation-parallax-image` (`components/parallax-image.tsx`)

| Property | Value |
|---|---|
| Image container | `h-[136%]`, offset `-top-[18%]` |
| Scroll | `yPercent: -travel → +travel`, scrub `0.8` |
| Default travel | `22` (project cards: `18` tall / `24` square) |
| Hover | Parent `group-hover:scale-[1.02]` on card image, `duration-500 ease-out` |

### `animation-project-card-hover` (`components/project-card.tsx`)

| Property | Value |
|---|---|
| Overlay | `h-[1in]`, `translate-y-full → translate-y-0` on group hover |
| Background | Per-project `hoverColor` |
| Duration | `500ms ease-out` |
| Monogram | Large letter with text-shadow, color matches `hoverColor` |

### `animation-scroll-actions` (`components/scroll-actions.tsx`)

Sticky bar fades in when `#works` reaches top.

| Property | Value |
|---|---|
| Position | `fixed top-7 right-6 md:top-9 md:right-12 lg:right-16 z-50` |
| Enter | `autoAlpha: 0→1`, `y: -16→0`, trigger `#works` at `top top+=72` |
| Contains | `ButtonPrimary` + Menu button |

### `animation-menu-drawer` (`components/scroll-actions.tsx`)

| Property | Value |
|---|---|
| Overlay | `bg-black/45`, fade 300ms |
| Panel | `bg-[#F8F8F8]`, `max-w-md`, slides `translate-x-full → 0`, 500ms |
| Links | Large menu typography + text-slide-replace |

---

## Page sections (detailed)

### HERO (`components/home-hero.tsx`)

| Area | Spec |
|---|---|
| Image | `/images/Hero(2).jpg`, `object-cover`, full viewport |
| Layout | Fixed `h-dvh`, content `flex flex-col justify-between` |
| Logo | Top-left, links to `/`, hero-logo typography |
| Nav | Center on `md+`, hidden on mobile. Links: WORKS, STUDIO, PROCESS, GALLERY. Each uses text-slide-replace |
| CTA | Top-right `<ButtonPrimary />` |
| Center | "we are **different**" — `different` is underlined link to `#works` with Lenis smooth scroll |
| Bottom-left | Hero tagline (3 lines) |
| Bottom-right | `(SCROLL DOWN)` |
| Spacer | `h-dvh` div after section for scroll runway |

### PROJECTS (`components/projects-section.tsx`, `#works`)

| Area | Spec |
|---|---|
| Header | "Featured" / "Works" stacked, right-aligned second line; count `(NN)` |
| Grid row 1 | 4 columns `md:grid-cols-4`, cards `aspect-[3/4]` (tall) |
| Grid rows 2–4 | 3 columns `sm:grid-cols-3`, cards `aspect-square` |
| Gap | `gap-2 md:gap-2.5` between cards, `gap-10 md:gap-14` between rows |
| Cards | `ProjectCard` → links to `/gallery/[slug]` |

### CAPABILITIES (`components/capabilities-section.tsx`, `#capabilities`)

| Area | Spec |
|---|---|
| Layout | 2-col grid `md:grid-cols-[0.38fr_0.62fr]` |
| Left | Eyebrow, image `/images/Capbilities.jpg` `aspect-[3/4]`, numbered list (6 items) |
| Right | 2 large paragraphs + `ButtonPrimary` "GET TO KNOW OUR PROCESS" → `/process` |
| List style | `border-t border-black/15`, index `(01)` etc. in muted color |

### TESTIMONIAL (`components/testimonial-section.tsx`, `#testimonial`)

| Area | Spec |
|---|---|
| Eyebrow | `( Hear from our client )` |
| Left | Multi-paragraph quote with opening/closing `"`, cite name + role |
| Right | Project image link, project name + meta, "View project →" with text-slide `h-[16px]` |

### PRE-FOOTER (`components/pre-footer.tsx`)

| Area | Spec |
|---|---|
| Headline | "Strong in form" / "Quiet in elegance" (second line indented `pl-[12%] md:pl-[18%]`) |
| CTA | Centered `ButtonPrimary` "TELL US ABOUT YOUR PROJECT" |

### FOOTER (`components/site-footer.tsx`, `#footer`)

| Area | Spec |
|---|---|
| Layout | 3-col grid on `md+` |
| Col 1 | Image `/images/footer.jpg`, oversized "JT" monogram |
| Col 2 | `(Navigation)` + large footer nav links with text-slide |
| Col 3 | `(Studio)` note + `(Info)` address/email/phone/hours |
| Bottom bar | © year, Privacy/Terms/Instagram/Get in touch — all with text-slide on links |

### CONTACT (`app/contact/page.tsx`)

| Area | Spec |
|---|---|
| Layout | `h-dvh` locked scroll, 2-col on `md+` |
| Header | Logo + "← Back home" (text-slide) |
| Left | `(Contact)` eyebrow, h1, intro, footer info list |
| Right | `(Enquiry)` + `ContactForm` |
| Scroll | `ContactScrollLock` wrapper |

### GALLERY

- **Index:** title + simple link list with category meta
- **Project page:** `← BACK` to `/#works`, centered "Work in progress" WIP state

### LEGAL (`components/legal-page.tsx`)

Shared template for Privacy + Terms. Back home header, `(Legal)` eyebrow, numbered sections `(01)` etc.

### PLACEHOLDER PAGES

`/works`, `/studio`, `/process` — centered `text-[33px] leading-[39px] font-normal` heading only.

---

## AI prompt cheat sheet

**Exact same CTA:**
```
Use ButtonPrimary from DESIGN(Architecture).md — components/button-primary.tsx, default label/href.
```

**CTA variant (different text/color/width, same shape):**
```
Create a ButtonPrimary variant from DESIGN(Architecture).md.
KEEP: rounded-[100px], text 14px/14px font-bold tracking-[0.06em], py-4, animation-text-slide-replace, dot indicator.
CHANGE: label "[TEXT]", href "[URL]", background [COLOR], text color [COLOR], horizontal padding [px-N], dot border color to match text.
```

**Text slide animation only:**
```
Apply animation-text-slide-replace from DESIGN(Architecture).md to [element].
Set viewport height to match line height. Parent needs class "group".
```

**Match a homepage section:**
```
Build [section name] per DESIGN(Architecture).md — see "Page sections" for [HERO/PROJECTS/etc].
Use existing components: [HomeHero/ProjectCard/ScrollSlide/ButtonPrimary/etc].
```

**Full page consistency:**
```
Follow global foundations in DESIGN(Architecture).md — Satoshi font-sans, background #EDE7DE,
section padding px-4 md:px-8 lg:px-12, text-slide on interactive links, ScrollSlide on section content.
```
