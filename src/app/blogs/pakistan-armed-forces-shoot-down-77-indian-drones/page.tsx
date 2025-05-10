import Blog from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pakistan Armed Forces Shoot Down 77 Indian Drones – Official Report",
  alternates: {
    canonical: "https://www.pakindiawar.com/blogs/pakistan-armed-forces-shoot-down-77-indian-drones",
  },
  description:
    "Pakistan's armed forces have shot down 77 Indian drones during the 2025 war. The drones were used for spying and attacks, officials say.",
  keywords:
    "Pakistan shoots down drones, Indian drones, drone attacks, Pakistan Air Defence, Indo-Pak War 2025, drone war, security, Pakistan Army",
  openGraph: {
    title: "Pakistan Armed Forces Shoot Down 77 Indian Drones – Official Report",
    description:
      "Pakistan's armed forces have shot down 77 Indian drones during the 2025 war. The drones were used for spying and attacks, officials say.",
    type: "article",
    publishedTime: "2025-05-10T00:00:00Z",
    authors: ["Taha Amin"],
  },
};

export default function BlogPageComponent() {
  const blogContent = `
    <h2 id="why-were-these-drones-in-pakistan" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Why Were These Drones in Pakistan?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Indian drones were flying illegally inside Pakistan’s airspace. Officials say these drones had different goals:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li>Some were spying on military areas.</li>
      <li>Some were trying to drop bombs or weapons.</li>
      <li>Some were recording videos for intelligence.</li>
    </ul>
    <p style="font-size: 1rem; line-height: 1.6;">But the Pakistan Air Defence team spotted them and took them down quickly.</p>

    <h2 id="how-pakistan-stopped-the-drones" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">How Pakistan Stopped the Drones</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Pakistan used:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li>Anti-aircraft guns.</li>
      <li>Missile systems.</li>
      <li>Electronic jammers.</li>
    </ul>
    <p style="font-size: 1rem; line-height: 1.6;">These tools helped destroy or stop all 77 drones before they could do any harm.</p>

    <h2 id="where-did-the-drones-come-from" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Where Did the Drones Come From?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Officials say most drones entered through:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li>Kashmir Line of Control (LoC).</li>
      <li>Punjab border areas.</li>
      <li>Some even tried to enter from Sindh and Rajasthan borders.</li>
    </ul>
    <p style="font-size: 1rem; line-height: 1.6;">This shows the drones were sent to many parts of Pakistan.</p>

    <h2 id="pakistans-message-to-india" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Pakistan’s Message to India</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The official said: <em>"We will protect our skies at all costs. Any drone that enters our land will be destroyed. This is a warning to all who try to cross our borders."</em></p>

    <h2 id="videos-may-be-released-soon" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Videos May Be Released Soon</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The Pakistan Army’s media wing (ISPR) may soon release videos showing the drone attacks and how they were destroyed. These will be used to:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li>Show the truth.</li>
      <li>Prove Pakistan’s defence strength.</li>
      <li>Expose India's secret drone war.</li>
    </ul>

    <h2 id="why-drones-are-dangerous" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Why Drones Are Dangerous</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Drones are small and hard to see, but they can:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li>Spy on army bases.</li>
      <li>Drop small bombs.</li>
      <li>Spread panic.</li>
    </ul>
    <p style="font-size: 1rem; line-height: 1.6;">That’s why Pakistan’s quick action is so important.</p>

    <h2 id="public-reaction" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Public Reaction</h2>
    <p style="font-size: 1rem; line-height: 1.6;">People in Pakistan are proud of the army. On social media, many wrote:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li><em>"Our army is strong and ready!"</em></li>
      <li><em>"No one can cross our borders."</em></li>
      <li><em>"Well done, Pakistan Air Defence!"</em></li>
    </ul>
  `;

  return (
    <Blog
      title="Pakistan Armed Forces Shoot Down 77 Indian Drones – Official Report"
      description="Pakistan's armed forces have shot down 77 Indian drones during the 2025 war. The drones were used for spying and attacks, officials say."
      tableOfContents={[
        "why-were-these-drones-in-pakistan",
        "how-pakistan-stopped-the-drones",
        "where-did-the-drones-come-from",
        "pakistans-message-to-india",
        "videos-may-be-released-soon",
        "why-drones-are-dangerous",
        "public-reaction",
      ]}
      publishDate="May 10, 2025"
      readTime="5 min read"
      photo="/Drones destroyed.jpg"
      content={blogContent}
    />
  );
}
