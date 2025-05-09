"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { blogPosts } from "./data";



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
