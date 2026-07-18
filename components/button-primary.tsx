import Link from "next/link";

type ButtonPrimaryProps = {
  href?: string;
  label?: string;
  className?: string;
};

export function ButtonPrimary({
  href = "/contact",
  label = "GET IN TOUCH",
  className = "",
}: ButtonPrimaryProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 rounded-[100px] bg-black px-5 py-4 text-[14px] leading-[14px] font-bold tracking-[0.06em] text-on-dark ${className}`}
    >
      <span className="relative block h-[14px] overflow-hidden">
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
          <span className="block h-[14px]">{label}</span>
          <span className="block h-[14px]" aria-hidden>
            {label}
          </span>
        </span>
      </span>
      <span
        className="inline-block size-1.5 shrink-0 rounded-full border border-white transition-[background-color] duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:bg-white group-focus-visible:bg-white"
        aria-hidden
      />
    </Link>
  );
}
