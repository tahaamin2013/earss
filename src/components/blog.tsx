"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const blogPosts = [
  {
    id: 10,
    title: "A Sad Story of a Child– The Youngest Martyr in Pakistan",
    excerpt: "A heartbreaking story of the youngest martyr, showing the human cost of conflict.",
    slug: "youngest-martyr-in-pakistan",
    date: "May 7, 2025",
    image: "/assets/the-youngest-martyr-in-pakistan.jpg",
  },
  {
    id: 11,
    title: "India Attacks Multiple Places in Pakistan – Full Report",
    excerpt: "Detailed report on the recent attacks by India on different areas of Pakistan.",
    slug: "india-attacks-multiple-places-in-pakistan",
    date: "May 7, 2025",
    image: "/India Attacks Multiple Places in Pakistan Full Report.jpeg",
  },
  {
    id: 12,
    title: "All Schools and Colleges in Islamabad Closed on May 7, 2025",
    excerpt: "Due to the recent attacks, all educational institutions in Islamabad have been closed.",
    slug: "schools-closed-islamabad-may-7-2025",
    date: "May 7, 2025",
    image: "/Schools Closed in Islamabad on May7 2025.jpg",
  },
  {
    id: 13,
    title: "Turkish C-130E Plane Brings New Defense Tools to Pakistan",
    excerpt: "Turkey sends defense tools to Pakistan using the C-130E aircraft to support its ally.",
    slug: "turkish-plane-brings-defense-tools",
    date: "May 7, 2025",
    image: "/Turkish C-130E  Plane.jpg",
  },
  {
    id: 14,
    title: "Pakistan Shuts Down Its Airspace for Security",
    excerpt: "For national safety, Pakistan closes its airspace after rising tensions.",
    slug: "pakistan-shuts-down-airspace",
    date: "May 7, 2025",
    image: "/Pakistan Airspace.jpg",
  },
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
    image: "/india broken head quarter.jpeg",
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

interface BlogProps {
  title: string;
  description: string;
  tableOfContents: string[];
  publishDate: string;
  readTime: string;
  content: string;
  photo: string;
}

const Blog: React.FC<BlogProps> = ({
  title,
  tableOfContents,
  publishDate,
  readTime,
  content,
  photo,
}) => {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop(); // Extract the slug from the path

  const filteredBlogPosts = blogPosts.filter(
    (post) => post.slug !== currentSlug
  );

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <Link
            href="/"
            className="text-green-700 hover:text-green-900 flex items-center gap-2 mb-6 group"
          >
            <ArrowLeft
              size={16}
              className="transform group-hover:-translate-x-1 transition-transform"
            />
            <span className="border-b border-transparent group-hover:border-green-700 transition-colors">
              Back to Blog
            </span>
          </Link>

          <article className="max-w-3xl">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4 text-green-800">{title}</h1>
              <div className="w-24 h-1 bg-green-600 mb-6"></div>

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{readTime}</span>
                  <span className="text-sm text-muted-foreground mx-2">•</span>
                  <span className="text-sm text-muted-foreground">{publishDate}</span>
                </div>
              </div>

              <div
                className="prose max-w-none scroll-mt-24"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </article>
        </div>

        <div className="lg:w-1/4 mt-[60px]">
          <Card className="p-4 shadow-sm border-l-4 border-green-600">
            <span className="text-lg font-bold mb-4 text-green-800">Table of Contents</span>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {tableOfContents.map((item, index) => {
                const id = item
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[?.]/g, "");
                return (
                  <li key={index}>
                    <a href={`#${id}`} className="hover:underline text-green-600">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Card>

          {photo && (
            <Image
              width={600}
              height={400}
              src={photo}
              alt={title}
              className="w-full mt-[50px] h-auto rounded-lg mb-6 shadow-md"
            />
          )}
        </div>
      </div>

      {/* Other Blogs Section */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-6 text-green-800">Other Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBlogPosts.map((post) => (
            <Link key={post.id} href={`/blogs/${post.slug}`}>
              <Card className="p-2 hover:shadow-lg border-t-4 border-transparent hover:border-green-600 transition-all">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="rounded-md w-full h-40 object-cover mb-2"
                />
                <div className="p-2">
                  <h3 className="text-md font-semibold text-green-700 mb-1">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{post.excerpt}</p>
                  <p className="text-xs text-muted-foreground">{post.date}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
