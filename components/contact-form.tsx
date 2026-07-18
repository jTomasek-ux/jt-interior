"use client";

import { useActionState } from "react";
import {
  submitContact,
  type ContactState,
} from "@/app/contact/actions";

const initialState: ContactState = { ok: false };

const fieldClass =
  "w-full border-0 border-b border-black/20 bg-transparent px-0 py-2 text-[15px] leading-[20px] font-medium tracking-[-0.01em] text-foreground outline-none transition-[border-color] placeholder:text-foreground/35 focus:border-black md:py-2.5 md:text-[16px] md:leading-[22px]";

const labelClass =
  "mb-0.5 block text-[11px] leading-[14px] font-bold tracking-[0.08em] uppercase text-foreground/55";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  if (state.ok) {
    return (
      <div className="flex flex-col gap-3 border-t border-black/15 pt-6">
        <p className="text-[20px] leading-[1.25] font-bold tracking-[-0.02em] text-foreground md:text-[26px]">
          {state.message}
        </p>
        <p className="text-[14px] leading-[20px] font-medium text-foreground/60">
          Prefer to talk now? Call{" "}
          <a href="tel:+420721551834" className="underline underline-offset-2">
            +420 721 551 834
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4 md:gap-5" noValidate>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        <label className="block">
          <span className={labelClass}>Name *</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>Email *</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="block">
        <span className={labelClass}>Phone</span>
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="+420 …"
          className={fieldClass}
        />
      </label>

      <label className="block">
        <span className={labelClass}>Project brief *</span>
        <textarea
          name="message"
          required
          rows={3}
          placeholder="Tell us about your space, timeline, and anything that matters to you."
          className={`${fieldClass} min-h-[72px] resize-none md:min-h-[88px]`}
        />
      </label>

      {state.error ? (
        <p className="text-[13px] leading-[18px] font-medium text-red-700" role="alert">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="group sticky bottom-4 z-10 mt-2 inline-flex w-fit items-center gap-2.5 rounded-[100px] bg-black px-5 py-3.5 text-[14px] leading-[14px] font-bold tracking-[0.06em] text-on-dark shadow-[0_8px_24px_rgba(0,0,0,0.18)] disabled:opacity-60 md:static md:mt-0 md:py-4 md:shadow-none"
      >
        <span className="relative block h-[14px] overflow-hidden">
          <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
            <span className="block h-[14px]">
              {pending ? "SENDING…" : "SEND ENQUIRY"}
            </span>
            <span className="block h-[14px]" aria-hidden>
              {pending ? "SENDING…" : "SEND ENQUIRY"}
            </span>
          </span>
        </span>
        <span
          className="inline-block size-1.5 shrink-0 rounded-full border border-white transition-[background-color] duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:bg-white group-focus-visible:bg-white"
          aria-hidden
        />
      </button>
    </form>
  );
}
