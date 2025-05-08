import { Card } from "@/components/ui/card";
import Image from "next/image"
import Link from "next/link"
const blogPosts = [

  {
    id: 15,
    title: "Why Are Moms Crying? India Sending Families Away",
    excerpt: "Mothers are in tears as India evacuates families from the border areas.",
    slug: "moms-crying-india-evacuates-families",
    date: "May 7, 2025",
    image: "/moms.jpg",
  },
  {
    id: 16,
    title: "Pakistan Destroys Indian Army Base After India’s Attack",
    excerpt: "In response to aggression, Pakistan takes down an Indian army base.",
    slug: "pakistan-destroys-indian-army-base",
    date: "May 7, 2025",
    image: "/india broken headquarter.png",
  },
  {
    id: 17,
    title: "🇵🇰 India Raises White Flag – What Happened at the LOC?",
    excerpt: "After intense moments at the LOC, India raises a white flag. Full details inside.",
    slug: "india-raises-white-flag-loc",
    date: "May 7, 2025",
    image: "/india white flag.webp",
  },
];
// Custom hover effect link component
function HoverLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={`${className} bg-gradient-to-r from-black to-black bg-[length:0px_3px]
                hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500`}>
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <section className="hero-post-area py-6 md:py-10 lg:py-16 mt-10">
      <div className="container mb-[100px] mx-auto px-4">
        <div className="post-area-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:grid-rows-[auto]">
          {/* Left Column */}
          <div className="post-area-right-2 md:col-span-1 lg:col-span-3">
            <div className="post-card-wrap space-y-6">
              {/* First Post Card */}
              <div className="post-card">
                <div className="post-thumb rounded-md overflow-hidden aspect-[20/15]">
                  <Link href="/blogs/india-attacks-multiple-places-in-pakistan">
                    <Image
                      src="/India Attacks Multiple Places in Pakistan – Full Report.png"
                      alt="Broken Jet"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </Link>
                </div>
                <div className="post-content mt-3">
           
                  <h3 className="title text-base sm:text-lg font-bold mt-2">
                    <HoverLink href="/blogs/india-attacks-multiple-places-in-pakistan">
                    India Attacks Multiple Places in Pakistan – Full Report  </HoverLink>
                  </h3>
                </div>
              </div>

              {/* Second Post Card */}
              <div className="post-card">
                <div className="post-thumb rounded-md overflow-hidden aspect-[20/15]">
                  <Link href="/blogs/schools-closed-islamabad-may-7-2025">
                    <Image
                      src="/Schools Closed in Islamabad on May 7, 2025.jpg"
                      alt="SChool Kids"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </Link>
                </div>
                <div className="post-content mt-3">
               
                  <h3 className="title text-base sm:text-lg font-bold mt-2">
                    <HoverLink href="/blogs/schools-closed-islamabad-may-7-2025">

 All Schools and Colleges in Islamabad Closed on May 7, 2025
                    </HoverLink>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Carousel */}
          <div className="post-carousel-wrap md:col-span-2 lg:col-span-6 relative order-first md:order-none mb-6 md:mb-0 h-full">
            <div className="post-carousel h-full">
              <div className="swiper-wrapper h-full">
                <div className="swiper-slide h-full">
                  <div className="post-carousel-card card-2 text-center h-full rounded-xl overflow-hidden relative">
                    <div className="post-carousel-thumb overflow-hidden relative h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
                      <Link href="/blogs/youngest-martyr-in-pakistan" className="block w-full h-full absolute inset-0">
                        <Image
                          src="/assets/the-youngest-martyr-in-pakistan.jpg"
                          alt="Woman in fashion outfit"
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-center"
                          style={{ objectFit: 'cover', objectPosition: 'center' }}
                          priority
                        />
                      </Link>
                    </div>
                    <div className="post-carousel-content absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white">
                      <span
                        className="card-btn bg-red-500 inline-block px-3 py-1 text-xs font-semibold text-white rounded-sm"
                      >
                        WAR
                      </span>
                      <h3 className="title text-xl sm:text-2xl md:text-3xl font-bold mt-2 md:mt-3">
                        <HoverLink href="/blogs/youngest-martyr-in-pakistan" className="text-white">
                        A Sad Story of a Child - The Youngest Martyr in Pakistan
                        </HoverLink>
                      </h3>
                      <ul className="post-list flex flex-wrap items-center justify-center gap-2 md:gap-4 mt-2 md:mt-3 text-xs sm:text-sm">
                        <li className="author">
                          by{" "}
                          <span>
                            <HoverLink href="/author-details" className="font-medium">
                              Amin Ahsan
                            </HoverLink>
                          </span>
                        </li>
                        <li className="date">July 29, 2024</li>
                        <li className="flex items-center">
                          <span className="mr-1">5</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Tabs */}
           {/* Left Column */}
           <div className="post-area-right-2 md:col-span-1 lg:col-span-3">
            <div className="post-card-wrap space-y-6">
              {/* First Post Card */}
              <div className="post-card">
                <div className="post-thumb rounded-md overflow-hidden aspect-[20/15]">
                  <Link href="/blogs/turkish-plane-brings-defense-tools">
                    <Image
                      src="/Turkish C-130E Plane.jpg"
                      alt="Broken Jet"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </Link>
                </div>
                <div className="post-content mt-3">
           
                  <h3 className="title text-base sm:text-lg font-bold mt-2">
                    <HoverLink href="/blogs/turkish-plane-brings-defense-tools">
                    Turkish C-130E Plane Brings New Defense Tools to Pakistan </HoverLink>
                  </h3>
                </div>
              </div>

              {/* Second Post Card */}
              <div className="post-card">
                <div className="post-thumb rounded-md overflow-hidden aspect-[20/15]">
                  <Link href="/blogs/pakistan-shuts-down-airspace">
                    <Image
                      src="/Pakistan Airspace.jpg"
                      alt="SChool Kids"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </Link>
                </div>
                <div className="post-content mt-3">
               
                  <h3 className="title text-base sm:text-lg font-bold mt-2">
                    <HoverLink href="/blogs/pakistan-shuts-down-airspace">

                    Pakistan Shuts Down Its Airspace for Security                    </HoverLink>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




    {/* Other Blogs Section */}
    <div className="mt-20 px-[30px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts
            .map((post) => (
              <Link key={post.id} href={`/blogs/${post.slug}`}>
                <Card className="p-2 hover:shadow-lg border-t-4 border-transparent hover:border-green-600 transition-all">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="rounded-md w-full h-40 object-cover mb-2"
                  />
                  <div className="p-2 mt-[-30px]">
                    <h3 className="text-md font-semibold text-green-700 mb-1">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{post.excerpt}</p>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                  </div>
                </Card>
              </Link>
            ))}
        </div>
      </div>































    </section>
  )
}

