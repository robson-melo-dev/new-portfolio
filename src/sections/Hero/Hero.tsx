import { motion } from "framer-motion";
import { Glow } from "components/Glow";
import { TerminalWindow } from "components/TerminalWindow";
import { useContent } from "i18n/context";
import { useTypewriter } from "hooks/useTypewriter";
import { fromLeft, fromRight, useReveal } from "lib/motion";

export function Hero() {
  const reveal = useReveal();
  const { profile, hero, about, contact, techStack } = useContent();
  const { text, isAnimating } = useTypewriter(profile.taglineHighlights);

  const term = hero.terminal;
  const backend = techStack.groups.find((group) => group.id === "backend");
  const databases = techStack.groups.find((group) => group.id === "databases");

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-4 py-14 sm:px-8 xl2:flex-row xl2:justify-between xl2:gap-12 xl2:px-20 xl2:py-24"
    >
      <Glow className="-left-[10vw] top-0 h-[45vw] w-[55vw] max-w-full" />

      <motion.div
        variants={fromLeft}
        {...reveal}
        className="flex w-full min-w-0 flex-col gap-3 text-center xl2:text-left"
      >
        <span className="font-code text-medium text-accent-green">{profile.greeting}</span>

        <h1
          id="hero-heading"
          className="text-[clamp(1.75rem,7vw,4rem)] font-bold leading-tight"
        >
          {profile.name}
        </h1>

        <p className="text-[clamp(1.125rem,3.5vw,2.25rem)] font-semibold text-accent-green">
          {profile.role}
        </p>

        {/*
          Zero-layout-shift typewriter. Two things are needed, and both matter:
          every candidate word is stacked invisibly in the same grid cell so the
          box is sized to the longest of them (`w-fit`), and the text is
          left-aligned inside that fixed box while the box itself is centred
          (`mx-auto text-left`). Centring the text instead would slide the whole
          line left on every keystroke — worth 0.1 of CLS on mobile.
        */}
        <p className="grid w-fit mx-auto text-left text-[clamp(1rem,3vw,1.75rem)] font-semibold text-outline xl2:mx-0">
          {/* Screen readers get the whole tagline; the cycling text is decorative. */}
          <span className="sr-only">{profile.tagline}</span>

          {profile.taglineHighlights.map((word) => (
            <span
              key={word}
              aria-hidden="true"
              className="invisible col-start-1 row-start-1"
            >
              {word}_
            </span>
          ))}

          {/* The caret is a border on the text itself, not a sibling node: a
              separate element would be re-positioned on every keystroke, and
              each of those moves counts as a layout shift. */}
          <span
            aria-hidden="true"
            className={`col-start-1 row-start-1 w-fit ${
              isAnimating ? "animate-caret border-r-2 border-accent-green pr-0.5" : ""
            }`}
          >
            {text}
          </span>
        </p>

        <p className="mx-auto mt-2 max-w-xl text-medium text-grey/80 xl2:mx-0">
          {profile.tagline} · {profile.location}
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-3 xl2:justify-start">
          <a
            href="#projects"
            className="rounded-full bg-accent-green px-5 py-2.5 text-small font-semibold text-black transition-opacity hover:opacity-85"
          >
            {hero.ctaWork}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="rounded-full border border-accent-green px-5 py-2.5 text-small font-semibold text-accent-green transition-colors hover:bg-accent-green/10"
          >
            {hero.ctaContact}
          </a>
        </div>
      </motion.div>

      <motion.div variants={fromRight} {...reveal} className="w-full min-w-0 xl2:max-w-xl">
        <TerminalWindow title={profile.terminalTitle}>
          <code className="block overflow-x-auto text-smaller leading-6 sm:text-small">
            <span className="text-purple-light">Profile</span> {"{"}
            <span className="block pl-4">
              <span className="text-accent-green">{term.role}: </span>
              {profile.role};
            </span>
            <span className="block pl-4">
              <span className="text-accent-green">{term.focus}: </span>
              {profile.tagline};
            </span>
            <span className="block pl-4">
              <span className="text-accent-green">{term.domains}: </span>
              {term.domainsValue};
            </span>
            <span className="block pl-4">
              <span className="text-accent-green">{term.backend}: </span>
              {backend?.items.join(", ")};
            </span>
            <span className="block pl-4">
              <span className="text-accent-green">{term.databases}: </span>
              {databases?.items.join(", ")};
            </span>
            <span className="block pl-4">
              <span className="text-accent-green">{term.async}: </span>
              {term.asyncValue};
            </span>
            <span className="block pl-4">
              <span className="text-accent-green">{term.based}: </span>
              {profile.location};
            </span>
            {"}"}
          </code>
        </TerminalWindow>

        <dl className="mt-6 grid grid-cols-2 gap-3">
          {about.highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="rounded-xl border border-chrome-border/60 bg-black/40 px-4 py-3"
            >
              <dt className="font-code text-smaller uppercase tracking-wider text-accent-green">
                {highlight.label}
              </dt>
              <dd className="mt-1 text-smaller sm:text-small">{highlight.value}</dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}
