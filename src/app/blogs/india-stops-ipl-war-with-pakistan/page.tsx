import Blog from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "India Stops IPL – Big War With Pakistan Starting Soon",
  alternates: {
    canonical: "https://www.pakindiawar.com/blogs/india-stops-ipl-war-with-pakistan",
  },
  description:
    "India suspends IPL as it prepares for a big strike on Pakistan. Missiles, drones, and attacks are coming. Read in very simple English.",
  keywords: "India stops IPL, India Pakistan war 2025, missiles, drones, Karachi port attack, simple English war news",
  openGraph: {
    title: "India Stops IPL – Big War With Pakistan Starting Soon",
    description:
      "India suspends IPL as it prepares for a big strike on Pakistan. Missiles, drones, and attacks are coming. Read in very simple English.",
    type: "article",
    publishedTime: "2025-05-09T00:00:00Z",
    authors: ["Taha Amin"],
  },
};

export default function BlogPageComponent() {
  const blogContent = `
    <h2 id="india-suspends-ipl" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">India Suspends IPL</h2>
    <p style="font-size: 1rem; line-height: 1.6;">India stopped the IPL, a big cricket event. When the IPL is stopped, it means something very serious is going to happen. India has suspended the event for one week. The reason is that India and Pakistan may soon be at war.</p>
<br />
    <h2 id="india-preparing-to-attack-pakistan" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">India Preparing to Attack Pakistan</h2>
    <p style="font-size: 1rem; line-height: 1.6;">India is getting ready for a big attack on Pakistan. They are planning to use missiles, drones, planes, and their army. The Indian defense minister called all the army leaders to prepare for the strike.</p>
<br />
    <h2 id="where-will-the-attack-start" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Where Will the Attack Start?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">India’s plan is not to attack only at the border. This time, they are planning to attack big cities like Lahore, Karachi, Sialkot, Gujranwala, Sargodha, and many others. India is preparing to use all their weapons in this strike.</p>
<br />
    <h2 id="missiles-and-drones-already-sent" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Missiles and Drones Already Sent</h2>
    <p style="font-size: 1rem; line-height: 1.6;">India has already sent missiles and drones. Pakistan said many of them were stopped, but some still caused damage. India used their S400 defense system, which stopped many attacks. But some attacks got through and caused damage in Pakistan.</p>
<br />
    <h2 id="india-plans-to-attack-karachi-port" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">India Plans to Attack Karachi Port</h2>
    <p style="font-size: 1rem; line-height: 1.6;">India is now planning a major attack on Karachi port. They are preparing to send 100 or more drones and missiles together. This will be a big attack.</p>
<br />
    <h2 id="international-support-for-india" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">International Support for India</h2>
    <p style="font-size: 1rem; line-height: 1.6;">India is getting support from many countries like the USA, Russia, and others. However, only China and Turkey are supporting Pakistan. Russia has a little support for Pakistan, but they are mostly with India.</p>
<br />
    <h2 id="pakistan-response" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Pakistan’s Response</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Pakistan has no choice but to fight back. They will have to defend themselves against the attack. Pakistan needs to be ready for the big war that may start soon.</p>
<br />
    <h2 id="conclusion" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Conclusion</h2>
    <p style="font-size: 1rem; line-height: 1.6;">This war may be one of the biggest we’ve seen. The whole world is watching. Both countries are preparing for what comes next. May Allah protect everyone from harm.</p>
  `;

  return (
    <>
      <Blog
        title="India Stops IPL – Big War With Pakistan Starting"
        description="India suspends IPL as it prepares for a big strike on Pakistan. Missiles, drones, and attacks are coming. Read in very simple English."
        tableOfContents={[
          "india-suspends-ipl",
          "india-preparing-to-attack-pakistan",
          "where-will-the-attack-start",
          "missiles-and-drones-already-sent",
          "india-plans-to-attack-karachi-port",
          "international-support-for-india",
          "pakistan-response",
          "conclusion",
        ]}
        publishDate="May 9, 2025"
        readTime="2 min read"
        photo="/ipl.webp"
        content={blogContent}
      />
    </>
  );
}
