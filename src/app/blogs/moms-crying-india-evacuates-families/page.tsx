import Blog from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Are Moms Crying? India Sending Families Away",
  description:
    "New rules by India send moms or dads back to Pakistan, keeping children in India. Families cry as they are separated.",
  keywords:
    "India Pakistan family separation, moms crying, border deportations, children and parents separated, India rules against Pakistani families",
  openGraph: {
    title: "Why Are Moms Crying? India Sending Families Away",
    description:
      "New rules by India send moms or dads back to Pakistan, keeping children in India. Families cry as they are separated.",
    type: "article",
    publishedTime: "2025-05-08T00:00:00Z",
    authors: ["Taha Amin"],
  },
};

export default function BlogPageComponent() {
  const blogContent = `
    <h2 id="moms-are-crying-for-their-children" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Moms Are Crying for Their Children</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Some moms are crying a lot. They say, “Why are you not taking me with my child? What did I do wrong?” These moms are very sad because their children are being taken away.</p>

    <h2 id="what-is-happening" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">What Is Happening?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">India has made a new rule. If a girl from Pakistan marries a man from India, the child will stay in India, and the mother must go back to Pakistan.</p>
    <p style="font-size: 1rem; line-height: 1.6;">If a man from Pakistan marries a girl from India, he will be sent back to Pakistan.</p>
    <p style="font-size: 1rem; line-height: 1.6;">Because of this, many moms and dads are being taken away from their kids.</p>

    <h2 id="children-are-crying" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Children Are Crying</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Many children are crying loudly. They don’t want to leave their moms or dads. Some kids are saying, “Mama, don’t go!” but soldiers are taking their parents away.</p>

    <h2 id="families-are-being-sent-out" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Families Are Being Sent Out</h2>
    <p style="font-size: 1rem; line-height: 1.6;">People who came from Pakistan to India are being sent out of the country in cars. They are dropped near the border. These people are crying. Some dads are holding their kids and crying. Moms are waving and crying as they leave.</p>

    <h2 id="this-is-very-sad" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">This Is Very Sad</h2>
    <p style="font-size: 1rem; line-height: 1.6;">This is very sad for all. Children, moms, and dads are hurt. Families just want to live together. They don’t want to be apart. But the rules are making them say goodbye.</p>
  `;

  return (
    <Blog
      title="Why Are Moms Crying? India Sending Families Away"
      description="New rules by India send moms or dads back to Pakistan, keeping children in India. Families cry as they are separated."
      tableOfContents={[
        "moms-are-crying-for-their-children",
        "what-is-happening",
        "children-are-crying",
        "families-are-being-sent-out",
        "this-is-very-sad",
      ]}
      publishDate="May 8, 2025"
      readTime="2 min read"
      photo="/moms crying.jpg"
      content={blogContent}
    />
  );
}
