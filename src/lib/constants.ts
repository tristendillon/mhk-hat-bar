import { InstagramIcon, Mail } from '@/icons'

export const SITE_CONFIG = {
  name: 'The Manhatter Hat Bar',
  tagline: 'A Custom Hat Bar from The Lil Apple',
  description:
    'Book a custom hat bar experience for your party, wedding, fundraiser, or pop-up event. Premium quality hats, one-of-a-kind designs from The Little Apple.',
  email: 'hello@manhatterhatbar.com',
  instagram: '@manhatterhatbar',
  instagramUrl: 'https://instagram.com/manhatterhatbar',
  location: 'Manhattan, Kansas',
} as const
export const CONTACT_LINKS = [
  { label: 'Instagram', href: SITE_CONFIG.instagramUrl, icon: InstagramIcon },
  {
    label: 'Email',
    href: `mailto:${SITE_CONFIG.email}?subject=Event Inquiry — The Manhatter Hat Bar`,
    icon: Mail,
  },
] as const

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
] as const

export type EventType = {
  id: string
  title: string
  description: string
  icon: string
}

export const EVENT_TYPES: EventType[] = [
  {
    id: 'private-events',
    title: 'Private Events',
    description: 'Exclusive hat bar experiences for your gathering',
    icon: 'Users',
  },
  {
    id: 'pop-ups',
    title: 'Pop-Up Events',
    description: 'We bring the hat bar to markets, festivals & venues',
    icon: 'MapPin',
  },
  {
    id: 'parties',
    title: 'Parties',
    description: "Birthdays, bachelorettes, girls' nights, and more",
    icon: 'PartyPopper',
  },
  {
    id: 'fundraisers',
    title: 'Fundraisers',
    description: 'Fun, interactive fundraising with custom hat creation',
    icon: 'Heart',
  },
  {
    id: 'weddings',
    title: 'Weddings',
    description: 'Unique bridal party & guest hat customization experiences',
    icon: 'Sparkles',
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Team building and brand activations',
    icon: 'Building2',
  },
]

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Pick Your Hat',
    description:
      'Browse our curated selection of premium hat styles — cowboy, fedora, baseball cap, and more. Every hat is high quality and ready to be made yours.',
    image: {
      src: 'https://placehold.co/900x640',
      alt: 'A curated collection of premium hat styles on display',
    },
  },
  {
    step: 2,
    title: 'Customize It',
    description:
      'Add hat bands, pins, patches, paint, and embroidery. Our team guides you through the options so every detail reflects your style.',
    image: {
      src: 'https://placehold.co/900x640',
      alt: 'Hat being customized with decorative band and accessories',
    },
  },
  {
    step: 3,
    title: 'Wear It Forever',
    description:
      'Walk away with a completely one-of-a-kind hat made by you. Every hat tells a story — yours starts here.',
    image: {
      src: 'https://placehold.co/900x640',
      alt: 'Person proudly wearing their finished custom hat',
    },
  },
] as const

export const GALLERY_IMAGES = [
  {
    src: 'https://placehold.co/600x600',
    alt: 'Custom hat with decorative band',
  },
  {
    src: 'https://placehold.co/600x600',
    alt: 'Hat customization event',
  },
  {
    src: 'https://placehold.co/600x600',
    alt: 'Stylish fedora hat',
  },
  {
    src: 'https://placehold.co/600x600',
    alt: 'Hat collection display',
  },
  {
    src: 'https://placehold.co/600x600',
    alt: 'Party celebration',
  },
  {
    src: 'https://placehold.co/600x600',
    alt: 'Fashion accessories',
  },
] as const
