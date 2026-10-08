import { motion } from "framer-motion";
import { LocaleSwitch } from "components/LocaleSwitch";
import { SocialIcon } from "components/SocialIcon";
import { useHeaderOffset } from "hooks/useHeaderOffset";
import { useContent } from "i18n/context";
import { fade, useReveal } from "lib/motion";

export function Header() {
  const reveal = useReveal();
  const headerRef = useHeaderOffset<HTMLElement>();
  const { navItems, contact, profile, a11y } = useContent();

  return (
    <motion.header
      ref={headerRef}
      variants={fade}
      {...reveal}
      className="sticky top-0 z-20 border-b border-white/5 bg-dark-grey/80 backdrop-blur"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-4 sm:px-8 xl2:px-20">
        <a
          href="#hero"
          className="rounded font-code text-small font-semibold text-accent-green"
        >
          {profile.shortName}
        </a>

        <nav aria-label={a11y.mainNav} className="order-3 w-full sm:order-none sm:w-auto">
          <ul className="flex flex-wrap items-center gap-x-1 gap-y-2 sm:gap-x-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="inline-block rounded-full px-3 py-1.5 text-smaller text-white transition-colors hover:bg-purple sm:text-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Hidden on phones: these same links are in the Contact section,
              and dropping them keeps the sticky header to two rows at 320px. */}
          <ul className="hidden items-center gap-3 sm:flex sm:gap-4">
            {contact.socials.map((social) => (
              <li key={social.id}>
                <SocialIcon name={social.id} href={social.href} label={social.label} />
              </li>
            ))}
            <li>
              <SocialIcon
                name="email"
                href={`mailto:${contact.email}`}
                label={contact.emailLabel}
              />
            </li>
          </ul>

          <LocaleSwitch />
        </div>
      </div>
    </motion.header>
  );
}
