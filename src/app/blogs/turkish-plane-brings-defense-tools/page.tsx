import Blog from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turkish C-130E Plane Brings Defense Tools to Pakistan",
  alternates: {
    canonical: "https://www.pakindiawar.com/blogs/turkish-plane-brings-defense-tools",
  },
  description:
    "The Turkish C-130E plane landed in Karachi, bringing special tools to help Pakistan’s defense, especially against India Pakistan war.",
  keywords: "C-130E Plane, Turkish defense, Pakistan defense, India Pakistan war, Pakistan military, Turkey Pakistan friendship, military tools",
  openGraph: {
    title: "Turkish C-130E Plane Brings New Defense Tools to Pakistan",
    description:
      "The Turkish C-130E plane landed in Karachi, bringing special tools to help Pakistan’s defense, especially against India Pakistan war.",
    type: "article",
    publishedTime: "2025-05-07T00:00:00Z",
    authors: ["Taha Amin"],
  },
};

export default function BlogPageComponent() {
  const blogContent = `
    <h2 style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Introduction</h2>
    <p style="font-size: 1rem; line-height: 1.6;">A Turkish Air Force plane, the C-130E, landed in Karachi, Pakistan. It brought special tools to help Pakistan’s military. These tools will make Pakistan safer, especially against India and Pakistan war.</p>

    <h2 style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">What is the C-130E Plane?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The C-130E is a big cargo plane. It is used by many countries to carry heavy things like weapons and military equipment. The plane that landed in Karachi brought advanced tools to make Pakistan’s defense stronger against the war of India and Pakistan.</p>

    <h2 style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Turkey and Pakistan’s Strong Friendship</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Turkey and Pakistan have been good friends for a long time. They often work together to improve their armies. The new tools from Turkey will help Pakistan be ready for any threats, especially from India-Pakistan 2025.</p>

    <h2 style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Why International Friendships Matter</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Working with other countries helps keep everyone safe. When countries help each other, they can protect their people and keep peace, which is especially important in a war of India and Pakistan.</p>
  `;

  return (
    <>
      <Blog
        title="Turkish C-130E Plane Brings New Defense Tools to Pakistan"
        description="The Turkish C-130E plane landed in Karachi, bringing special tools to help Pakistan’s defense, especially against India Pakistan war."
        tableOfContents={[
          "introduction",
          "what-is-the-c-130e-plane",
          "turkey-and-pakistans-strong-friendship",
          "why-international-friendships-matter"
        ]}
        publishDate="May 7, 2025"
        readTime="3 min read"
        photo="/Turkish C-130E Plane.jpg"
        content={blogContent}
      />
    </>
  );
}
