import { motion } from "framer-motion";
import { Badge } from "components/Badge";
import { Card } from "components/Card";
import { Section } from "components/Section";
import { ArrowIcon } from "components/icons";
import { useContent } from "i18n/context";
import { useReveal, rise, stagger } from "lib/motion";

export function Projects() {
  const reveal = useReveal();
  const { projects } = useContent();

  return (
    <Section id="projects" title={projects.heading} intro={projects.intro}>
      <motion.ul variants={stagger} {...reveal} className="grid gap-6 xl2:grid-cols-2">
        {projects.items.map((project) => (
          <motion.li key={project.id} variants={rise} className="min-w-0">
            <Card className="flex h-full flex-col gap-4">
              <img
                src={project.image}
                alt={project.imageAlt}
                width={1200}
                height={700}
                loading="lazy"
                decoding="async"
                className="aspect-[12/7] w-full max-w-full rounded-lg border border-chrome-border/50 object-cover"
              />

              <div className="flex min-w-0 flex-1 flex-col gap-3">
                <h3 className="text-medium-large font-semibold">{project.name}</h3>
                <p className="flex-1 text-small leading-relaxed text-grey/80">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li key={tech}>
                      <Badge>{tech}</Badge>
                    </li>
                  ))}
                </ul>

                <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-2">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 rounded text-small font-semibold text-accent-green"
                    >
                      {projects.openLive}
                      <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  ) : null}
                  {project.codeUrl ? (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 rounded text-small font-semibold text-white hover:text-accent-green"
                    >
                      {projects.openCode}
                      <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  ) : null}
                </div>
              </div>
            </Card>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
