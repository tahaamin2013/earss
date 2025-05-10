import Blog from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "India Bombs Bahawalpur After Ceasefire, Pakistan Warns of Response",
  alternates: {
    canonical: "https://www.pakindiawar.com/blogs/india-bahawalpur-strike-ceasefire",
  },
  description:
    "Hours after the Hyderabad Airbase attack, India strikes Bahawalpur in Pakistan. Ceasefire violated again, tensions rise, and global leaders urge calm.",
  keywords:
    "Bahawalpur attack, India Pakistan ceasefire 2025, Indo-Pak war news, Bahawalpur missile strike, Pakistan response, ceasefire broken",
  openGraph: {
    title: "India Bombs Bahawalpur After Ceasefire, Pakistan Warns of Response",
    description:
      "Hours after the Hyderabad Airbase attack, India strikes Bahawalpur in Pakistan. Ceasefire violated again, tensions rise, and global leaders urge calm.",
    type: "article",
    publishedTime: "2025-05-10T05:30:00Z",
    authors: ["Taha Amin"],
  },
};

export default function BlogPageComponent() {
  const blogContent = `
    <h2 id="second-attack-after-ceasefire" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Second Attack After Ceasefire: Bahawalpur Targeted</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Just hours after the shocking airstrike on the Hyderabad Airbase, another major incident has occurred. On the morning of May 10, 2025, the city of Bahawalpur, located in southern Punjab, Pakistan, was struck by multiple air-to-surface missiles. This marks the second attack by India after the agreed ceasefire, signed the night before.</p>

    <h2 id="ceasefire-already-in-danger" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Ceasefire Already in Danger</h2>
    <p style="font-size: 1rem; line-height: 1.6;">This new attack has raised fears that the ceasefire is falling apart completely. The agreement, celebrated worldwide, was meant to stop all military actions between the two countries. It had been announced by Donald J. Trump, who said:</p>
    <blockquote style="border-left: 4px solid #ccc; margin-left: 0; padding-left: 1rem; font-style: italic;">“India and Pakistan have agreed to a full and immediate ceasefire. Congratulations to both countries on using common sense and great intelligence.”</blockquote>
    <p style="font-size: 1rem; line-height: 1.6;">But within just 24 hours, two separate airstrikes have been reported on Pakistani territory.</p>

    <h2 id="what-happened-in-bahawalpur" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">What Happened in Bahawalpur?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">At around 5:20 AM, residents of Bahawalpur reported loud blasts and military aircraft in the sky. A local school building, said to be empty at the time, was destroyed. The nearby Pak Army camp also took damage, but officials say no soldiers were killed.</p>
    <p style="font-size: 1rem; line-height: 1.6;">CCTV footage from the area showed two fighter jets, believed to be Indian, flying low before launching the missiles.</p>

    <h2 id="pakistani-army-statement" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Pakistani Army’s Statement</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The Inter-Services Public Relations (ISPR) of Pakistan issued a strong statement:</p>
    <blockquote style="border-left: 4px solid #ccc; margin-left: 0; padding-left: 1rem; font-style: italic;">“This is a direct and clear violation of the ceasefire agreement. India has once again shown aggression by attacking Bahawalpur. Pakistan reserves the right to respond at the time and place of its choosing.”</blockquote>

    <h2 id="indian-government-silent" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Indian Government Still Silent</h2>
    <p style="font-size: 1rem; line-height: 1.6;">As with the earlier Hyderabad attack, the Indian government has not made any official comment. Indian news channels are either ignoring the Bahawalpur strike or calling it “rumors.”</p>

    <h2 id="public-anger-growing" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Public Anger Growing in Pakistan</h2>
    <p style="font-size: 1rem; line-height: 1.6;">People across Pakistan are furious. Protests are happening in Lahore, Islamabad, and Karachi, with people demanding a strong military reply. Social media is trending with hashtags like #BahawalpurAttack, #CeasefireBroken, and #PakIndiaTensions.</p>

    <h2 id="international-pressure" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">International Pressure Mounts</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The United Nations has again urged both countries to avoid further conflict. China, a close ally of Pakistan, has called for an emergency meeting of the UN Security Council. Meanwhile, the United States and Donald Trump, who helped broker the ceasefire, have not yet responded to this second incident.</p>

    <h2 id="whats-next" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">What’s Next?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The situation between India and Pakistan is now extremely dangerous. If both countries continue to ignore the ceasefire, there is a real risk of full-scale war. The people of both nations are hoping for peace, but that hope is fading fast.</p>
  `;

  return (
    <Blog
      title="India Attacks Bahawalpur Again Despite Ceasefire: Tensions Rise Between Two Nations"
      description="Hours after the Hyderabad Airbase attack, India strikes Bahawalpur in Pakistan. Ceasefire violated again, tensions rise, and global leaders urge calm."
      tableOfContents={[
        "second-attack-after-ceasefire",
        "ceasefire-already-in-danger",
        "what-happened-in-bahawalpur",
        "pakistani-army-statement",
        "indian-government-silent",
        "public-anger-growing",
        "international-pressure",
        "whats-next",
      ]}
      publishDate="May 10, 2025"
      readTime="6 min read"
      photo="/bomb blasting.jpg"
      content={blogContent}
    />
  );
}
