import { socialIcons, type SocialIconName } from "components/icons/registry";

interface SocialIconProps {
  name: SocialIconName;
  href: string;
  /** Accessible name for the link — the icon itself is aria-hidden. */
  label: string;
  className?: string;
}

/**
 * Icon-only link. Carries the accessible name so a screen reader announces the
 * destination, and `rel="noreferrer"` alongside every `target="_blank"`.
 */
export function SocialIcon({ name, href, label, className = "" }: SocialIconProps) {
  const Icon = socialIcons[name];
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`inline-flex rounded text-white transition-colors hover:text-accent-green ${className}`}
    >
      <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}
