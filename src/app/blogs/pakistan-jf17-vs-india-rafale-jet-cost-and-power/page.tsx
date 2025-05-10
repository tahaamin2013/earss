import Blog from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pakistan’s JF-17 vs India’s Rafale: Jet Cost and Power Compared",
  alternates: {
    canonical: "https://www.pakindiawar.com/blogs/jf-17-vs-rafale-comparison",
  },
  description:
    "India’s Rafale jet costs $240 million while Pakistan’s JF-17 costs only $30 million. But which is more powerful? A clear and neutral comparison.",
  keywords:
    "JF-17 vs Rafale, Pakistan JF-17, India Rafale, jet cost comparison, fighter jets 2025 war, Rafale vs JF-17, Indo-Pak war, military jets comparison",
  openGraph: {
    title: "Pakistan’s JF-17 vs India’s Rafale: Jet Cost and Power Compared",
    description:
      "India’s Rafale jet costs $240 million while Pakistan’s JF-17 costs only $30 million. But which is more powerful? A clear and neutral comparison.",
    type: "article",
    publishedTime: "2025-05-10T00:00:00Z",
    authors: ["Taha Amin"],
  },
};

export default function BlogPageComponent() {
  const blogContent = `
    <h2 id="cost-of-the-jets" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Cost of the Jets</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Pakistan’s JF-17 jet costs about $30 million. It is made by Pakistan and China together. It is cheaper and easier to build. India’s Rafale jet costs around $240 million when you include weapons, training, and support. It is made in France and is much more expensive. Rafale is almost 8 times more costly than the JF-17.</p>

    <h2 id="which-one-is-more-powerful" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Which One is More Powerful?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Even though the JF-17 is cheaper, it is not as powerful as the Rafale.</p>
    <p style="font-size: 1rem; line-height: 1.6;">Rafale is a very advanced jet. It can:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li>Fly faster</li>
      <li>Go longer distances</li>
      <li>Carry more weapons</li>
      <li>Fight better in the sky (dogfights)</li>
      <li>Has better radar and some stealth</li>
    </ul>
    <p style="font-size: 1rem; line-height: 1.6;">The JF-17 is also a good jet. It can:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li>Carry modern missiles like PL-15</li>
      <li>Do quick attacks</li>
      <li>Be used for many types of missions</li>
      <li>Is very easy to fix and fly again quickly</li>
    </ul>
    <p style="font-size: 1rem; line-height: 1.6;">So, Rafale is stronger, but JF-17 is very smart for the price.</p>

    <h2 id="which-jet-is-better" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Which Jet is Better?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">This depends on what the country needs.</p>
    <p style="font-size: 1rem; line-height: 1.6;">If a country wants strong power and advanced tech, Rafale is better. If a country wants to save money but still fight well, JF-17 is a good choice.</p>
    <p style="font-size: 1rem; line-height: 1.6;">India chose Rafales because they wanted a strong air force with modern jets. Pakistan chose to build JF-17s because they can build more of them quickly and use them in many different ways.</p>

    <h2 id="whats-happening-in-the-2025-war" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">What’s Happening in the 2025 War?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">In the current war:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li>Pakistan is using JF-17s for fast attacks and border strikes</li>
      <li>India is using Rafales for long-range missions and defense</li>
    </ul>
    <p style="font-size: 1rem; line-height: 1.6;">But India has already lost two Rafale jets in the war, which is very costly. JF-17s are still flying and being used in many missions.</p>
  `;

  return (
    <Blog
      title="Pakistan’s JF-17 vs India’s Rafale: Jet Cost and Power Compared"
      description="India’s Rafale jet costs $240 million while Pakistan’s JF-17 costs only $30 million. But which is more powerful? A clear and neutral comparison."
      tableOfContents={[
        "cost-of-the-jets",
        "which-one-is-more-powerful",
        "which-jet-is-better",
        "whats-happening-in-the-2025-war",
      ]}
      publishDate="May 10, 2025"
      readTime="5 min read"
      photo="/rapter.webp"
      content={blogContent}
    />
  );
}
