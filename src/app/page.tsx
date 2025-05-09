import { blogPosts } from "@/components/data";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "India Pakistan War 2025 – Latest News on Pakistan vs India ",
  alternates: {
    canonical: "https://www.pakindiawar.com",
  },
  description:
    "Stay updated on the Pak India War with the latest news on the Pakistan vs India War. Pakistan India Jung",
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
    title: "India Pakistan War 2025 – Latest News on Pakistan vs India War",
    description:
      "Stay updated with the latest news on India Pakistan War 2025. Get real-time updates and news on the ongoing conflict.",
    url: "https://www.pakindiawar.com",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const topPosts = sortedPosts.slice(0, 5); // Get the first 5 posts
  const otherPosts = sortedPosts.slice(5); // Get the remaining posts

  return (
    <section className="hero-post-area py-6 md:py-10 lg:py-16 mt-10">
      <div className="text-center mb-6">
        <h1 className="font-bold text-3xl">
          India Pakistan War 2025 – Latest News on Pakistan vs India Conflict
        </h1>
              <p className="text-sm w-fit md:w-[1000px] mx-auto">Stay updated on the Pak India War with the latest news on the Pakistan vs India War. Our website brings you real-time updates about the India Pakistan War 2025. Get the latest India Pakistan news and details about the War of India and Pakistan. Learn about the India and Pakistan War, PK vs India War events, and the movements of the Indian Army and Pakistan Army. Stay informed about the India Pakistan map, PK vs India War 2025, and the India-Pakistan War. Our site is your trusted source for all India Pakistan War News.

        </p>
      </div>

      <div className="container mb-[100px] mx-auto px-4">
        <div className="post-area-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="post-area-right-2 md:col-span-1 lg:col-span-3">
            <div className="post-card-wrap space-y-6">
              {topPosts.slice(1, 3).map((post) => (
                <div className="post-card" key={post.id}>
                  <div className="post-thumb rounded-md overflow-hidden aspect-[20/15]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="post-content mt-3">
                    <h2 className="title text-base sm:text-lg font-bold mt-2">
                      <HoverLink href={`/blogs/${post.slug}`}>
                        {post.title}
                      </HoverLink>
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
                <div className="swiper-slide h-full">
                  <div className="post-carousel-card card-2 text-center h-full rounded-xl overflow-hidden relative">
                    <div className="post-carousel-thumb overflow-hidden relative h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
                      <Image
                        src={topPosts[0].image}
                        alt={topPosts[0].title}
                        width={1200}
                        height={800}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center w-full h-full transition-transform hover:scale-105 duration-300"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        priority
                      />
                    </div>
                    <div className="post-carousel-content absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white">
                      <span className="card-btn bg-red-500 inline-block px-3 py-1 text-xs font-semibold text-white rounded-sm">
                        WAR
                      </span>
                      <h2 className="title text-xl sm:text-2xl md:text-3xl font-bold mt-2 md:mt-3">
                        <HoverLink href={`/blogs/${topPosts[0].slug}`} className="text-white">
                          {topPosts[0].title}
                        </HoverLink>
                      </h2>
                      <ul className="post-list flex flex-wrap items-center justify-center gap-2 md:gap-4 mt-2 md:mt-3 text-xs sm:text-sm">
                        <li className="author">
                          by <span><p className="font-medium">Amin Ahsan</p></span>
                        </li>
                        <li className="date">{topPosts[0].date}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="post-area-right-2 md:col-span-1 lg:col-span-3">
            <div className="post-card-wrap space-y-6">
              {topPosts.slice(3, 5).map((post) => (
                <div className="post-card" key={post.id}>
                  <div className="post-thumb rounded-md overflow-hidden aspect-[20/15]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="post-content mt-3">
                    <h2 className="title text-base sm:text-lg font-bold mt-2">
                      <HoverLink href={`/blogs/${post.slug}`}>
                        {post.title}
                      </HoverLink>
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
          {otherPosts.map((post) => (
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
                <div className="text-sm">
                  <span className="font-medium">{post.date}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
