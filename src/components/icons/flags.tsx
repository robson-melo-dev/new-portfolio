import type { SVGProps } from "react";

/**
 * Flags are drawn inline rather than used as emoji: Windows ships no flag
 * glyphs, so 🇧🇷 / 🇺🇸 render there as the bare letters "BR" / "US".
 *
 * Decorative — the button that wraps them carries the accessible name.
 */

type FlagProps = SVGProps<SVGSVGElement>;

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 28 20",
  "aria-hidden": true,
  focusable: false,
} as const;

export function BrazilFlag(props: FlagProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect width="28" height="20" fill="#009b3a" />
      <path d="M14 2.4 25.6 10 14 17.6 2.4 10Z" fill="#fedf00" />
      <circle cx="14" cy="10" r="4.3" fill="#002776" />
      <path
        d="M9.9 8.4a9.6 9.6 0 0 1 8.1 2.3 4.3 4.3 0 0 1-.2.9 8.8 8.8 0 0 0-8.2-2.3 4.3 4.3 0 0 1 .3-.9Z"
        fill="#fff"
      />
    </svg>
  );
}

export function UnitedStatesFlag(props: FlagProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect width="28" height="20" fill="#fff" />
      {/* 13 stripes: the 7 red ones are drawn, the white ones are the field. */}
      {[0, 2, 4, 6, 8, 10, 12].map((stripe) => (
        <rect
          key={stripe}
          y={(stripe * 20) / 13}
          width="28"
          height={20 / 13}
          fill="#b22234"
        />
      ))}
      <rect width="11.2" height={(7 * 20) / 13} fill="#3c3b6e" />
      {[
        [2, 1.8],
        [5.6, 1.8],
        [9.2, 1.8],
        [3.8, 4],
        [7.4, 4],
        [2, 6.2],
        [5.6, 6.2],
        [9.2, 6.2],
        [3.8, 8.4],
        [7.4, 8.4],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="0.75" fill="#fff" />
      ))}
    </svg>
  );
}
