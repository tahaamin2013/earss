import Blog from "@/components/blog";
import { Metadata } from "next";

// Set up metadata
export const metadata: Metadata = {
  title: "Operation Sindoor: India and Pakistan War 2025 Explained Simply",
  alternates: {
    canonical: "https://www.pakindiawar.com/blogs/operation-sindoor-war-2025-explained",
  },
  description:
    "Learn about the India-Pakistan War 2025 and Operation Sindoor in simple words. Understand what happened, why it happened, and what it means for both countries.",
  keywords:
    "Operation Sindoor, India Pakistan War 2025, India Pakistan conflict, military action, Kashmir conflict, India Pakistan military strikes, Pakistan India news",
  openGraph: {
    title: "Operation Sindoor: India and Pakistan War 2025 Explained Simply",
    description:
      "Learn about the India-Pakistan War 2025 and Operation Sindoor in simple words. Understand what happened, why it happened, and what it means for both countries.",
    type: "article",
    publishedTime: "2025-05-09T00:00:00Z",
    authors: ["Taha Amin"],
  },
};

const BlogPage = () => {
  const blogContent = `
    <h2 id="india-pakistan-war-2025" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">🌍 India and Pakistan War 2025: What Happened?</h2>
  <br />
    <p style="font-size: 1rem; line-height: 1.6;">In May 2025, a big conflict started between India and Pakistan. This conflict is called the India-Pakistan War 2025. It began after a terrible attack in Pahalgam, Kashmir, where many innocent people were killed. India believed that terrorists from Pakistan were responsible for this attack.</p>
  
  <br />
    <p style="font-size: 1rem; line-height: 1.6;">To respond, India launched a special military action named Operation Sindoor. The goal was to stop terrorist groups from planning more attacks. This operation targeted places where these groups were believed to be hiding.</p>
    <br />
    <h2 id="operation-sindoor" style="font-size: 1.5rem; font-weight: bold;">🎯 What Was Operation Sindoor?</h2>
  <br />
    <p style="font-size: 1rem; line-height: 1.6;">Operation Sindoor was a quick and powerful action by the Indian military. On May 7, 2025, Indian forces used fighter jets and missiles to strike nine locations in Pakistan and Pakistan-administered Kashmir. These places were thought to be training centers for terrorist groups like Jaish-e-Mohammed and Lashkar-e-Taiba.</p>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">The operation lasted about 23 minutes. India stated that it aimed only at terrorist sites and tried to avoid harming civilians. However, Pakistan reported that some civilians were hurt or killed during the strikes.</p>
    <br />
    <h2 id="pakistan-reaction" style="font-size: 1.5rem; font-weight: bold;">⚔️ How Did Pakistan React?</h2>
   <br />
    <p style="font-size: 1rem; line-height: 1.6;">After the strikes, Pakistan was very angry. The Pakistani government said that India had attacked their country without reason. They claimed to have shot down several Indian fighter jets and drones. India denied losing any aircraft.</p>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">Pakistan also launched its own attacks. They fired missiles and sent drones into Indian territory. Some of these were stopped by India's defense systems, but others caused damage. The situation became very tense, with both countries exchanging fire across the border.</p>
    <br />
    <h2 id="latest-india-pakistan-news" style="font-size: 1.5rem; font-weight: bold;">📰 What Is the Latest India-Pakistan News?</h2>
  <br />
    <p style="font-size: 1rem; line-height: 1.6;">The world is watching closely as the situation develops. Many countries are worried because both India and Pakistan have nuclear weapons. Leaders from around the world are asking both sides to calm down and talk to each other to avoid a bigger war.</p>
   <br />
    <p style="font-size: 1rem; line-height: 1.6;">In the latest India-Pakistan news, there have been more clashes along the border, and both countries are on high alert. People living near the border are scared and hope for peace soon.</p>
    <br />
    <h2 id="india-pakistan-map" style="font-size: 1.5rem; font-weight: bold;">🗺️ The India-Pakistan Map and Conflict Areas</h2>
   <br />
    <p style="font-size: 1rem; line-height: 1.6;">The conflict mainly affects the region of Kashmir, which both India and Pakistan claim as their own. The India-Pakistan map shows that Kashmir is divided between the two countries, leading to ongoing disputes.</p>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">During Operation Sindoor, India targeted areas in Pakistan's Punjab province and Pakistan-administered Kashmir. These areas were believed to be hiding spots for terrorist groups planning attacks on India.</p>
    <br />
    <h2 id="role-of-armies" style="font-size: 1.5rem; font-weight: bold;">🛡️ The Role of the Indian and Pakistan Armies</h2>
  <br />
    <p style="font-size: 1rem; line-height: 1.6;">The Indian Army carried out Operation Sindoor using advanced fighter jets and missiles. They aimed to destroy terrorist camps without harming civilians. The Indian government praised the army for their precise actions.</p>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">The Pakistan Army responded by defending their territory and launching counterattacks. They claimed to have shot down Indian aircraft and targeted Indian military sites. Both armies are now on high alert, prepared for any further escalation.</p>
   <br /> 
    <h2 id="hope-for-peace" style="font-size: 1.5rem; font-weight: bold;">🕊️ Hope for Peace</h2>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">The India-Pakistan war in 2025 has caused fear and uncertainty. Many people have lost their lives, and others live in fear of what might happen next. The international community is urging both countries to stop fighting and find a peaceful solution.</p>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">It's important for India and Pakistan to talk and resolve their differences. War brings pain and suffering, but peace can bring hope and a better future for everyone.</p>
  `;

  return (
    <Blog
      title="🇮🇳 Operation Sindoor: India and Pakistan War 2025 Explained Simply"
      description="Learn about the India-Pakistan War 2025 and Operation Sindoor in simple words. Understand what happened, why it happened, and what it means for both countries."
      tableOfContents={[
        "india-pakistan-war-2025",
        "operation-sindoor",
        "pakistan-reaction",
        "latest-india-pakistan-news",
        "india-pakistan-map",
        "role-of-armies",
        "hope-for-peace",
      ]}
      publishDate="May 9, 2025"
      readTime="5 min read"
      photo="/operation-sindoor-2025.jpg"
      content={blogContent}
    />
  );
};

export default BlogPage;
