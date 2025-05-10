import Blog from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pakistan Destroys India’s Udhampur Airbase in Missile Attack",
  alternates: {
    canonical: "https://www.pakindiawar.com/blogs/pakistan-destroys-india-udhampur-airbase-in-missile-attack",
  },
  description:
    "Pakistan has destroyed India’s Udhampur Airbase in a missile attack as part of its military response. Read full details and watch the video below.",
  keywords:
    "Udhampur Airbase attack, Pakistan missile strike, India Pakistan war 2025, Operation Bunyan-um-Marsus, Indian Air Force base destroyed",
  openGraph: {
    title: "Pakistan Destroys India’s Udhampur Airbase in Missile Attack",
    description:
      "Pakistan has destroyed India’s Udhampur Airbase in a missile attack as part of its military response. Read full details and watch the video below.",
    type: "article",
    publishedTime: "2025-05-10T00:00:00Z",
    authors: ["Taha Amin"],
  },
};

export default function BlogPageComponent() {
  const blogContent = `
    <h2 id="what-happened" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">What Happened?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">In a powerful military move, Pakistan has attacked and destroyed the Udhampur Airbase in India. This attack comes shortly after the start of Pakistan’s military operation "Bunyan-um-Marsus". The strike was carried out using missiles that targeted key military facilities inside the airbase.</p>
    <p style="font-size: 1rem; line-height: 1.6;">Reports suggest the airbase was badly damaged, and many parts of it are now non-operational. This attack is seen as a strong message from Pakistan in response to growing tensions with India.</p>

    <h2 id="why-udhampur-was-targeted" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Why Was Udhampur Airbase Targeted?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Udhampur Airbase is an important military base for India. It is located in the Jammu and Kashmir region and is used to support Indian Air Force operations in the area. Pakistan believes this base was being used to launch or support military actions against it.</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li>Weaken India’s air power in the region</li>
      <li>Defend its own borders from Indian attacks</li>
      <li>Show military strength and readiness</li>
    </ul>

    <h2 id="how-the-attack-happened" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">How Was the Attack Done?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The attack was done with precision-guided missiles, launched from Pakistan. These missiles hit runways, hangars, and ammunition storage buildings inside the base. According to reports, the damage is severe, and Indian fighter jets were either destroyed or forced to move out.</p>
    <p style="font-size: 1rem; line-height: 1.6;">So far, India has not officially confirmed the extent of the damage, but satellite images and independent sources claim that the airbase is not in use after the attack.</p>

    <h2 id="link-to-operation" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Link to Operation Bunyan-um-Marsus</h2>
    <p style="font-size: 1rem; line-height: 1.6;">This attack is part of the wider operation "Bunyan-um-Marsus", which Pakistan launched to stop terrorism and defend its national security. The operation aims to:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li>Eliminate threats from across the border</li>
      <li>Stop Indian military actions near Pakistani territory</li>
      <li>Protect Pakistan’s sovereignty</li>
    </ul>

    <h2 id="reactions" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Reactions So Far</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The attack has increased tensions between India and Pakistan. People in both countries are worried about a larger war. However, many in Pakistan see this as a strong step to defend the nation and prevent further attacks.</p>
    <p style="font-size: 1rem; line-height: 1.6;">The world is watching closely, but Pakistan has said that it will defend itself and respond to any threats with full force.</p>

    <h2 id="watch-video" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Watch the Video of the Attack</h2>
    <p style="font-size: 1rem; line-height: 1.6;">👉 [VIDEO PLACEHOLDER - Embed Here]</p>
  `;

  return (
    <Blog
      title="Pakistan Destroys India’s Udhampur Airbase in Missile Attack"
      description="Pakistan has destroyed India’s Udhampur Airbase in a missile attack as part of its military response. Read full details and watch the video below."
      tableOfContents={[
        "what-happened",
        "why-udhampur-was-targeted",
        "how-the-attack-happened",
        "link-to-operation",
        "reactions",
        "watch-video",
      ]}
      publishDate="May 10, 2025"
      readTime="4 min read"
      photo="/fauj.webp"
      content={blogContent}
    />
  );
}
