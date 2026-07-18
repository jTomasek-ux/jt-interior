typography:

    Headline: 
        Family: Doner, Arial, sans-serif
        Size 56px
        Weight 400
        Line Height 59px
    Navigation text:
        Family: Doner, Arial, sans-serif
        Size 14px
        Weight 600
        Line Height 14px
    hero sec. other:
        Family: Doner, Arial, sans-serif
        Size 14px
        Weight 400
        Line Height 17px
    hero text:
        Family: Doner, Arial, sans-serif
        Size 33px
        Weight 400
        Line Height 39px
    big text:
        Family: Doner, Arial, sans-serif
        Size 56px
        Weight 400
        Line Height 59px
    huge text:
        Family: Doner, Arial, sans-serif
        Size 120px
        Weight 500
        Line Height 114px
    under photo left:
        Family: Doner, Arial, sans-serif
        Size 11px
        Weight 700
        Line Height 14px
    under photo right:
        Family: "Switzer Variable", Arial, sans-serif"
        Size 10px
        Weight 500
        Line Height 13px


rounded:
  none: 0px
  sm: 6px
  md: 12px
  lg: 16px
  pill-category: 64px
  pill: 100px
  full: 9999px
    
button-primary (CTA — "GET IN TOUCH"):
    element: Next.js Link (not <button>)
    label: "GET IN TOUCH"
    href: "/contact"
    root-className: "group inline-flex items-center gap-2.5 rounded-[100px] bg-black px-5 py-4 text-[14px] leading-[14px] font-bold tracking-[0.06em] text-on-dark"
    layout: inline-flex, items-center, gap 10px (gap-2.5)
    backgroundColor: "#000000" (bg-black)
    textColor: "#FCFCFC" (text-on-dark token)
    typography:
        Family: Satoshi, Arial, sans-serif (inherits font-sans from body)
        Size: 14px
        Weight: 700 (font-bold)
        Line Height: 14px
        Letter Spacing: 0.06em (tracking-[0.06em])
    rounded: 100px (rounded-[100px])
    padding: 16px vertical, 20px horizontal (py-4 px-5)
    text-animation: animation-text-slide-replace (see below)
    dot-indicator:
        className: "inline-block size-1.5 shrink-0 rounded-full border border-white transition-[background-color] duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:bg-white group-focus-visible:bg-white"
        size: 6px (size-1.5)
        shape: circle (rounded-full)
        border: 1px solid white (border-white)
        default: transparent fill
        hover/focus: solid white fill (group-hover:bg-white, group-focus-visible:bg-white)
        aria-hidden: true
    dot-transition:
        property: background-color
        duration: 500ms
        easing: cubic-bezier(0.625, 0.05, 0, 1)
    markup-reference: |
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2.5 rounded-[100px] bg-black px-5 py-4 text-[14px] leading-[14px] font-bold tracking-[0.06em] text-on-dark"
        >
          <span className="relative block h-[14px] overflow-hidden">
            <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
              <span className="block h-[14px]">GET IN TOUCH</span>
              <span className="block h-[14px]" aria-hidden>
                GET IN TOUCH
              </span>
            </span>
          </span>
          <span
            className="inline-block size-1.5 shrink-0 rounded-full border border-white transition-[background-color] duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:bg-white group-focus-visible:bg-white"
            aria-hidden
          />
        </Link>
    implementation: components/home-hero.tsx (top-right hero CTA)
    ai-prompt-hint: >
        Recreate button-primary exactly from DESIGN(Architecture).md — use the markup-reference
        block verbatim (swap label/href only if needed). Font is Satoshi via font-sans, not Doner.

animation-text-slide-replace:
    alias: "text slide up", "vertical text swap", "hover text replace"
    description: >
        On hover/focus, the visible text moves up and out of view while an identical
        copy below slides into its place. Same label is used twice — the motion is
        the effect, not a text change.
    trigger: parent group hover, group focus-visible
    duration: 500ms
    easing: cubic-bezier(0.625, 0.05, 0, 1)
    motion: inner stack translates up by 50% (-translate-y-1/2)
    structure:
        1. outer viewport — overflow hidden, fixed height = one line (e.g. h-[14px])
        2. inner stack — flex column, transition-transform on hover/focus
        3. line 1 — visible label (accessible text)
        4. line 2 — duplicate label (aria-hidden, same height as line 1)
    tailwind-pattern:
        outer: "relative block h-[14px] overflow-hidden"
        inner: "flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2"
        line: "block h-[14px]"
        line-duplicate: "block h-[14px]" + aria-hidden (second line only)
    parent-requirement: root element must have class "group" (see button-primary root-className)
    used-in:
        - button-primary CTA ("GET IN TOUCH")
    implementation: components/home-hero.tsx
    ai-prompt-hint: >
        Use the "animation-text-slide-replace" pattern from DESIGN(Architecture).md —
        duplicate stacked text, overflow-hidden viewport, translate inner stack up 50%
        on group hover/focus-visible, 500ms cubic-bezier(0.625, 0.05, 0, 1).


colors:
    background: #EDE7DE (background)
    text: #000000 or #FCFCFC

## HERO

Entire screen will cover photo: hero.jpg

on the top left there will be name of the architecture agency: JT Interiors written in Headline font

on top right CTA button-primary: "GET IN TOUCH" (links to /contact)

top between name and CTA navigation, links: WORKS, STUDIO, PROCESS, GALLERY -written in "navigation text"

in bottom left text: "The JT Interior style is defined by
strong, solid forms with subtle elegance,
natural balance and enduring appeal" written in "hero text"

buttom right text: "(SCROLL DOWN) writen in "hero sec. other"


