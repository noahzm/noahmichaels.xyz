import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Noah Michaels',
  description:
    "Portfolio showcasing Noah Michaels's design expertise in branding, print, and digital media. Explore projects that demonstrate a commitment to clear communication and impactful visual solutions.",
  href: 'https://noahmichaels.xyz',
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/resume',
    label: 'resume',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/noahzm',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/noahzm/',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:me@noahmichaels.xyz',
    label: 'Email',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
