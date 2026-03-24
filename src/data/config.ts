/* ═══════════════════════════════════════════════
   CAKISH — Site Configuration
   All editable content, pricing, and brand data.
   ═══════════════════════════════════════════════ */

export const brand = {
  name: 'Cakish',
  tagline: 'Crafted for meaningful moments',
  url: 'https://cakish.ie',
  email: 'hello@cakish.ie',
  instagram: '@cakish.ie',
  instagramUrl: 'https://instagram.com/cakish.ie',
  description:
    'A premium home bakery brand specialising in elegant pavlova centrepieces for birthdays, communions, intimate events, and refined gatherings.',
};

export const nav = {
  links: [
    { label: 'Home', href: '/' },
    { label: 'Order', href: '/order' },
    { label: 'Our Story', href: '/story' },
  ],
};

export const hero = {
  headline: 'The Modern Pavlova',
  subtitle: 'A contemporary centrepiece — sculptural, seasonal, designed to be remembered.',
};

export const productIntro = {
  eyebrow: 'The Signature',
  heading: 'The Cakish Modern Pavlova',
  body: 'Not a traditional pavlova. A contemporary reinterpretation — built on a crisp, marshmallow-centred meringue base, finished with hand-piped cream architecture and seasonal fruit arranged with editorial precision. Every pavlova is made fresh to order, designed to hold the table.',
};

export const occasions = {
  heading: 'Made For',
  items: [
    { name: 'Birthdays', description: 'A centrepiece that feels as considered as the celebration itself.' },
    { name: 'Communions', description: 'Quietly elegant. Perfectly scaled for the occasion.' },
    { name: 'Intimate Gatherings', description: 'For the kind of evening where every detail matters.' },
    { name: 'Elegant Hosting', description: 'When you want the table to say something before a word is spoken.' },
    { name: 'Meaningful Celebrations', description: 'Milestones deserve something made, not bought.' },
  ],
};

export const finishes = [
  {
    id: 'strawberry-floral',
    name: 'Strawberry Floral Finish',
    shortName: 'Strawberry Floral',
    description:
      'Whole strawberries and seasonal berries arranged in a sculpted floral pattern, finished with micro-herbs and edible petals.',
    surcharge: 8,
  },
  {
    id: 'patisserie-sliced',
    name: 'Patisserie Sliced Finish',
    shortName: 'Patisserie Sliced',
    description:
      'Precisely sliced seasonal fruit layered in clean geometric lines — a polished, contemporary presentation.',
    surcharge: 0,
  },
];

export const sizes = [
  { id: '6', label: '6″', serves: '6–8', price: 45 },
  { id: '8', label: '8″', serves: '10–14', price: 55 },
  { id: '12', label: '12″', serves: '20–24', price: 75 },
];

export const fulfilment = {
  heading: 'Collection',
  primary: 'All orders are collected fresh from our kitchen in South Dublin.',
  dublin: 'Dublin city collection is available on selected dates.',
  delivery: 'Delivery is not currently offered — freshness is everything.',
  note: 'Collection details are confirmed when your order is placed.',
};

export const availability = {
  heading: 'Availability',
  body: 'Each pavlova is made fresh to order. We take a limited number of orders each week to ensure every piece receives full attention.',
  cta: 'Reserve Yours',
};

export const storyTeaser = {
  eyebrow: 'The Story',
  heading: 'Built from a home kitchen. Designed for your table.',
  body: 'Cakish began with one question — what if a pavlova could feel like a gift? What started as a personal obsession with meringue architecture became something worth sharing.',
  cta: 'Read Our Story',
};

export const story = {
  hero: {
    eyebrow: 'Our Story',
    heading: 'A pavlova worth building a brand around.',
  },
  origin: {
    heading: 'How It Started',
    paragraphs: [
      "Cakish didn't begin with a business plan. It began with a pavlova that stopped a table. A birthday. A homemade centrepiece. The kind of reaction that makes you think — this is something.",
      'What started as a personal challenge — to build the most beautiful, most structurally ambitious pavlova possible — became a quiet obsession. The meringue base had to be right: crisp shell, marshmallow centre, the kind of shatter that means it was baked properly. The cream had to be architectural, not decorative. The fruit had to be placed, not scattered.',
      'Cakish is the result of that obsession refined into a product. Every pavlova is made fresh in a home kitchen in South Dublin, built by hand, and designed to hold a table the way a centrepiece should.',
    ],
  },
  process: {
    heading: 'The Process',
    steps: [
      {
        title: 'The Meringue',
        body: 'Slow-baked for texture — a crisp shell encasing a soft, marshmallow centre. No shortcuts, no stabilisers.',
      },
      {
        title: 'The Cream',
        body: 'Hand-piped fresh cream, structured for height and proportion. Not a topping — an architecture.',
      },
      {
        title: 'The Finish',
        body: 'Seasonal fruit, micro-herbs, edible flowers — arranged with editorial precision. Every pavlova is finished differently.',
      },
    ],
  },
  values: {
    heading: 'What Matters',
    items: [
      { title: 'Freshness', body: 'Made to order, never in advance. Every pavlova is built the day before collection.' },
      { title: 'Craft', body: 'Handmade means handmade. No moulds, no assembly lines, no mass production.' },
      { title: 'Restraint', body: 'We do one thing. We do it well. A curated offer means every order gets full attention.' },
    ],
  },
  closing: {
    heading: 'Ready to order?',
    body: 'Reserve your Cakish Modern Pavlova for your next occasion.',
    cta: 'Place Your Order',
  },
};

export const footer = {
  tagline: 'Premium pavlova centrepieces, handcrafted in Dublin.',
  legal: `© ${new Date().getFullYear()} Cakish. All rights reserved.`,
};
