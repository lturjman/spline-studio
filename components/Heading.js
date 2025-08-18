"use client";
import { tv } from "tailwind-variants";

const heading = tv({
  base: "font-epilogue uppercase text-3xl md:text-5xl tracking-tight text-center m-4",
  variants: {
    level: {
      1: "text-4xl md:text-5xl tracking-tight",
      2: "text-3xl md:text-4xl tracking-tight",
      3: "text-2xl md:text-3xl",
      4: "text-xl md:text-2xl",
      5: "text-lg md:text-xl",
      6: "font-spaceGrotesk text-base md:text-lg uppercase tracking-wide text-gray-400",
    },
  },
  defaultVariants: {
    level: 1,
  },
});

export function Heading({ level = 1, children, className }) {
  const Tag = `h${level}`;
  return <Tag className={heading({ level, className })}>{children}</Tag>;
}
