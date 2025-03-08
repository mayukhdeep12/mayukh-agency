import { Metadata, Viewport } from 'next';

export const title = {
  default: 'Mazzerx',
  template: '%s - Mazzerx'
};

export const description =
  'Crafting the future of digital innovation. From cutting-edge AI to immersive XR and dynamic web solutions.';

export const images = '/images/thumbnail.webp';

/**
 * Default Metadata for the website
 */
export const METADATA: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://mayukhdeep.netlify.app'),
  title,
  description,
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/favicons/apple-touch-icon.png',
      sizes: '180x180 '
    },
    {
      rel: 'shortcut icon',
      url: '/favicon.ico',
      type: 'image/x-icon'
    },
    {
      rel: 'icon',
      url: '/favicons/favicon-32x32.png',
      type: 'image/png',
      sizes: '32x32'
    },
    {
      rel: 'icon',
      url: '/favicons/favicon-16x16.png',
      type: 'image/png',
      sizes: '16x16'
    },
    {
      rel: 'icon',
      url: '/favicons/favicon-96x96.png',
      type: 'image/png',
      sizes: '48x48'
    },
    {
      rel: 'icon',
      url: '/favicons/favicon-96x96.png',
      type: 'image/png',
      sizes: '96x96'
    }
  ],
  alternates: { canonical: '/' },
  keywords: [
    'Front-End',
    'Mayukhdeep',
    'Web Design',
    'Development',
    'Next.js',
    'GSAP Animation',
    'Web Performance',
    'Web Developer',
    'Software Engineering',
    'Creative Coding',
    'Freelancer'
  ],
  openGraph: {
    type: 'website',
    countryName: 'India',
    title,
    description,
    images
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@MayukhdeepM',
    site: process.env.NEXT_PUBLIC_APP_URL || 'https://mayukhdeep.netlify.app',
    title,
    description,
    images
  },
  category: 'Agency',
  creator: 'Mayukhdeep',
  authors: {
    name: 'Drish',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://mayukhdeep.netlify.app'
  },
  robots: { index: true, follow: true },
  referrer: 'origin-when-cross-origin',
  generator: 'Next.js'
};

export const VIEW_PORT: Viewport = {
  initialScale: 1,
  themeColor: 'black',
  colorScheme: 'dark',
  width: 'device-width'
};
