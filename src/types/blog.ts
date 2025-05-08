// src/types/blog.ts
export interface RelatedArticle {
    title: string;
    slug: string;
    image: string;
  }
  
  export interface BlogPost {
    title: string;
    slug: string;
    author: string;
    date: string;
    readTime: number;
    views: string;
    excerpt: string;
    coverImage: string;
    tags: string[];
    relatedArticles: RelatedArticle[];
  }