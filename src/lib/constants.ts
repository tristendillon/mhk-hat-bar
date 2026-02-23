export const SITE_CONFIG = {
  name: "The Manhatter Hat Bar",
  tagline: "A Custom Hat Bar from The Lil Apple",
  description:
    "Book a custom hat bar experience for your party, wedding, fundraiser, or pop-up event. Premium quality hats, one-of-a-kind designs from The Little Apple.",
  email: "hello@manhatterhatbar.com",
  instagram: "@manhatterhatbar",
  instagramUrl: "https://instagram.com/manhatterhatbar",
  location: "Manhattan, Kansas",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
] as const;

export type EventType = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const EVENT_TYPES: EventType[] = [
  {
    id: "private-events",
    title: "Private Events",
    description: "Exclusive hat bar experiences for your gathering",
    icon: "Users",
  },
  {
    id: "pop-ups",
    title: "Pop-Up Events",
    description: "We bring the hat bar to markets, festivals & venues",
    icon: "MapPin",
  },
  {
    id: "parties",
    title: "Parties",
    description: "Birthdays, bachelorettes, girls' nights, and more",
    icon: "PartyPopper",
  },
  {
    id: "fundraisers",
    title: "Fundraisers",
    description: "Fun, interactive fundraising with custom hat creation",
    icon: "Heart",
  },
  {
    id: "weddings",
    title: "Weddings",
    description: "Unique bridal party & guest hat customization experiences",
    icon: "Sparkles",
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description: "Team building and brand activations",
    icon: "Building2",
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Pick Your Hat",
    description: "Choose from a curated selection of premium hat styles",
  },
  {
    step: 2,
    title: "Customize It",
    description: "Add bands, pins, patches, embroidery, and more",
  },
  {
    step: 3,
    title: "Wear It Forever",
    description: "Walk away with a one-of-a-kind hat made by you",
  },
] as const;

export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=600&h=600&fit=crop",
    alt: "Custom hat with decorative band",
  },
  {
    src: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=600&h=600&fit=crop",
    alt: "Hat customization event",
  },
  {
    src: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=600&h=600&fit=crop",
    alt: "Stylish fedora hat",
  },
  {
    src: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&h=600&fit=crop",
    alt: "Hat collection display",
  },
  {
    src: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=600&fit=crop",
    alt: "Party celebration",
  },
  {
    src: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=600&h=600&fit=crop",
    alt: "Fashion accessories",
  },
] as const;
