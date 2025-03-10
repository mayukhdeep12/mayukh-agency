import type { EntryFieldTypes, EntrySkeletonType } from 'contentful';

export interface MousePosition {
  x?: number;
  y?: number;
}

export interface TransitionContextProps {
  isPending: boolean;
  pageEnter: () => Promise<void>;
  pageExit: (href: string) => Promise<void>;
}

// Contentful types

// Content Types (About | Skills | Links)
export type LinkObject = {
  label: string;
  value: string;
};
export interface Content {
  name?: EntryFieldTypes.Symbol;
  about?: EntryFieldTypes.Text;
  review?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  navLinks: EntryFieldTypes.Object<{ data: string[] }>;
  contacts: EntryFieldTypes.Object<{ [key: string]: LinkObject[] }>;
  otherLinks: EntryFieldTypes.Object<{ spotify: string }>;
}

export type ContentSkeleton = EntrySkeletonType<Content, 'content'>;

// Projects Types
export interface ProjectCards {
  index: EntryFieldTypes.Integer;
  name: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  image?: EntryFieldTypes.AssetLink;
  tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export interface Project extends ProjectCards {
  mdx?: EntryFieldTypes.Text;
  github?: EntryFieldTypes.Symbol;
  live?: EntryFieldTypes.Symbol;
}

export type ProjectsSkeleton = EntrySkeletonType<ProjectCards, 'projects'>;

export type ProjectSkeleton = EntrySkeletonType<Project, 'projects'>;

export interface ProjectProperties {
  name: string;
  slug: string;
  tags?: string[];
  image: {
    src: string;
    alt?: string;
    base64?: string;
  };
  mdx?: string;
  github?: string;
  live?: string;
}
