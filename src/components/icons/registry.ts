import { GitHubIcon, LinkedInIcon, MailIcon } from "components/icons";

/**
 * Maps a `SocialId` from the content module to its glyph. Kept out of
 * `icons/index.tsx` so that file exports only components.
 */
export const socialIcons = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  email: MailIcon,
} as const;

export type SocialIconName = keyof typeof socialIcons;
