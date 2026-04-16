export interface BlogItem {
  title: string;
  description: string;
  thumbnail?: string;
  categories: string[];
  link: string;
}

export interface BlogSectionProps {
  blogsData: {
    items: BlogItem[];
  };
}

export type BlogCardProps = BlogItem;

export interface MediumFeedResponse {
  items: BlogItem[];
}
