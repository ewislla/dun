export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  featured?: boolean;
  startingPrice: string;
  badge?: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  vehicle: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

export interface GalleryProject {
  id: string;
  title: string;
  category: 'ceramic' | 'auto' | 'marine' | 'aircraft' | 'rv' | 'motorcycle';
  categoryLabel: string;
  vehicle: string;
  service: string;
  duration: string;
  location: string;
  beforeAfter: boolean;
  accentColor: string;
  glowColor: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'ceramic-coating',
    name: '10-Year Ceramic Coating',
    shortDesc: 'Certified military-grade 9H+ nano-ceramic crystal shield with a 10-year manufacturer warranty.',
    fullDesc:
      'Our signature service. We prep your vehicle with multi-stage paint decontamination, compound correction, and bond a 10-year high-density Si02 ceramic shield. Blocks salt air, UV oxidation, bird etchings, and delivers unbelievable liquid wet gloss.',
    icon: 'ShieldCheck',
    featured: true,
    badge: 'FLAGSHIP PROTECTION',
    startingPrice: '$895',
    features: [
      '10-Year Transferable Warranty',
      '9H+ Diamond Hardness Scratch Resistance',
      'Ultra Hydrophobic Water & Dirt Beading',
      'Salt Air & Marine UV Defense',
      'Includes Full 2-Stage Paint Correction',
    ],
  },
  {
    id: 'auto-detailing',
    name: 'Mobile Auto Detailing',
    shortDesc: 'Showroom-grade paint correction, interior steam extraction, and exterior refinement at your driveway.',
    fullDesc:
      'From daily drivers to exotic supercars and heavy-duty trucks. We bring our own DI deionized spot-free water, commercial extractors, and paint depth gauges directly to you.',
    icon: 'Car',
    startingPrice: '$185',
    features: [
      'Deionized Spot-Free Pressure Wash',
      'Clay Bar & Iron Fallout Decontamination',
      'Hot Water Interior Carpet & Seat Steam Extraction',
      'Leather Conditioning & Matte UV Dressing',
      'Machine Polish Clearcoat Enhancement',
    ],
  },
  {
    id: 'watercraft',
    name: 'Marine & Watercraft Detailing',
    shortDesc: 'Gelcoat oxidation buffing, ceramic hull protection, and non-skid deck revival at dock or marina.',
    fullDesc:
      'Serving Topsail Island, Surf City, Sneads Ferry, and coastal marinas. We cut through heavy salt oxidation, polish dull gelcoats to a mirror reflection, and seal your boat against saltwater brine.',
    icon: 'Anchor',
    startingPrice: '$25/ft',
    features: [
      'Heavy Rotary Gelcoat Oxidation Cut',
      'Marine Grade Ceramic Sealer',
      'Non-Skid Deck Deep Scrub & Seal',
      'Brightwork Stainless Steel Polish',
      'Mildew & Salt Brine Neutralization',
    ],
  },
  {
    id: 'aircraft',
    name: 'Aircraft & Aviation Detailing',
    shortDesc: 'FAA-safe single & twin-engine aircraft washing, de-bugging, and brightwork mirror restoration.',
    fullDesc:
      'Specialized aviation detailing at regional hangars and coastal airstrips. We safely strip bugs from leading edges, machine-polish aluminum spinners and cowlings, and apply aerodynamic hydrophobic sealants.',
    icon: 'Plane',
    startingPrice: 'Custom Quote',
    features: [
      'Aviation Certified pH-Neutral Cleaners',
      'Leading Edge & Propeller Mirror Polish',
      'Plexiglas & Windshield Optical Clarity',
      'Composite Fuselage UV Ceramic Barrier',
      'On-Site Hangar Mobile Service',
    ],
  },
  {
    id: 'rv-motorhome',
    name: 'RV & Motorcoach Care',
    shortDesc: 'Class A, B & C motorhome oxidation removal, roof resealing, and full exterior gloss revival.',
    fullDesc:
      'Don’t let coastal sun chalk and ruin your RV’s fiberglass. We bring industrial scaffolding and high-power rotaries directly to your driveway, campground, or RV storage facility.',
    icon: 'Truck',
    startingPrice: '$30/ft',
    features: [
      'Full Fiberglass Compound & Machine Polish',
      'Rubber & TPO Roof UV Wash & Seal',
      'Awning & Slide-Out Decontamination',
      'Wheel & Tire Chrome Brightening',
      'Long-Term Sun & Heat Ceramic Barrier',
    ],
  },
  {
    id: 'motorcycles',
    name: 'Motorcycles & Powersports',
    shortDesc: 'Intricate chrome detailing, engine degrease, spoke restoration, and custom paint correction.',
    fullDesc:
      'Craftsman detailing for Harley-Davidsons, sportbikes, and custom cruisers. We meticulously hand-polish chrome exhausts, clean hard-to-reach cooling fins, and ceramic coat the fuel tank and fairings.',
    icon: 'Flame',
    startingPrice: '$165',
    features: [
      'Precision Chrome & Billet Aluminum Polish',
      'High-Temperature Exhaust Ceramic Shield',
      'Delicate Engine Fin De-greasing',
      'Leather Saddlebag Deep Conditioning',
      'Fairing & Tank Swirl Mark Removal',
    ],
  },
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'proj-1',
    title: '10-Year Ceramic Coating on Corvette Z06',
    category: 'ceramic',
    categoryLabel: 'Ceramic Coating',
    vehicle: '2023 Chevrolet Corvette Z06 (Carbon Flash Metallic)',
    service: '2-Stage Paint Correction + 10-Yr 9H Ceramic Coating',
    duration: '8 Hours',
    location: 'Holly Ridge, NC',
    beforeAfter: true,
    accentColor: '#ff007f',
    glowColor: 'rgba(255, 0, 127, 0.5)',
  },
  {
    id: 'proj-2',
    title: '32ft Contender Center Console Marine Revival',
    category: 'marine',
    categoryLabel: 'Watercraft',
    vehicle: '32ft Contender Center Console Twin Yamaha',
    service: 'Heavy Gelcoat Oxidation Cut + Marine Ceramic Seal',
    duration: '12 Hours',
    location: 'Surf City Marina, NC',
    beforeAfter: true,
    accentColor: '#00f0ff',
    glowColor: 'rgba(0, 240, 255, 0.45)',
  },
  {
    id: 'proj-3',
    title: 'Porsche 911 GT3 RS Swirl Removal & Gloss',
    category: 'auto',
    categoryLabel: 'Auto Detailing',
    vehicle: '2024 Porsche 911 GT3 (Shark Blue)',
    service: 'Multi-Stage Paint Correction + Ceramic Boost',
    duration: '7 Hours',
    location: 'Topsail Island, NC',
    beforeAfter: true,
    accentColor: '#ff007f',
    glowColor: 'rgba(255, 0, 127, 0.45)',
  },
  {
    id: 'proj-4',
    title: 'Beechcraft Bonanza G36 Brightwork Polish',
    category: 'aircraft',
    categoryLabel: 'Aircraft',
    vehicle: 'Beechcraft Bonanza G36 Private Aircraft',
    service: 'Fuselage De-bugging + Chrome Spinner Polish',
    duration: '9 Hours',
    location: 'Coastal Regional Hangar, NC',
    beforeAfter: false,
    accentColor: '#00f0ff',
    glowColor: 'rgba(0, 240, 255, 0.4)',
  },
  {
    id: 'proj-5',
    title: 'Harley-Davidson Road Glide CVO Custom Detail',
    category: 'motorcycle',
    categoryLabel: 'Motorcycles',
    vehicle: '2023 Harley-Davidson CVO Road Glide',
    service: 'Full Chrome Micro-Buff + Ceramic Tank Armor',
    duration: '5 Hours',
    location: 'Jacksonville, NC',
    beforeAfter: false,
    accentColor: '#ff007f',
    glowColor: 'rgba(255, 0, 127, 0.4)',
  },
  {
    id: 'proj-6',
    title: '42ft Newmar Dutch Star Luxury RV Restoration',
    category: 'rv',
    categoryLabel: 'RV & Motorcoach',
    vehicle: '42ft Newmar Dutch Star Class A Motorhome',
    service: 'Full Exterior Oxidation Removal & Roof Seal',
    duration: '16 Hours',
    location: 'Hampstead, NC',
    beforeAfter: true,
    accentColor: '#00f0ff',
    glowColor: 'rgba(0, 240, 255, 0.4)',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Captain Marcus Vance',
    location: 'Surf City / Topsail Island, NC',
    vehicle: '34ft Boston Whaler & Ford F-250',
    rating: 5,
    date: '3 weeks ago',
    text: 'Troy has been taking care of my boat and truck for years. The salt air out here eats through clearcoat in months if you don’t protect it. His 10-year ceramic coating on my F-250 still beads water like glass 2 years later. He shows up right to the dock on time with his own water and gear. 20 years of experience speaks for itself.',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Garrett Hollingsworth',
    location: 'Holly Ridge, NC',
    vehicle: '2023 Cadillac Escalade V',
    rating: 5,
    date: '1 month ago',
    text: 'Dun-Rite is the only detailing business I let touch my vehicles. Troy performed a 2-stage paint correction and 10-year ceramic coating in my own driveway while I worked from home. The black paint looks deeper than the day it left the showroom. Honest, hardworking craftsman.',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Major Dale S. (USMC Ret.)',
    location: 'Jacksonville, NC',
    vehicle: 'Harley-Davidson Street Glide & Lexus RX',
    rating: 5,
    date: '2 months ago',
    text: 'Troy’s attention to detail is military-grade precision. Every spoke, exhaust pipe, and leather stitch on my Harley was spotless. The chrome literally looks like liquid mercury. He is proud of his craft and it shows in every square inch.',
    verified: true,
  },
  {
    id: 'rev-4',
    name: 'Brenda & Tom Kelly',
    location: 'Sneads Ferry, NC',
    vehicle: '38ft Jayco Class A Motorcoach',
    rating: 5,
    date: '3 months ago',
    text: 'Our RV was badly oxidized on the sunny side after sitting through summer. Troy spent two full days bringing the fiberglass back to life. You can see your reflection in the sides now. Worth every penny to protect a major investment.',
    verified: true,
  },
];

export const SERVICE_AREAS = [
  { name: 'Holly Ridge, NC', radius: 'Home Base (Immediate)', zip: '28445' },
  { name: 'Surf City, NC', radius: '5 miles · Coastal Marina Service', zip: '28445' },
  { name: 'Topsail Island / Beach', radius: '8 miles · On-site Beachside Detailing', zip: '28445' },
  { name: 'North Topsail Beach', radius: '10 miles · Full Mobile Coverage', zip: '28460' },
  { name: 'Sneads Ferry, NC', radius: '8 miles · Dockside & Driveway', zip: '28460' },
  { name: 'Hampstead, NC', radius: '14 miles · Mobile Units Equipped', zip: '28443' },
  { name: 'Jacksonville & Camp Lejeune', radius: '18 miles · Onslow County Service', zip: '28540' },
  { name: 'Wilmington & Porters Neck', radius: '25 miles · Scheduled Projects', zip: '28411' },
];
