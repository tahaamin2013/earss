import Blog from "@/components/blog";
import { Metadata } from "next";

// Set up metadata
export const metadata: Metadata = {
  title: "India Rejects Iran and Saudi Mediation, Continues Attacks on Pakistan",
  description:
    "In the ongoing Pakistan vs India war, India has rejected Iran and Saudi Arabia's efforts to mediate, continuing its strikes on Pakistan. ",
  alternates: {
    canonical: "https://www.pakindiawar.com/blogs/india-rejects-mediation-continues-war",
  },
  keywords:
    "India Pakistan War 2025, India rejects mediation, Iran Saudi Arabia mediation, India strikes Pakistan, India Pakistan conflict, Operation Sindoor, Pakistan India war news, India Pakistan escalation",
  openGraph: {
    title: "India Rejects Iran and Saudi Mediation, Continues Attacks on Pakistan - India Pakistan War 2025",
    description:
      "In the ongoing Pakistan vs India war, India has rejected Iran and Saudi Arabia's efforts to mediate, continuing its strikes on Pakistan. The War of India and Pakistan 2025 is escalating with dangerous consequences.",
    type: "article",
    publishedTime: "2025-05-09T00:00:00Z",
    authors: ["Taha Amin"],
  },
};

const BlogPage = () => {
  const blogContent = `
    <h2 id="india-rejects-iran-saudi-mediation" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">🇮🇳 India Rejects Iran and Saudi Mediation, Continues Attacks on Pakistan</h2>
    <br />
    
    <h3 id="introduction" style="font-size: 1.25rem; font-weight: bold;">Introduction: The Ongoing War of India and Pakistan</h3>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">The current India-Pakistan war has reached a crucial point as India has rejected attempts by Iran and Saudi Arabia to mediate the situation. The conflict continues to escalate, with both sides preparing for further violence.</p>
    <br />

    <h3 id="why-the-war-started" style="font-size: 1.25rem; font-weight: bold;">Why the War Started: Pakistan and India Conflict</h3>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">Tensions between India and Pakistan have been rising for years, with both countries accusing each other of aggression. The recent escalation has sparked widespread concerns about the future of the region and whether this conflict will lead to even greater destruction.</p>
    <br />

    <h3 id="international-pressure" style="font-size: 1.25rem; font-weight: bold;">International Pressure: Iran and Saudi Arabia's Role</h3>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">Iran and Saudi Arabia attempted to intervene in the conflict by sending foreign ministers to India. They warned of the disastrous consequences if the war continued, suggesting that it could escalate into a nuclear conflict. Despite these efforts, India has firmly rejected any mediation attempts, signaling its intent to continue its military actions.</p>
    <br />

    <h3 id="indias-response" style="font-size: 1.25rem; font-weight: bold;">India's Response: Preparing for a Larger War</h3>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">In response to Pakistan’s actions, India has vowed to intensify its military strikes. India has already conducted airstrikes on Pakistani cities and is preparing for a larger, more devastating military campaign. The Indian government has made it clear that they are determined to continue fighting until they achieve their objectives.</p>
    <br />

    <h3 id="global-concerns" style="font-size: 1.25rem; font-weight: bold;">Global Concerns: What Does This Mean for the World?</h3>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">The ongoing conflict between India and Pakistan is causing concern worldwide. Countries like the United States have issued travel advisories for their citizens, urging them to avoid the conflict zones. There are also fears that the situation could spiral into a larger regional war, with global powers being drawn into the conflict.</p>
    <br />

    <h3 id="looking-ahead" style="font-size: 1.25rem; font-weight: bold;">Looking Ahead: The Possibility of Operation Sindoor 2.0</h3>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">As tensions rise, there are increasing fears that India may launch a new operation similar to Operation Sindoor, which would involve more strategic missile and drone strikes against Pakistan. This could further heighten the risks of escalation and lead to even more widespread destruction.</p>
    <br />

    <h3 id="the-bigger-picture" style="font-size: 1.25rem; font-weight: bold;">The Bigger Picture: What’s at Stake?</h3>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">The ongoing India-Pakistan conflict is not just about territorial disputes; it has the potential to reshape the entire South Asian region. The involvement of global powers, such as China and the United States, could influence the future of the conflict and its impact on international relations.</p>
    <br />

    <h3 id="conclusion" style="font-size: 1.25rem; font-weight: bold;">Conclusion: The Road Ahead in the India-Pakistan War</h3>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">As the war between India and Pakistan continues, it remains unclear how long the conflict will last or what the final outcome will be. The world watches closely, hoping that cooler heads will prevail and peace can be restored before the situation escalates beyond control.</p>
  `;

  return (
    <Blog
      title="India Rejects Iran and Saudi Mediation, India Pakistan War 2025"
      description="In the ongoing Pakistan vs India war, India has rejected Iran and Saudi Arabia's efforts to mediate, continuing its strikes on Pakistan. The War of India and Pakistan 2025 is escalating with dangerous consequences."
      tableOfContents={[
        "india-rejects-iran-saudi-mediation",
        "introduction",
        "why-the-war-started",
        "international-pressure",
        "indias-response",  
        "global-concerns",
        "looking-ahead",
        "the-bigger-picture",
        "conclusion",
      ]}
      publishDate="May 9, 2025"
      readTime="6 min read"
      photo="/india-rejects-mediation.webp"
      content={blogContent}
    />
  );
};

export default BlogPage;
