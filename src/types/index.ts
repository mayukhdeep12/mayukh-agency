// Define the structure for the image object
export interface ImageObject {
  src: string;
  alt: string;
  base64: string; // For blur placeholder
}

// Define the structure for a section within detailedContent
export interface DetailedContentSection {
  subheading: string;
  paragraph: string;
  // image?: ImageObject; // Uncomment if sections can have images
}

// Define the structure for the detailed content
export interface DetailedContent {
  sections: DetailedContentSection[];
}

// Define the main structure for a Project/Service
export interface ProjectProperties {
  name: string;
  slug: string;
  tags: string[];
  image: ImageObject;
  detailedContent: DetailedContent;
  // Optional fields you might have:
  // index?: number; // For ordering
  // mdx?: string; // If you were using MDX content
  // publishedDate?: string; // ISO date string
  // updatedDate?: string; // ISO date string
  // shortDescription?: string; // For list views
}

// You might have other types here, e.g., for Content fetched from getContent
export interface ContentData {
  about: string[];
  review: string[]; // Assuming 'review' meant skills or testimonials
  navLinks: Record<string, string>;
  contactLinks: Record<string, string>;
  otherLinks: Record<string, string>;
}
