import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'What is Cloud Weave', href: getPermalink('/#what-is-cloud-weave') },
    { text: 'Download', href: getPermalink('/#windows-beta-download') },
    { text: 'Known limitations', href: getPermalink('/#known-limitations') },
    { text: 'Feedback', href: getPermalink('/#feedback') },
  ],
  actions: [
    {
      text: 'Download latest beta',
      href: 'https://github.com/ryotaro-tanaka/cloud-weave-site/releases/latest',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/ryotaro-tanaka/cloud-weave-site' },
  ],
  footNote: `Cloud Weave open beta for Windows.`,
};
