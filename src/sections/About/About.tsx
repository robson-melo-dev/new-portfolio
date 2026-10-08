import { motion } from "framer-motion";
import { Section } from "components/Section";
import { useContent } from "i18n/context";
import { useReveal, rise, stagger } from "lib/motion";

export function About() {
  const reveal = useReveal();
  const { about } = useContent();

  return (
    <Section id="about" title={about.heading}>
      {/*
        Single column, capped at a readable measure. The highlight list that
        used to occupy a second column here held the same four items the Hero
        already shows — on a phone, where both stack, you scrolled past the
        identical block twice.

        Keys are ids, never the paragraph text: a content-derived key changes
        on a locale switch, which remounts these into their `hidden` variant
        while the parent's once-only viewport trigger has already fired, and
        the new paragraphs never animate in.
      */}
      <motion.div
        variants={stagger}
        {...reveal}
        className="flex max-w-3xl flex-col gap-4 sm:gap-5"
      >
        {about.paragraphs.map((paragraph) => (
          <motion.p
            key={paragraph.id}
            variants={rise}
            className="text-medium leading-relaxed text-grey/85"
          >
            {paragraph.text}
          </motion.p>
        ))}
      </motion.div>
    </Section>
  );
}
