import Blog from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "India Attacks Multiple Places in Pakistan | PakIndiaWar",
  alternates: {
    canonical: "https://www.pakindiawar.com/blogs/india-attacks-multiple-places-in-pakistan",
  },
  description:
    "India attacked several areas in Pakistan, including Lahore, Sialkot, and Bahawalpur. Many people were scared and some were injured. Read the full story for details.",
  keywords: "India Pakistan war 2025, Pakistan vs India war, Lahore attack, Sialkot bombing, Bahawalpur mosque, UN response, Kashmir conflict, Indian army, Pakistani retaliation",
  openGraph: {
    title: "India Attacks Multiple Places in Pakistan – Full Report",
    description:
      "India attacked several areas in Pakistan, including Lahore, Sialkot, and Bahawalpur. Many people were scared and some were injured. Read the full story for details.",
    type: "article",
    publishedTime: "2025-05-06T00:00:00Z",
    authors: ["Taha Amin"],
  },
};

export default function BlogPageComponent() {
  const blogContent = `
    <h2 id="india-and-pakistan-are-fighting" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">India and Pakistan Are Fighting</h2>
    <p style="font-size: 1rem; line-height: 1.6;">On May 6, 2025, India sent bombs into Pakistan and Pakistan’s Kashmir area. India said they were trying to hit places where bad people (terrorists) were hiding. India did this because, on April 22, many people were killed in an attack in Kashmir.</p>

    <h2 id="where-bombs-hit" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Where Bombs Hit</h2>
    <p style="font-size: 1rem; line-height: 1.6;">India’s bombs hit some cities in Pakistan:</p>
    <ul style="font-size: 1rem; line-height: 1.6; padding-left: 1.5rem;">
      <li>Muzaffarabad</li>
      <li>Kotli</li>
      <li>Bahawalpur</li>
    </ul>
    <p style="font-size: 1rem; line-height: 1.6;">Pakistan said 8 people died and 35 got hurt. Some women and children were also hurt. A mosque in Bahawalpur was broken too.</p>

    <h2 id="what-pakistan-did-after" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">What Pakistan Did After</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Pakistan said it shot down 2 Indian planes. Pakistan also sent bombs to India and said they broke an Indian army building. Some people near the border got hurt.</p>

    <h2 id="what-the-world-said" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">What the World Said</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The United Nations, America, and the UK told both countries to stop fighting. They said, “Please stay calm.” Some airplanes from other countries stopped flying over Pakistan to stay safe.</p>

    <h2 id="ongoing-tensions-and-impact" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Ongoing Tensions and Impact</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The incident between India and Pakistan has sparked conversations about the ongoing India Pakistan war and the rising tensions between both nations. The war of India and Pakistan 2025 continues to grow as the situation escalates. Pakistan vs India war has created an atmosphere of fear, and the India Pakistan war news is making people worry.</p>

    <p style="font-size: 1rem; line-height: 1.6;">With each attack, like the one in Lahore, Sialkot, and Bahawalpur, the violence becomes more difficult to ignore. The conflict, especially the India Pakistan jang, is becoming more intense with every passing day.</p>

    <h2 id="future-concerns-and-hope" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Future Concerns and Hope</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The consequences of this situation have left many wondering about the future of India and Pakistan relations and the possibility of peace between the two nations. As Pakistan Army and Indian Army continue to clash, the world watches closely, with countries urging both sides to cool down and avoid further conflict.</p>
   <div style="text-align: center; margin-top: 1rem;">
    <video controls style="max-width: 100%; height: auto;">
      <source src="/India again attack on pakistan.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
    `;

  return (
    <>
      <Blog
        title="India Attacks Multiple Places in Pakistan – Full Report"
        description="India attacked several areas in Pakistan, including Lahore, Sialkot, and Bahawalpur. Many people were scared and some were injured. Read the full story for details."
        tableOfContents={[
          "india-and-pakistan-are-fighting",
          "where-bombs-hit",
          "what-pakistan-did-after",
          "what-the-world-said",
          "ongoing-tensions-and-impact",
          "future-concerns-and-hope"
        ]}
        publishDate="May 6, 2025"
        readTime="2 min read"
        photo="/India Attacks Multiple Places in Pakistan – Full Report.png"
        content={blogContent}
      />
    </>
  );
}
