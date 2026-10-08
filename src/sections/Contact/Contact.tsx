import { motion } from "framer-motion";
import { Glow } from "components/Glow";
import { Section } from "components/Section";
import { SocialIcon } from "components/SocialIcon";
import { LanguagesIcon, LocationIcon, MailIcon } from "components/icons";
import { useContent } from "i18n/context";
import { useReveal, rise, stagger } from "lib/motion";

export function Contact() {
  const reveal = useReveal();
  const { contact, profile } = useContent();

  return (
    <Section id="contact" title={contact.heading} intro={contact.blurb}>
      <Glow className="-right-[10vw] bottom-0 h-[40vw] w-[45vw] max-w-full" />

      <motion.div variants={stagger} {...reveal} className="flex flex-col gap-8">
        <motion.ul variants={rise} className="flex flex-col gap-4">
          <li>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-3 rounded text-medium font-semibold text-accent-green hover:underline"
            >
              <MailIcon className="h-6 w-6 shrink-0" />
              <span className="break-all">{contact.email}</span>
            </a>
          </li>
          <li className="flex items-center gap-3 text-medium text-grey/85">
            <LocationIcon className="h-6 w-6 shrink-0 text-accent-green" />
            {contact.location}
          </li>
          <li className="flex items-center gap-3 text-medium text-grey/85">
            <LanguagesIcon className="h-6 w-6 shrink-0 text-accent-green" />
            {contact.languages}
          </li>
        </motion.ul>

        <motion.ul variants={rise} className="flex items-center gap-5">
          {contact.socials.map((social) => (
            <li key={social.id}>
              <SocialIcon name={social.id} href={social.href} label={social.label} />
            </li>
          ))}
        </motion.ul>

        <motion.p variants={rise} className="font-code text-smaller text-grey/70">
          © {new Date().getFullYear()} {profile.name}
        </motion.p>
      </motion.div>
    </Section>
  );
}
