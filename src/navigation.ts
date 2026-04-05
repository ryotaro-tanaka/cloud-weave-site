/** In-page anchors use relative `#…` (avoid `getPermalink('/#…')` with trailingSlash—it can break the fragment). */
export const headerData = {
  links: [
    { text: 'Download', href: '#hero' },
    { text: 'Why Cloud Weave', href: '#why-cloud-weave' },
    { text: 'Known Limitations', href: '#known-limitations' },
    { text: 'Feedback', href: '#feedback' },
    { text: 'Support', href: '#support-development' },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'X', href: 'https://x.com/tanakar_dev', icon: 'tabler:brand-x' },
    { ariaLabel: 'Threads', href: 'https://www.threads.com/@ryo.dev.studio', icon: 'tabler:brand-threads' },
    { ariaLabel: 'GitHub', href: 'https://github.com/ryotaro-tanaka', icon: 'tabler:brand-github' },
  ],
  footNote: `Made by ryotaro-tanaka · All rights reserved.`,
};
