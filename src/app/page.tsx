import { blogPosts } from "@/components/data";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "India Pakistan War 2025 - Latest News on Pakistan India War",
  alternates: {
    canonical: "https://www.pakindiawar.com",
  },
  description:
    "Stay updated on the war of India and Pakistan 2025. PakIndiaWar.com brings you breaking news on Pakistan vs India war, India Pakistan map.",
  keywords: [
    "pak india war",
    "pakistan vs india war",
    "india pakistan",
    "india pakistan news",
    "war of india and pakistan 2025",
    "war of india and pakistan",
    "war pakistan",
    "india and pakistan news",
    "india and pakistan war",
    "india and pakistan jang",
    "pk vs india war",
    "pk vs india war 2025",
    "pk vs india war today",
    "india vs pak war today",
    "War of india and pakistan 2025",
    "India Pakistan war News",
    "India-Pakistan 2025",
    "India-Pakistan News",
    "India-Pakistan war",
    "India Pakistan map",
    "India pakistan war 2025",
    "Indian Army",
    "Pakistan Army",
  ],
  openGraph: {
    title: "India Pakistan War 2025 - Latest News on Pakistan vs India War",
    description:
      "Live updates on pk vs India war, Indian and Pakistan armies, and today's India vs Pak war. Trusted source for India Pakistan war 2025 news.",
    url: "https://www.pakindiawar.com",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const topSectionArticles = [
   {
    id: 3,
    title: "🪖 Operation Sindoor: India and Pakistan War 2025 Explained Simply",
    excerpt: "What is Operation Sindoor? We explain it in easy words for young readers.",
    link: "operation-sindoor-war-2025-explained",
    date: "May 9, 2025",
    image: "/operation-sindoor-2025.jpg",
  },
  {
    id: 4,
    title: "📍 Operation Sindoor: Strike Locations in Pakistan | India-Pakistan War 2025",
    excerpt: "Where did India attack in Pakistan during Operation Sindoor? Here's a simple list.",
    link: "operation-sindoor-strike-locations",
    date: "May 9, 2025",
    image: "/operation-sindoor-strike-map.webp",
  },
  {
    id: 5,
    title: "🚫 India Rejects Iran and Saudi Mediation, Continues Attacks on Pakistan",
    excerpt: "India says no to peace talks and keeps attacking Pakistan. What happens now?",
    link: "india-rejects-mediation-continues-war",
    date: "May 9, 2025",
    image: "/india-rejects-mediation.webp",
  },
  {
    id: 6,
    title: "📰 India-Pakistan War 2025 - Latest Updates and Tensions",
    excerpt: "Stay updated with the latest news on the 2025 India-Pakistan war.",
    link: "india-pakistan-war-2025-updates",
    date: "May 9, 2025",
    image: "/war-updates-2025.jpg",
  }
  
];

const carouselItems = [
  {
    id: 1,
    title: "🇵🇰 Pakistan India War 2025: Understanding the Tensions and Military Strength of Both Countries",
    excerpt: "A simple look at why India and Pakistan are fighting in 2025, and how strong their armies are.",
    link: "pakistan-india-war-2025-tensions-military-strength",
    date: "May 9, 2025",
    image: "/pakistan-india-war-2025.jpg",
  },
  // Add more items here as needed
];


function HoverLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${className} bg-gradient-to-r from-black to-black bg-[length:0px_3px]
        hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500`}
    >
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <section className="hero-post-area py-6 md:py-10 lg:py-16 mt-10">
      <div className="text-center mb-6">
        <h1 className="font-bold text-3xl">
          India Pakistan War 2025 – Latest News on Pakistan vs India Conflict
        </h1>
        <p className="text-sm w-fit md:w-[1000px] mx-auto">
          Stay updated on the Pak India War with the latest news on the Pakistan vs India War. Our website brings you real-time updates about the India Pakistan War 2025. Get the latest India Pakistan news and details about the War of India and Pakistan. Learn about the India and Pakistan War, PK vs India War events, and the movements of the Indian Army and Pakistan Army. Stay informed about the India Pakistan map, PK vs India War 2025, and the India-Pakistan War. Our site is your trusted source for all India Pakistan War News.
        </p>
      </div>

      <div className="container mb-[100px] mx-auto px-4">
        <div className="post-area-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:grid-rows-[auto]">
          {/* Left Column */}
          <div className="post-area-right-2 md:col-span-1 lg:col-span-3">
            <div className="post-card-wrap space-y-6">
              {topSectionArticles.slice(0, 2).map((article, index) => (
                <div key={index} className="post-card">
                  <div className="post-thumb rounded-md overflow-hidden aspect-[20/15]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="post-content mt-3">
                    <h2 className="title text-base sm:text-lg font-bold mt-2">
                      <HoverLink href={article.link}>{article.title}</HoverLink>
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Carousel */}
       <div className="post-carousel-wrap md:col-span-2 lg:col-span-6 relative order-first md:order-none mb-6 md:mb-0 h-full">
  <div className="post-carousel h-full">
    <div className="swiper-wrapper h-full">
      {carouselItems.map((item) => (
        <div key={item.id} className="swiper-slide h-full">
          <div className="post-carousel-card card-2 text-center h-full rounded-xl overflow-hidden relative">
            <div className="post-carousel-thumb overflow-hidden relative h-full min-h-[200px] sm:min-h-[300px] md:min-h-[400px]">
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-bottom w-full h-full transition-transform hover:scale-105 duration-300" 
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
              />
            </div>
            <div className="post-carousel-content absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white">
       
              <h2 className="title text-xl sm:text-2xl md:text-3xl font-bold mt-2 md:mt-3">
                <HoverLink href={item.link} className="text-white">
                  {item.title}
                </HoverLink>
              </h2>
              <ul className="post-list flex flex-wrap items-center justify-center gap-2 md:gap-4 mt-2 md:mt-3 text-xs sm:text-sm">
          
                <li className="date">{item.date}</li>
                <li className="flex items-center"><span className="mr-1">5</span></li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


          {/* Right Column */}
          <div className="post-area-right-2 md:col-span-1 lg:col-span-3">
            <div className="post-card-wrap space-y-6">
              {topSectionArticles.slice(2).map((article, index) => (
                <div key={index} className="post-card">
                  <div className="post-thumb rounded-md overflow-hidden aspect-[20/15]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="post-content mt-3">
                    <h2 className="title text-base sm:text-lg font-bold mt-2">
                      <HoverLink href={article.link}>{article.title}</HoverLink>
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Other Blogs Section */}
      <div className="mt-20 px-[30px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="p-2 hover:shadow-lg border-t-4 border-transparent hover:border-green-600 transition-all">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={300}
                className="rounded-md w-full h-40 object-cover mb-2"
              />
              <div className="p-2 mt-[-30px]">
                <h2 className="text-md font-semibold text-green-700 mb-1">
                  <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-sm text-muted-foreground mb-1">{post.excerpt}</p>
                <p className="text-xs text-muted-foreground">{post.date}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
