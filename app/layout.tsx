import type { Metadata, Viewport } from 'next';
import { Archivo, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#08090c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Dun-Rite Auto Detailing NC | 10-Year Ceramic Coating & Mobile Detailing',
  description:
    'Holly Ridge NC’s premier mobile auto, marine, aircraft, and RV detailing specialist with 20 years of craftsmanship. Certified 10-year ceramic coating installer. We come to you. Cleaner. Shinier. Longer.',
  keywords: [
    'Dun-Rite Auto Detailing NC',
    'Mobile Detailing Holly Ridge NC',
    'Ceramic Coating Topsail Island',
    'Boat Detailing Surf City NC',
    'Auto Detailing Jacksonville NC',
    '10 Year Ceramic Coating',
    'Marine Detailing Sneads Ferry',
    'Aircraft Detailing NC',
    'RV Detailing Hampstead NC',
  ],
  authors: [{ name: 'Troy Woodard', url: 'https://dunriteautodetailingnc.com' }],
  openGraph: {
    title: 'Dun-Rite Auto Detailing NC | Cleaner. Shinier. Longer.',
    description:
      'Certified 10-Year Ceramic Coating and 100% Mobile Detailing for Cars, Boats, Aircraft, RVs & Motorcycles. 20 Years in Business. We come to you in Holly Ridge & Coastal NC.',
    url: 'https://dunriteautodetailingnc.com',
    siteName: 'Dun-Rite Auto Detailing NC',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dun-Rite Auto Detailing NC | Cleaner. Shinier. Longer.',
    description:
      'Certified 10-Year Ceramic Coating and 100% Mobile Detailing for Cars, Boats, Aircraft, RVs & Motorcycles. Serving Holly Ridge, Surf City, Topsail Island & Coastal NC.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoDetailing',
    name: 'Dun-Rite Auto Detailing NC',
    image: 'https://dunriteautodetailingnc.com/og-image.jpg',
    '@id': 'https://dunriteautodetailingnc.com',
    url: 'https://dunriteautodetailingnc.com',
    telephone: '+1-910-330-8045',
    email: 'troywoodard41@gmail.com',
    priceRange: '$$ - $$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '790 Hwy 50',
      addressLocality: 'Holly Ridge',
      addressRegion: 'NC',
      postalCode: '28445',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.4938,
      longitude: -77.5539,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed: [
      'Holly Ridge, NC',
      'Surf City, NC',
      'Topsail Island, NC',
      'Topsail Beach, NC',
      'North Topsail Beach, NC',
      'Sneads Ferry, NC',
      'Hampstead, NC',
      'Jacksonville, NC',
      'Camp Lejeune, NC',
      'Wilmington, NC',
    ],
    founder: {
      '@type': 'Person',
      name: 'Troy Woodard',
      jobTitle: 'Master Detailer & Owner (20 Years Experience)',
    },
    slogan: 'Cleaner. Shinier. Longer.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Mobile Detailing and Ceramic Coating Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Certified 10-Year Ceramic Coating',
            description:
              'Military-grade 9H+ nano-crystal ceramic paint protection with 10-year warranty, intense hydrophobic water beading, and mirror glass shine.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile Auto Detailing & Paint Correction',
            description:
              'Full multi-stage paint correction, swirl mark removal, interior steam sanitation, and exterior detailing brought right to your driveway.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Marine & Watercraft Detailing',
            description:
              'Gelcoat restoration, marine ceramic coating, hull de-oxidation, and vinyl protection at your dock or dry stack.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Aircraft & Aviation Detailing',
            description:
              'FAA-safe exterior wash, leading edge de-bugging, brightwork mirror polishing, and protective ceramic sealants.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'RV & Motorcoach Detailing',
            description:
              'Class A, B, and C motorhome oxidation removal, roof treatment, fiberglass restoration, and high-gloss mobile finishing.',
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className={`${archivo.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#08090c] text-slate-100 antialiased selection:bg-[#ff007f] selection:text-white min-h-screen flex flex-col font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
