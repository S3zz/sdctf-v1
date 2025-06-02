export interface BlogPost {
  id: number;
  title: string;
  author: string;
  authorImage?: string;
  date: string;
  category: string;
  tags?: string[];
  excerpt: string;
  content: string;
  coverImage: string;
  featured?: boolean;
}