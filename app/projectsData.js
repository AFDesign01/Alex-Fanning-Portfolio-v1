/*
 * PROJECTS
 * ========
 * Every project page and the All Projects grid are built from this list.
 * To add a project: put its images in /public/projects/<slug>/ and copy the
 * TEMPLATE at the bottom of this file into the list. Only slug, name, eyebrow,
 * intro, thumb and an image are required. Every other field is optional and
 * is simply hidden on the page until you fill it in.
 *
 *   type        'client'         work for an employer or client
 *               'self-initiated' your own brief / concept project
 *               null             label hidden (use while undecided)
 *   client      who it was for, e.g. 'I Vape Great (IVG)'
 *   year        e.g. '2025'
 *   role        what YOU did, e.g. 'Lead designer: packaging artwork and print production'
 *   brief       the problem or ask, a short paragraph
 *   approach    how you solved it, a short paragraph (or an array of paragraphs)
 *   outcome     what happened: launched, stocked in X, sales, feedback
 *   deliverables array of short strings, e.g. ['Logo', 'Packaging', 'POS']
 *   images      array of { src, alt, caption? } shown one after another.
 *               Prefer 3 to 6 separate shots over one big collage.
 */
export function typeLabel(type) {
  if (type === 'client') return 'CLIENT WORK';
  if (type === 'self-initiated') return 'SELF-INITIATED';
  return null;
}

export const projects = [
  {
    slug: 'venom-vape',
    name: 'Venom Vape',
    type: 'client',
    eyebrow: 'PACKAGING / BRANDING',
    intro: 'Brand identity, typography, packaging, characters, web banner and point-of-sale posters for Venom — “Let the flavour sink in.”',
    image: '/projects/venom-vape/venom-full.webp',
    thumb: '/projects/venom-vape/venom-thumb.png',
    alt: 'Venom Vape project: logo, typography, packaging, bottles, range, characters, web banner and POS posters',
  },
  {
    slug: 'vital-bloom',
    name: 'Vital Bloom',
    type: 'self-initiated',
    eyebrow: 'PACKAGING / BRANDING',
    intro: 'Brand identity, typography and packaging for Vital Bloom, a colourful range of daily supplements.',
    image: '/projects/vital-bloom/vital-bloom-full.webp',
    thumb: '/projects/vital-bloom/vital-bloom-thumb.png',
    alt: 'Vital Bloom project: logo, typography, packaging and the product range',
  },
  {
    slug: 'fresh',
    name: 'Fresh',
    type: 'self-initiated',
    eyebrow: 'WEB DESIGN / BRANDING',
    intro: 'Brand identity, can packaging and website design for Fresh Nutrition, a subscription drinks brand with weekly, monthly and yearly plans.',
    image: '/projects/fresh/fresh-full.webp',
    thumb: '/projects/fresh/fresh-thumb.png',
    alt: 'Fresh Nutrition project: logo, can range, website design and subscription plans',
  },
  {
    slug: 'ivg-pro',
    name: 'IVG Pro',
    type: 'client',
    client: 'I Vape Great (IVG)',
    eyebrow: 'PACKAGING / PRODUCT DESIGN',
    intro: 'Product photography and packaging artwork for the IVG Pro 10K disposable vape range, across its full range of flavours.',
    images: [
      { src: '/projects/ivg-pro/ivgpro-hero.webp', alt: 'IVG Pro logo and device render' },
      { src: '/projects/ivg-pro/ivgpro-range.webp', alt: 'IVG Pro 10K full flavour range packaging lineup' },
      { src: '/projects/ivg-pro/ivgpro-detail.webp', alt: 'Close-up detail of IVG Pro packaging and devices' },
    ],
    thumb: '/projects/ivg-pro/ivgpro-thumb.png',
  },
  {
    slug: 'ivg-galaxy-dual',
    name: 'IVG Galaxy Dual',
    type: 'client',
    client: 'I Vape Great (IVG)',
    eyebrow: 'PACKAGING / PRODUCT DESIGN',
    intro: 'Devices and packaging for IVG Galaxy Dual, a dual-flavour disposable vape range in four editions: Tropical, Cherry, Blue and Yellow.',
    images: [
      { src: '/projects/ivg-galaxy-dual/galaxy-hero.webp', alt: 'IVG Galaxy Dual logo on a deep-space background with the line “A device out of this world”' },
      { src: '/projects/ivg-galaxy-dual/galaxy-devices.webp', alt: 'The IVG Galaxy Dual devices in six colourways' },
      { src: '/projects/ivg-galaxy-dual/galaxy-boxes.webp', alt: 'IVG Galaxy Dual boxes: Tropical, Cherry, Blue and Yellow editions' },
      { src: '/projects/ivg-galaxy-dual/galaxy-afd.webp', alt: 'AFD logo' },
    ],
    thumb: '/projects/ivg-galaxy-dual/galaxy-thumb.webp',
  },
];

/*
 * TEMPLATE: copy into the list above and fill in.
 *
  {
    slug: 'project-name',
    name: 'Project Name',
    type: 'client',
    client: '',
    year: '',
    eyebrow: 'PACKAGING / BRANDING',
    intro: 'One or two sentences on what this is.',
    role: '',
    brief: '',
    approach: '',
    outcome: '',
    deliverables: [],
    thumb: '/projects/project-name/thumb.png',
    images: [
      { src: '/projects/project-name/01.webp', alt: '', caption: '' },
    ],
  },
 */
