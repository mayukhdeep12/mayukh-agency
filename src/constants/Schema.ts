import { Graph, Organization, Person, Service, WithContext } from 'schema-dts';

// Import needed types
import { ProjectProperties } from '@/types';

// Ensure path is correct
import {
  description as defaultDescription,
  images as defaultImages,
  title as defaultTitle
} from './DefaultMetadata';

// Import defaults

// Define SITE_URL consistently
const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://mayukhdeep.netlify.app';

// --- Organization Schema (Reusable) ---
const MAZZERX_ORGANIZATION: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Mazzerx',
  url: SITE_URL,
  logo: `${SITE_URL}/images/mazzerx-logo.png`, // Ensure you have a logo image
  // Optional: Add contact point, address, etc.
  // contactPoint: {
  //     '@type': 'ContactPoint',
  //     telephone: '+1-555-MAZZERX',
  //     contactType: 'Customer Service'
  // },
  sameAs: [
    // Links to social profiles or official pages
    // 'https://www.linkedin.com/company/mazzerx',
    // 'https://twitter.com/MazzerxHQ',
    // Add other relevant profiles
  ]
};

// --- Home Page Schema ---
const HomePageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    // Define the Organization once
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Mazzerx',
      url: SITE_URL,
      logo: `${SITE_URL}/images/mazzerx-logo.png`,
      sameAs: []
    },
    // Define the main Website
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: defaultTitle.default,
      description: defaultDescription,
      publisher: { '@id': `${SITE_URL}/#organization` }, // Reference the organization
      inLanguage: 'en-US'
    },
    // Define the main WebPage (Homepage)
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`, // Unique ID for the homepage webpage node
      url: SITE_URL,
      name: defaultTitle.default, // Or a specific H1 title for the homepage
      description: defaultDescription,
      isPartOf: { '@id': `${SITE_URL}/#website` }, // Link it to the Website node
      primaryImageOfPage: {
        // Link to the main image
        '@type': 'ImageObject',
        url: defaultImages // Use the main thumbnail
      },
      inLanguage: 'en-US'
    }
  ]
};

export const HOME_SCHEMA = JSON.stringify(HomePageSchema, null, 2); // Use null, 2 for pretty printing if debugging

// --- Service (Project) Page Schema Generator ---
export const getProjectSchema = (project: ProjectProperties): string => {
  const projectUrl = `${SITE_URL}/projects/${project.slug}`;

  // Generate description from the first section, fallback to default
  const serviceDescription =
    project.detailedContent?.sections?.[0]?.paragraph || defaultDescription;

  // Use the project image, fallback to default site image
  const serviceImage = project.image?.src || defaultImages;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      // Reference the main Organization
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Mazzerx',
        url: SITE_URL,
        logo: `${SITE_URL}/images/mazzerx-logo.png`,
        sameAs: []
      },
      // Define the Service
      {
        '@type': 'Service',
        '@id': `${projectUrl}#service`, // Unique ID for this service node
        name: project.name,
        description: serviceDescription,
        url: projectUrl,
        image: serviceImage,
        serviceType: project.tags?.[0] || project.name, // Use first tag or name as type hint
        provider: { '@id': `${SITE_URL}/#organization` } // Link to the provider Organization
      },
      // Define the WebPage for this specific service
      {
        '@type': 'WebPage',
        '@id': `${projectUrl}#webpage`, // Unique ID for this specific webpage node
        url: projectUrl,
        name: `${project.name} Service Details`, // Specific title for the webpage node
        description: serviceDescription, // Can be the same as the service description
        isPartOf: { '@id': `${SITE_URL}/#website` }, // Part of the main website
        primaryImageOfPage: {
          // Link to the relevant image
          '@type': 'ImageObject',
          url: serviceImage
        },
        inLanguage: 'en-US',
        // Link the main content of the page to the Service definition
        mainEntity: { '@id': `${projectUrl}#service` }
      }
    ]
  };

  return JSON.stringify(schema, null, 2); // Pretty print for readability during debug
};
