import Blog from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "India-Pakistan Ceasefire Broken: Hyderabad Airbase Attacked, Trump Reacts",
  alternates: {
    canonical:
      "https://www.pakindiawar.com/blogs/india-pakistan-ceasefire-broken-hyderabad-airbase-attacked-trump-reacts",
  },
  description:
    "India and Pakistan announced a U.S.-mediated ceasefire. Just 20 minutes later, an airstrike hit Pakistan’s Hyderabad Airbase, killing Officer Usman Yousuf. Trump congratulated both nations before the attack.",
  keywords:
    "India Pakistan ceasefire 2025, Hyderabad airbase attack, Usman Yousuf death, Trump India Pakistan ceasefire, Indo-Pak conflict news, ceasefire violation, 2025 war update",
  openGraph: {
    title:
      "India-Pakistan Ceasefire Broken: Hyderabad Airbase Attacked, Trump Reacts",
    description:
      "India and Pakistan announced a U.S.-mediated ceasefire. Just 20 minutes later, an airstrike hit Pakistan’s Hyderabad Airbase, killing Officer Usman Yousuf. Trump congratulated both nations before the attack.",
    type: "article",
    publishedTime: "2025-05-10T00:00:00Z",
    authors: ["Taha Amin"],
  },
};

export default function BlogPageComponent() {
  const blogContent = `
    <h2 id="ceasefire-announced" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Ceasefire Announced Between India and Pakistan</h2>
    <p>On May 9, 2025, a ceasefire was officially announced between India and Pakistan after intense fighting across the border. This decision came after long hours of negotiations mediated by the United States. The world was hopeful that the region would finally see peace—at least for a while.</p>

    <h2 id="trump-reaction" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Donald J. Trump's Post After Ceasefire</h2>
    <p>Former U.S. President Donald J. Trump posted on his social media platform Truth Social after the ceasefire deal was finalized. He wrote:</p>
    <blockquote>"After a long night of talks mediated by the United States, I am pleased to announce that India and Pakistan have agreed to a full and immediate ceasefire. Congratulations to both countries on using common sense and great intelligence. Thank you for your attention to this matter!"</blockquote>
    <p>His message was shared thousands of times and praised by many for his involvement in bringing the two nuclear powers to the negotiating table.</p>

    <h2 id="airstrike-hyderabad" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Airstrike Hits Hyderabad Airbase 20 Minutes Later</h2>
    <p>Shockingly, only 20 minutes after the ceasefire, a powerful airstrike hit the Hyderabad Airbase in Pakistan. Local sources and military officials claim that the attack came from Indian aircraft. Explosions were heard across the city, and flames were seen rising from the airbase.</p>

    <h2 id="officer-usman-death" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Death of PAF Officer Usman Yousuf</h2>
    <p>One of the lives lost in the attack was Usman Yousuf, a young and dedicated officer of the Pakistan Air Force. He had just finished his final security round before the ceasefire and was preparing to return to his barracks. His tragic death has brought sorrow and anger across the nation.</p>

    <h2 id="public-reaction" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Public Reaction: Outrage and Grief</h2>
    <p>People in Pakistan were shocked. Social media exploded with hashtags like <strong>#JusticeForUsman</strong>, <strong>#CeasefireViolated</strong>, and <strong>#HyderabadAirstrike</strong>. Citizens demanded answers. Was this attack a mistake—or a message?</p>

    <h2 id="pakistan-response" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Pakistan’s Official Response</h2>
    <p>The Government of Pakistan strongly condemned the attack. In a public statement, the Foreign Office said:</p>
    <blockquote>“This was a deliberate violation of the ceasefire. The death of our officer will not be forgotten. We demand an international investigation and will respond if such actions continue.”</blockquote>

    <h2 id="india-silence" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">India Remains Silent</h2>
    <p>So far, the Indian government has not released any official statement about the strike. Some Indian media have covered it briefly, calling it “unconfirmed,” while others avoided the topic completely.</p>

    <h2 id="international-concern" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">International Concerns Rising</h2>
    <p>The global community is watching closely. Countries like China, Turkey, and the UK have expressed concern. The United Nations has also called for both sides to stay calm and avoid any further attacks.</p>

    <h2 id="final-words" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Final Words</h2>
    <p>The ceasefire was supposed to be a new beginning. Even Donald Trump had congratulated both nations for choosing peace. But with the Hyderabad Airbase attack and the loss of Officer Usman Yousuf, hope has turned into heartbreak. If there is to be peace, both countries must stick to their promises—not break them within minutes.</p>
  `;

  return (
    <Blog
      title="India-Pakistan Ceasefire Broken: Hyderabad Airbase Attacked, Trump Reacts"
      description="India and Pakistan announced a U.S.-mediated ceasefire. Just 20 minutes later, an airstrike hit Pakistan’s Hyderabad Airbase, killing Officer Usman Yousuf. Trump congratulated both nations before the attack."
      tableOfContents={[
        "ceasefire-announced",
        "trump-reaction",
        "airstrike-hyderabad",
        "officer-usman-death",
        "public-reaction",
        "pakistan-response",
        "india-silence",
        "international-concern",
        "final-words",
      ]}
      publishDate="May 10, 2025"
      readTime="5 min read"
      photo="/Donald J Tump post.png"
      content={blogContent}
    />
  );
}
