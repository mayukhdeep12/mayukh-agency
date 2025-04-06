// No changes needed in the imports or data fetching logic compared to the previous full version.
// Keep the imports for Metadata, Image, notFound, Script, constants, utils, types, styles.
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Script from 'next/script';

import { METADATA, getProjectSchema } from '@/constants';
// Adjust path if needed
import { ProjectProperties } from '@/types';
// Adjust path if needed
import { getAllProjects, getSingleProject } from '@/utils/contentful';

// Ensure you have this type definition
import styles from './ProjectPage.module.scss';

export default async function Project({ params: { slug } }: { params: { slug: string } }) {
  const project = await getSingleProject(slug);

  if (!project) {
    notFound(); // Trigger 404 page
  }

  const typedProject = project as ProjectProperties;
  const { name, image, tags, detailedContent } = typedProject;
  const projectSchema = getProjectSchema(typedProject);

  return (
    // The main tag itself won't have a background set by this page's styles
    <main className={styles.project_page}>
      {/* Hero Section - Stays largely the same structure */}
      <section className={styles.hero_section}>
        <div className={styles.hero_image_wrapper}>
          <Image
            src={image.src}
            alt={image.alt || name}
            quality={90}
            sizes='(max-width: 768px) 100vw, 80vw'
            priority
            fill
            placeholder='blur'
            blurDataURL={image.base64}
            className={styles.hero_image}
          />
          {/* Gradient overlay applied via CSS */}
        </div>
        <div className={styles.hero_content}>
          <h1 className={styles.project_title}>{name}</h1>
        </div>
      </section>

      {/* Tags Section - Structure remains */}
      {tags && tags.length > 0 && (
        <section className={styles.tags_section}>
          {/* Title could be more descriptive if desired */}
          <h2>Core Focus Areas</h2>
          <Tags tags={tags} />
        </section>
      )}

      {/* Detailed Content Section - Structure remains */}
      <section className={styles.details_section}>
        <h2>Service Breakdown</h2>
        <div className={styles.detailed_content_grid}>
          {detailedContent.sections.map((section, index) => (
            // The 'article' tag gets the card styling
            <article key={index} className={styles.section_card}>
              {/* Optional: Icons could enhance modernity */}
              {/* <div className={styles.section_icon}> <YourIconComponent /> </div> */}
              <h3 className={styles.section_subheading}>{section.subheading}</h3>
              <p className={styles.section_paragraph}>{section.paragraph}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Structured Data Script - No change */}
      <Script
        id='structured-schema'
        strategy='beforeInteractive'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: projectSchema }}
      />
    </main>
  );
}

// Tags Component - No change needed in component code
function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className={styles.tags_list}>
      {tags?.map((tag, i) => (
        <li key={i} className={styles.tag_item}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

// --- Data Fetching & Metadata Functions ---
// Keep the `generateStaticParams` and `generateMetadata` functions
// exactly as they were in the previous corrected version.

export async function generateStaticParams() {
  const projects = await getAllProjects();
  if (!projects) {
    console.error('Failed to fetch projects for generateStaticParams.');
    return [];
  }
  return (projects || []).map((project) => ({ slug: project.slug }));
}

export const generateMetadata = async ({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  // Keep the full implementation from the previous answer
  // which handles fetching, 404s, description generation,
  // and setting title, keywords, openGraph, twitter, alternates.
  const { slug } = params;
  const project = await getSingleProject(slug);

  if (!project) {
    return {
      title: 'Service Not Found',
      description: 'The service page you are looking for could not be found.',
      alternates: { canonical: '/404' }
    };
  }

  const typedProject = project as ProjectProperties;
  const description =
    typedProject.detailedContent?.sections?.[0]?.paragraph ||
    METADATA.description ||
    'Detailed information about our service.';

  return {
    title: typedProject.name,
    description: description,
    keywords: [...((METADATA?.keywords as string[]) || []), ...(typedProject.tags || [])],
    openGraph: {
      title: typedProject.name,
      description: description,
      images: typedProject.image.src,
      url: `/projects/${typedProject.slug}`,
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: typedProject.name,
      description: description,
      images: typedProject.image.src
    },
    alternates: {
      canonical: `/projects/${typedProject.slug}`
    }
  };
};

// --- Build Time Configuration ---
export const dynamic = 'force-static';
export const revalidate = false; // Or set a revalidation interval if needed
