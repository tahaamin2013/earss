import Blog from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Big News: Drone Attack in Rawalpindi",
  alternates: {
    canonical: "https://www.pakindiawar.com/blogs/drone-attack-rawalpindi-war-2025",
  },
  description:
    "Two drones crash in Rawalpindi. Is this part of the war of India and Pakistan 2025? Read the full update about India-Pakistan war news and drone attacks.",
  keywords:
    "Drone attack, Rawalpindi, India Pakistan war 2025, India Pakistan news, Pakistan India tensions, India Pakistan conflict, drone crashes Rawalpindi, India Pakistan war today",
  openGraph: {
    title: "Big Drone Attack in Rawalpindi – Is This the Start of India Pak War 2025?",
    description:
      "Two drones crash in Rawalpindi. Is this part of the war of India and Pakistan 2025? Read the full update about India-Pakistan war news and drone attacks.",
    type: "article",
    publishedTime: "2025-05-09T00:00:00Z",
    authors: ["Taha Amin"],
  },
};

export default function BlogPageComponent() {
  const blogContent = `
    <h2 style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Big Drone Attack in Rawalpindi – Is This the Start of India Pak War 2025?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Today, we got very big news from Rawalpindi, Pakistan. Two drones crashed in different areas. One drone fell near Sadar Romi Road. The second drone crashed in Double Road Food Street. Police and the Pakistan Army went to both places very fast.</p>
  <br/>
    <p style="font-size: 1rem; line-height: 1.6;">People in Rawalpindi were very scared. The area was closed, and no one was allowed to go near the drone. Police and army teams came quickly. They started to check everything about the drones. One drone hit a tree and then fell into a shop. The shopkeeper got hurt and was taken to the Benazir Bhutto hospital.</p>
  <br/>
    <p style="font-size: 1rem; line-height: 1.6;">Many people think this can be a part of the pak india war or maybe the beginning of the war of India and Pakistan 2025. Still, the government has not said anything official about the drones. They don’t know who sent them. But people are saying maybe it is from the India Pakistan war going on now.</p>
  <br/>
    <p style="font-size: 1rem; line-height: 1.6;">In the news, you can hear people talking about pakistan vs india war, pk vs india war today, and even india vs pak war today. This shows how serious the situation is. People want peace, but right now, both sides are preparing.</p>
  <br/>
    <p style="font-size: 1rem; line-height: 1.6;">Everyone is watching the India-Pakistan 2025 news. The Indian Army and Pakistan Army are ready. Many people are searching online for India Pakistan map and checking the latest India-Pakistan News and India Pakistan war 2025 stories. This is a scary time for both countries.</p>
  <br/>
    <p style="font-size: 1rem; line-height: 1.6;">This drone crash could be a big sign. It shows that the fight between India and Pakistan may get worse. Many fear a real India-Pakistan war is starting. The latest India and Pakistan news shows more updates will come soon.</p>
  `;

  return (
    <Blog
      title="Big Drone Attack in Rawalpindi – Is This Start of India Pak War 2025?"
      description="Read about the recent drone attack in Rawalpindi and its potential connection to the ongoing India-Pakistan war in 2025."
      tableOfContents={[
        "drone-attack-in-rawalpindi",
        "is-this-the-start-of-india-pakistan-war-2025",
      ]}
      publishDate="May 9, 2025"
      readTime="3 min read"
      photo="/drone-attack-rawalpindi.jpg"
      content={blogContent}
    />
  );
}
