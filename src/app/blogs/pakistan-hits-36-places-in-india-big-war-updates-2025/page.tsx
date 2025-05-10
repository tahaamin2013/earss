import Blog from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pakistan Hits 36 Places in India – Big War Updates 2025",
  alternates: {
    canonical: "https://www.pakindiawar.com/blogs/pakistan-hits-36-places-in-india-big-war-updates-2025",
  },
  description:
    "Pakistan has attacked 36 places in India under Operation Bunyan ul Marsoos. India’s power grid is 70% down. Airbases and military sites were hit.",
  keywords:
    "Pakistan India war 2025, Operation Bunyan ul Marsoos, cyberattack, missile strike, India power grid down, airbase attack, military operations",
  openGraph: {
    title: "Pakistan Hits 36 Places in India – Big War Updates 2025",
    description:
      "Pakistan has attacked 36 places in India under Operation Bunyan ul Marsoos. India’s power grid is 70% down. Airbases and military sites were hit.",
    type: "article",
    publishedTime: "2025-05-10T00:00:00Z",
    authors: ["Taha Amin"],
  },
};

export default function BlogPageComponent() {
  const blogContent = `
    <h2 id="cyberattack-on-india" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Pakistan Cyberattack on India</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Pakistan launched a massive cyberattack on India, taking down 70% of India’s power grid. This attack also targeted Indian military bases, hacking into CCTV cameras and crippling India's ability to protect key sites.</p>
    
    <h2 id="list-of-places-hit" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">List of Places Hit in India</h2>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li><strong>Beas:</strong> Missile storage place destroyed.</li>
      <li><strong>Udhampur:</strong> Air defence systems and airbase badly damaged.</li>
      <li><strong>Pathankot:</strong> Airfield missile strike.</li>
      <li><strong>Jalandhar:</strong> Airbase under attack.</li>
      <li><strong>Gujarat:</strong> Multiple military sites hit.</li>
      <li><strong>Delhi region:</strong> A missile intercepted near Hisar; Delhi remains in danger.</li>
      <li><strong>Rajasthan:</strong> Military buildings bombed.</li>
      <li><strong>Srinagar:</strong> Airbase hit, 20 soldiers reported dead.</li>
      <li><strong>Chandigarh:</strong> Weapons storage destroyed.</li>
    </ul>

    <h2 id="dogfight-in-the-skies" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Dogfight in the Skies</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Pakistani and Indian fighter jets are engaging in intense dogfights above Punjab, Kashmir, and Rajasthan. Both sides are deploying missiles in the airspace.</p>

    <h2 id="artillery-and-video-proof" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Artillery and Video Proof</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Videos showing Pakistani artillery firing on Indian army bases are expected to be released soon by Pakistan's army media (ISPR), providing visual proof of the military operations.</p>

    <h2 id="operation-bunyan-ul-malsoos" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">What is Operation “Bunyan ul Marsoos”?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The operation, named "Bunyan ul Marsoos" (meaning "a strong wall"), reflects Pakistan’s strength and unity. Initially a defensive operation, it has now evolved into a full-scale counterattack targeting various locations inside India.</p>

    <h2 id="final-words" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Final Words</h2>
    <p style="font-size: 1rem; line-height: 1.6;">With cyberattacks, missile strikes, and airstrikes, Pakistan is demonstrating its military power in the ongoing conflict. As the war continues, the world is closely monitoring the developments.</p>

    <h2 id="video" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Watch Full War Video Below:</h2>
    <p style="font-size: 1rem; line-height: 1.6;">👉 [VIDEO PLACEHOLDER – Add Video Here]</p>
  `;

  return (
    <Blog
      title="Pakistan Hits 36 Places in India – Big War Updates 2025"
      description="Pakistan has attacked 36 places in India under Operation Bunyan ul Marsoos. India’s power grid is 70% down. Airbases and military sites were hit."
      tableOfContents={[
        "cyberattack-on-india",
        "list-of-places-hit",
        "dogfight-in-the-skies",
        "artillery-and-video-proof",
        "operation-bunyan-ul-malsoos",
        "final-words",
      ]}
      publishDate="May 10, 2025"
      readTime="5 min read"
      photo="/operation-bunyan-ul-marsoos-key-indian-military-and-cyber-targets-hit-by-pakistan-1746853657-6674.png"
      content={blogContent}
    />
  );
}
