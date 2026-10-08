import { motion } from "framer-motion";
import { Badge } from "components/Badge";
import { Card } from "components/Card";
import { Section } from "components/Section";
import { useContent } from "i18n/context";
import { useReveal, rise, stagger } from "lib/motion";

export function TechStack() {
  const reveal = useReveal();
  const { techStack } = useContent();

  return (
    <Section id="tech-stack" title={techStack.heading} intro={techStack.intro}>
      <motion.ul
        variants={stagger}
        {...reveal}
        className="grid gap-5 sm:grid-cols-2 xl2:grid-cols-4"
      >
        {techStack.groups.map((group) => (
          <motion.li key={group.id} variants={rise} className="min-w-0">
            <Card className="h-full">
              <h3 className="font-code text-smaller uppercase tracking-widest text-purple-light">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge>{item}</Badge>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
