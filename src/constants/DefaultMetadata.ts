import { Metadata, Viewport } from 'next';

export const title = {
  default: 'Mazzerx - Innovative Digital Solutions', // Make default title more descriptive
  template: '%s | Mazzerx' // Consistent template
};

export const description =
  'Mazzerx crafts the future of digital innovation. Specializing in cutting-edge AI, immersive XR experiences, dynamic web solutions, and advanced MedTech applications.';

// Use a high-quality, representative thumbnail image (ensure path is correct)
// Use an absolute URL if deployed, especially for social sharing
const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://mayukhdeep.netlify.app'; // Fallback for local dev
export const images = `${SITE_URL}/images/mazzerx-thumbnail.webp`; // Example path

/**
 * Default Metadata for the website
 */
export const METADATA: Metadata = {
  metadataBase: new URL(SITE_URL), // Essential for resolving relative paths
  title,
  description,
  // Favicons - ensure these files exist in your public/favicons directory
  icons: [
    { rel: 'apple-touch-icon', url: '/favicons/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicons/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicons/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', url: '/favicons/favicon-96x96.png' }, // Common size
    { rel: 'shortcut icon', url: '/favicon.ico' } // Fallback ico
    // Consider adding a maskable icon for PWAs:
    // { rel: 'mask-icon', url: '/favicons/safari-pinned-tab.svg', color: '#0a68f0' } // Example color
  ],
  manifest: '/site.webmanifest', // Link to your web app manifest
  alternates: {
    canonical: '/' // Canonical URL for the homepage
    // languages: { // Add if supporting multiple languages
    //   'en-US': '/',
    //   'es-ES': '/es',
    // },
  },
  keywords: [
    // Broad terms
    'Digital Agency',
    'Software Development',
    'Technology Solutions',
    // Specific services
    'AI Development',
    'Artificial Intelligence',
    'Machine Learning',
    'Generative AI',
    'Web Design',
    'Web Development',
    'Next.js Development',
    'React Development',
    'Augmented Reality',
    'Virtual Reality',
    'XR Development',
    'Immersive Experiences',
    'MedTech',
    'Medical AI',
    'Healthcare Technology',
    // Business related
    'Innovation',
    'Digital Transformation',
    'Custom Software',
    'UI/UX Design',
    // Your brand name
    'Mazzerx'
    // Location (if relevant)
    // 'Based in [City/Country]'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US', // Specify locale
    url: SITE_URL, // Base URL for Open Graph
    siteName: 'Mazzerx', // Site name
    title, // Use the title object defined above
    description,
    images: [
      // Provide image details
      {
        url: images, // Use the defined images variable
        width: 1200, // Standard OG width
        height: 630, // Standard OG height
        alt: 'Mazzerx Digital Innovation Agency' // Descriptive alt text
      }
    ]
  },
  twitter: {
    card: 'summary_large_image', // Recommended card type for visuals
    // Optional: Add your Twitter handle
    // site: '@MazzerxHQ', // Your company's Twitter handle
    // creator: '@YourLeadDevHandle', // Handle of the content creator or company lead
    title, // Use the title object
    description,
    images: images // Use the defined images variable (Twitter often uses the OG image)
  },
  // Optional: Verification tags for search consoles
  // verification: {
  //   google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  //   yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
  //   other: {
  //     'msvalidate.01': 'YOUR_BING_VERIFICATION_CODE',
  //   },
  // },
  category: 'Technology', // Broad category
  creator: 'Mazzerx Team', // Or specific lead name
  publisher: 'Mazzerx', // Publisher name (usually the company)
  authors: [{ name: 'Mazzerx', url: SITE_URL }], // Can list multiple authors/contributors
  robots: {
    // Define indexing and following rules
    index: true, // Allow indexing
    follow: true, // Allow following links
    googleBot: {
      // Specific rules for Googlebot (optional)
      index: true,
      follow: true,
      'max-image-preview': 'large', // Allow large image previews
      'max-snippet': -1, // Allow long snippets
      'max-video-preview': -1 // Allow video previews
    }
  },
  referrer: 'origin-when-cross-origin', // Recommended referrer policy
  generator: 'Next.js' // Identify the framework used
};

/**
 * Default Viewport settings
 */
export const VIEW_PORT: Viewport = {
  themeColor: [
    // Provide light and dark theme colors
    { media: '(prefers-color-scheme: light)', color: '#ffffff' }, // Light mode theme color
    { media: '(prefers-color-scheme: dark)', color: '#000000' } // Dark mode theme color (adjust if needed)
  ],
  colorScheme: 'light dark', // Support both color schemes
  width: 'device-width', // Standard viewport width
  initialScale: 1, // Default zoom level
  maximumScale: 5 // Allow user zooming
  // userScalable: true, // Already true by default if maximumScale > 1
};
