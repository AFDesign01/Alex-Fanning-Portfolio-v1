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
 *   color/ink   the project's colour block and the text colour that sits on it
 *   card        product shot for the shelf card (1200x800)
 *   order       position on the shelf (1 = first)
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
    order: 4,
    color: '#e0262b',
    ink: '#ffffff',
    card: '/projects/venom-vape/venom-card.webp',
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
    order: 6,
    color: '#4c63b6',
    ink: '#ffffff',
    card: '/projects/vital-bloom/vital-bloom-card.webp',
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
    order: 5,
    color: '#00aeee',
    ink: '#0b1a2b',
    card: '/projects/fresh/fresh-card.webp',
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
    order: 3,
    color: '#f2b705',
    ink: '#1a1405',
    card: '/projects/ivg-pro/ivgpro-card.webp',
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
    order: 2,
    color: '#f2711c',
    ink: '#1a0d03',
    card: '/projects/ivg-galaxy-dual/galaxy-card.webp',
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
  {
    slug: 'ivg-go-plus',
    order: 1,
    color: '#1fa65a',
    ink: '#ffffff',
    card: '/projects/ivg-go-plus/goplus-card.webp',
    name: 'IVG Go Plus',
    type: 'client',
    client: 'I Vape Great (IVG)',
    eyebrow: 'PACKAGING / REDESIGN',
    intro: 'A packaging redesign for the IVG Go Plus, a new 2ml device for Spain, across eight flavours.',
    brief: 'Design packaging for a new 2ml device for Spain, redesigning the existing Go Plus pack.',
    beforeAfter: {
      before: { src: '/projects/ivg-go-plus/goplus-before-front.webp', alt: 'Original IVG Go Plus Cherry pack, front panel', caption: 'Before' },
      after: { src: '/projects/ivg-go-plus/goplus-after-front.webp', alt: 'Redesigned IVG Go Plus Cherry pack for Spain, front panel', caption: 'After' },
    },
    sections: [
      {
        title: 'WHY THE REDESIGN WORKS',
        points: [
          'The flavour reads first. On the original pack the flavour sits in small type in a band near the bottom of the front. The redesign sets it in large, bold capitals directly above the warning panel, so it reads at a glance and from a distance on shelf.',
          'Stronger, flavour-led colour. The original Cherry pack used a muted salmon and brick-red gradient. The redesign uses a solid, saturated flavour colour, and every flavour in the range gets its own, such as yellow for Banana, red for Cherry and green for Mint, so the eight packs work as a colour-coded range and shoppers can find their flavour quickly.',
          'A clearer front. The original runs one continuous gradient behind the device, so product and background blend together. The redesign splits the front into clear zones: the logo, the device on a light patterned panel, a solid colour band and the flavour name, so each element has its own space.',
          'A brand pattern with personality. The curved smile shapes from the go logo become a repeating pattern, tinted to each flavour, and carry onto the side panels. It gives the range a friendly, recognisable look that the plain gradient of the original lacked.',
          'One system for the whole range. Every box shares the same layout and only the colour and flavour name change, so new flavours can be added quickly and the range always looks consistent.',
        ],
      },
    ],
    images: [
      { src: '/projects/ivg-go-plus/goplus-hero.webp', alt: 'IVG Go Plus logo on a patterned mint background' },
      { src: '/projects/ivg-go-plus/goplus-boxes.webp', alt: 'Redesigned IVG Go Plus boxes: Banana, Blueberry Raspberry Lemon, Cherry, Mint, Lemon Lime, Blackcurrant Cherry, Strawberry Lemon and Tobacco' },
      { src: '/projects/ivg-go-plus/goplus-before-dieline.webp', alt: 'Dieline of the original IVG Go Plus Cherry pack', caption: 'Before: the original Cherry pack as a flat dieline.' },
      { src: '/projects/ivg-go-plus/goplus-after-dieline.webp', alt: 'Dieline of the redesigned IVG Go Plus Cherry pack', caption: 'After: the redesigned Cherry pack for Spain as a flat dieline.' },
      { src: '/projects/ivg-go-plus/goplus-afd.webp', alt: 'AFD logo' },
    ],
    thumb: '/projects/ivg-go-plus/goplus-thumb.webp',
  },
];

projects.sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

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
