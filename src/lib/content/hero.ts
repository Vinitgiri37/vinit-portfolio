import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Vinit Kumar Giri.',
  tagline: 'I create visually pleasing interfaces for the web.',
  description:
    "Passionate about Web Development and DSA with a strong focus on UI/UX design and problem-solving.",
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
