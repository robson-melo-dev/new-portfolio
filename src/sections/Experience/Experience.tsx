import { motion } from "framer-motion";
import { Badge } from "components/Badge";
import { Card } from "components/Card";
import { Glow } from "components/Glow";
import { Section } from "components/Section";
import { useContent } from "i18n/context";
import { useReveal, rise, stagger } from "lib/motion";

export function Experience() {
  const reveal = useReveal();
  const { experience } = useContent();

  /** `end: null` means the role is ongoing. */
  const formatRange = (start: string, end: string | null) => {
    if (end === null) return `${start} — ${experience.present}`;
    return start === end ? start : `${start} — ${end}`;
  };

  return (
    <Section id="experience" title={experience.heading}>
      <Glow className="-left-[5vw] top-0 h-[40vw] w-[50vw] max-w-full" />

      <motion.ol variants={stagger} {...reveal} className="relative flex flex-col gap-6">
        {/* Timeline rail, decorative. */}
        <span
          aria-hidden="true"
          className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent-green via-purple to-transparent sm:block"
        />

        {experience.roles.map((role) => (
          <motion.li key={role.id} variants={rise} className="relative sm:pl-10">
            <span
              aria-hidden="true"
              className="absolute left-0 top-6 hidden h-4 w-4 rounded-full border-2 border-accent-green bg-dark-grey sm:block"
            />

            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-medium-large font-semibold">
                  {role.title}
                  <span className="text-accent-green"> @ {role.company}</span>
                </h3>
                <p className="font-code text-smaller text-grey/70 sm:text-small">
                  {formatRange(role.start, role.end)}
                  {role.end === null ? (
                    <span className="ml-2 rounded-full bg-accent-green/15 px-2 py-0.5 text-accent-green">
                      {experience.current}
                    </span>
                  ) : null}
                </p>
              </div>

              <p className="mt-1 font-code text-smaller text-grey/60">{role.location}</p>
              <p className="mt-3 text-medium leading-relaxed text-grey/85">{role.focus}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {role.stack.map((tech) => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
