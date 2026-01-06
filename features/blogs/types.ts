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

export interface BlogCardProps extends BlogItem {}

export interface MediumFeedResponse {
  items: BlogItem[];
}

