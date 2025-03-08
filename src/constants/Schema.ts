import { Graph } from 'schema-dts';

import { ProjectProperties } from '@/types';

import { description, images, title } from './DefaultMetadata';

const HomePage: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Mayukhdeep',
      url: process.env.NEXT_PUBLIC_APP_URL || 'https://mayukhdeep.netlify.app',
      jobTitle: 'Software Engineer',
      gender: 'male',
      image: `${process.env.NEXT_PUBLIC_APP_URL || 'https://mayukhdeep.netlify.app'}${images}`,
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'SRM Institute of Science and Technology'
      },
      sameAs: [
        'https://www.linkedin.com/in/drish-xd',
        'https://twitter.com/Drish_xD',
        'https://www.instagram.com/drish_xd/'
      ],
      knowsAbout: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Optimization', 'SEO']
    },
    {
      '@type': 'AboutPage',
      url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://mayukhdeep.netlify.app'}#about`,
      name: title.default,
      inLanguage: 'en-IN',
      description,
      creator: {
        '@type': 'Person',
        name: 'Drish',
        jobTitle: 'Software Engineer',
        url: process.env.NEXT_PUBLIC_APP_URL || 'https://mayukhdeep.netlify.app'
      }
    },
    {
      '@type': 'WebPage',
      url: process.env.NEXT_PUBLIC_APP_URL || 'https://mayukhdeep.netlify.app',
      name: title.default,
      description,
      inLanguage: 'en-IN',
      creator: {
        '@type': 'Person',
        name: 'Drish',
        jobTitle: 'Software Engineer',
        url: process.env.NEXT_PUBLIC_APP_URL || 'https://mayukhdeep.netlify.app'
      }
    }
  ]
};

export const HOME_SCHEMA = JSON.stringify(HomePage);

export const getProjectSchema = (project: ProjectProperties) => {
  const schema: Graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareSourceCode',
        name: project.name,
        url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://mayukhdeep.netlify.app'}/projects/${project.slug}`,
        image: project.image.src,
        description: project.mdx?.split('## Key Features')[0]?.trim(),
        keywords: project.tags,
        creator: {
          '@type': 'Person',
          name: 'Drish',
          jobTitle: 'Software Engineer',
          url: process.env.NEXT_PUBLIC_APP_URL || 'https://mayukhdeep.netlify.app'
        }
      }
    ]
  };

  return JSON.stringify(schema);
};
