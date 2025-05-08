import React from 'react';

// Article type definition
type Article = {
  id: string;
  title: string;
  slug: string;
  image: string;
  category?: string;
  categoryColor?: string;
  date: string;
  author?: {
    name: string;
    avatar?: string;
  };
  commentCount?: number;
  featured?: boolean;
};

// Articles data with Unsplash images
const articles: Article[] = [
  {
    id: '1',
    title: 'Extraordinary Snoqualmie Falls and Seattle Tour',
    slug: 'extraordinary-snoqualmie-falls-seattle-tour',
    image: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: 'TRAVEL',
    categoryColor: 'bg-green-500',
    date: 'July 29, 2024',
    author: {
      name: 'David Bin',
    },
    commentCount: 5,
    featured: true,
  },
  {
    id: '2',
    title: '15 ways you can use your phone for productivity',
    slug: '15-ways-phone-productivity',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: 'TECH',
    categoryColor: 'bg-blue-400',
    date: 'July 29, 2024',
    author: {
      name: 'David Bin',
    },
    commentCount: 5,
  },
  {
    id: '3',
    title: 'The Power of Big Data in Discovery and Decision Making',
    slug: 'power-big-data-discovery-decision-making',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: 'LIFESTYLE',
    categoryColor: 'bg-pink-500',
    date: 'July 29, 2024',
    author: {
      name: 'David Bin',
    },
    commentCount: 5,
  },
  {
    id: '4',
    title: 'The Season Courses and Salads wow!',
    slug: 'season-courses-salads',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    date: 'July 29, 2024',
  },
  {
    id: '5',
    title: 'Laptops for Working from Remote Work',
    slug: 'laptops-remote-work',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    date: 'July 29, 2024',
  },
  {
    id: '6',
    title: 'The Power of Big Data in Discovery',
    slug: 'power-big-data-discovery',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    date: 'July 29, 2024',
  },
  {
    id: '7',
    title: 'A Guide to Animating Mobile Data',
    slug: 'guide-animating-mobile-data',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    date: 'July 29, 2024',
  },
  {
    id: '8',
    title: 'Marathon Paces for Racing Distance',
    slug: 'marathon-paces-racing-distance',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    date: 'July 29, 2024',
  },
  {
    id: '9',
    title: 'There May Be More Than You Realize',
    slug: 'more-than-you-realize',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    date: 'July 29, 2024',
  },
];

interface CategoryBadgeProps {
  category: string;
  color: string;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category, color }) => (
  <span className={`${color} text-white text-xs font-medium px-2 py-0.5 inline-block rounded`}>
    {category}
  </span>
);

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => (
  <div className="relative h-full min-h-96 rounded-lg overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70 z-10"></div>
    <img 
      alt={article.title}
      src={article.image} 
      className="object-cover absolute inset-0 w-full h-full"
    />
    
    <div className="absolute top-4 left-4 z-20">
      {article.category && (
        <CategoryBadge category={article.category} color={article.categoryColor || 'bg-gray-500'} />
      )}
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
      <h2 className="text-3xl font-bold mb-3">
        <a href={`/blog/${article.slug}`} className="hover:underline">
          {article.title}
        </a>
      </h2>
      <div className="flex items-center text-sm">
        {article.author && (
          <>
            <span>by {article.author.name}</span>
            <span className="mx-2">•</span>
          </>
        )}
        <span>{article.date}</span>
        {article.commentCount && (
          <>
            <span className="mx-2">•</span>
            <span>{article.commentCount} comments</span>
          </>
        )}
      </div>
    </div>
  </div>
);

interface MediumArticleProps {
  article: Article;
}

const MediumArticle: React.FC<MediumArticleProps> = ({ article }) => (
  <div className="mb-8">
    <div className="relative rounded-lg overflow-hidden mb-4 aspect-[4/3]">
      <img 
        alt={article.title}
        src={article.image} 
        className="object-cover absolute inset-0 w-full h-full"
      />
      {article.category && (
        <div className="absolute top-4 left-4">
          <CategoryBadge category={article.category} color={article.categoryColor || 'bg-gray-500'} />
        </div>
      )}
    </div>
    <h3 className="text-xl font-bold mb-2">
      <a href={`/blog/${article.slug}`} className="hover:underline">
        {article.title}
      </a>
    </h3>
    <div className="flex items-center text-sm text-gray-600">
      {article.author && (
        <>
          <span>by {article.author.name}</span>
          <span className="mx-2">•</span>
        </>
      )}
      <span>{article.date}</span>
      {article.commentCount && (
        <>
          <span className="mx-2">•</span>
          <span>{article.commentCount} comments</span>
        </>
      )}
    </div>
  </div>
);

interface SmallArticleProps {
  article: Article;
}

const SmallArticle: React.FC<SmallArticleProps> = ({ article }) => (
  <div className="flex items-center gap-4 mb-4">
    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
      <img 
        alt={article.title}
        src={article.image} 
        className="object-cover absolute inset-0 w-full h-full"
      />
    </div>
    <div>
      <h3 className="font-bold mb-1 text-sm">
        <a href={`/blog/${article.slug}`} className="hover:underline">
          {article.title}
        </a>
      </h3>
      <span className="text-xs text-gray-500">{article.date}</span>
    </div>
  </div>
);

const MostReadSection: React.FC = () => {
  const featuredArticle = articles.find(article => article.featured);
  const mainArticles = articles.filter(article => !article.featured).slice(0, 2);
  const sidebarArticles = articles.filter(article => !article.featured).slice(2, 8);

  return (
    <div className="max-w-6xl mx-14 px-4 py-8">
      <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-2">
        <h2 className="text-2xl font-bold">Most Read</h2>
        <a href="/blog" className="text-blue-600 hover:underline text-sm">
          See More
        </a>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left column - Featured article */}
        <div className="lg:col-span-5">
          {featuredArticle && <FeaturedArticle article={featuredArticle} />}
        </div>
        
        {/* Middle column - Medium articles */}
        <div className="lg:col-span-4">
          {mainArticles.map(article => (
            <MediumArticle key={article.id} article={article} />
          ))}
        </div>
        
        {/* Right column - Small articles */}
        <div className="lg:col-span-3">
          {sidebarArticles.map(article => (
            <SmallArticle key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogLayout: React.FC = () => {
  return (
    <MostReadSection />
  );
};

export default BlogLayout;