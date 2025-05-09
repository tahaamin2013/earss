import Blog from "@/components/blog";
import { Metadata } from "next";

// Set up metadata
export const metadata: Metadata = {
  title: "India-Pakistan War 2025 - Latest Updates and Tensions",
  description:
    "Discover the latest developments in the India-Pakistan war 2025. Read about the attack claims, India and Pakistan news,",
    alternates: {
      canonical: "https://www.pakindiawar.com/blogs/india-pakistan-war-2025-updates",
    },
  keywords:
    "India Pakistan War 2025, India vs Pakistan, India Pakistan conflict, India Army, Pakistan Army, Kashmir blackout, drone attacks, India missile strikes, India Pakistan news, India vs Pakistan latest updates",
  openGraph: {
    title: "India-Pakistan War 2025 - Latest Updates and Tensions",
    description:
      "Discover the latest developments in the India-Pakistan war 2025. Read about the attack claims, India and Pakistan news, and how the Indian Army and Pakistan Army are involved in the conflict.",
    type: "article",
    publishedTime: "2025-05-09T00:00:00Z",
    authors: ["Taha Amin"],
  },
};

const BlogPage = () => {
  const blogContent = `
    <h2 id="india-pakistan-war-2025" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">🇮🇳 India-Pakistan War 2025: Rising Tensions</h2>
    <br />

    <p style="font-size: 1rem; line-height: 1.6;">India vs Pakistan war has gotten worse. India says Pakistan attacked with drones. They claim to have shot down all the drones using their S400 defense system. India and Pakistan news reports that there’s a blackout in Kashmir and no lights are allowed. Sirens are going off in different places, and India says it’s because of Pakistan’s attack.</p>
    <br />

    <p style="font-size: 1rem; line-height: 1.6;">Pakistan Army has denied the attack. They say India is lying. Pakistan says they didn’t send any drones. India claims that the Pakistan Army attacked Jammu Kashmir, including Pathankot and Akhnoor. India vs Pakistan war has led to curfews and lockdowns in these areas.</p>
    <br />

    <p style="font-size: 1rem; line-height: 1.6;">Now, India says they are preparing for a bigger attack on Pakistan. The Indian Army is ready to launch a massive attack on Pakistan’s cities. They are saying they’ll use their Rafale jets and missiles to strike Pakistan. But Pakistan says they haven’t attacked yet and warns that if they do, the world will see a huge disaster.</p>
    <br />

    <p style="font-size: 1rem; line-height: 1.6;">The India-Pakistan war is now serious. India Pakistan war 2025 could change everything, and both countries are getting ready for a major battle. The situation is very tense, and the whole world is watching.</p>
  `;

  return (
    <Blog
      title="India-Pakistan War 2025 - Latest Updates"
      description="Discover the latest developments in the India-Pakistan war 2025. Read about the attack claims, India and Pakistan news, and how the Indian Army and Pakistan Army are involved in the conflict."
      tableOfContents={[
        "india-pakistan-war-2025",
      ]}
      publishDate="May 9, 2025"
      readTime="4 min read"
      photo="/war-updates-2025.jpg"
      content={blogContent}
    />
  );
};

export default BlogPage;
