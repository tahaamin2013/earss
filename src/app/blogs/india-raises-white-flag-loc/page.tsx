import Blog from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "India Raises White Flag at LOC | PakIndiaWar",
  alternates: {
    canonical: "https://www.pakindiawar.com/blogs/india-raises-white-flag-loc",
  },
  description:
    "Indian army surrenders at LOC after heavy loss. Pakistan shoots down 5 jets and 8 drones. Read the full story in easy English.",
  keywords:
    "India Pakistan war 2025, India white flag, Pakistan victory, LOC news, jets and drones shot, Chowra Complex, Indian Army surrender",
  openGraph: {
    title: "India Raises White Flag at LOC – Pakistan Wins Big",
    description:
      "Indian army surrenders at LOC after heavy loss. Pakistan shoots down 5 jets and 8 drones. Read the full story in easy English.",
    type: "article",
    publishedTime: "2025-05-08T00:00:00Z",
    authors: ["Taha Amin"],
  },
};

export default function BlogPageComponent() {
  const blogContent = `
    <h2 id="india-pakistan-war-update" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">📰 Big News: India Pakistan War Update!</h2>
    <p style="font-size: 1rem; line-height: 1.6;">In the latest update of the India Pakistan war, the Indian Army has waved a white flag at the Line of Control (LOC). This happened at the Chowra Complex. Waving a white flag means surrender. It means they do not want to fight anymore. It means Pakistan won this round.</p>
    <p style="font-size: 1rem; line-height: 1.6;">This moment is very important in the war of India and Pakistan 2025.</p>

    <h2 id="where-did-this-happen" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">📍 Where Did This Happen?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The incident took place at the Chowra post on the LOC. After heavy loss, the Indian Army accepted defeat and raised a white flag. The Pakistan Army stood firm and did not back down.</p>
    <p style="font-size: 1rem; line-height: 1.6;">People all over are searching for India Pakistan news and India-Pakistan 2025 updates. This is one of the biggest moments in the pk vs India war 2025.</p>

    <h2 id="jets-and-drones" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">✈️ Pakistan Shoots Down Indian Jets and Drones</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The Pakistan Army and Air Force worked together and shot down:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li>3 Rafale jets</li>
      <li>1 MiG-29</li>
      <li>1 SU-30 jet</li>
      <li>8 Indian drones</li>
    </ul>
    <p style="font-size: 1rem; line-height: 1.6;">This shows how strong Pakistan’s defense is. India could not match this power. The India and Pakistan war is turning in Pakistan’s favor.</p>

    <h2 id="army-posts-destroyed" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">🏢 Indian Army Posts Destroyed</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Pakistan Army also destroyed:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li>Indian Brigade HQ</li>
      <li>6 Battalion HQs</li>
      <li>Indian posts in Chhatri, Pandu, and Dhanial sectors</li>
      <li>Drones were shot down in Sialkot and Barnala</li>
    </ul>
    <p style="font-size: 1rem; line-height: 1.6;">Many Indian soldiers ran away and left their posts. Some were killed while running. This is a big blow in the India vs Pakistan war.</p>

    <h2 id="civil-areas-attacked" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">🕌 India Attacked Civil Areas</h2>
    <p style="font-size: 1rem; line-height: 1.6;">India attacked mosques and houses in:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li>Muridke</li>
      <li>Kotri</li>
      <li>Ahmadpur</li>
      <li>Muzaffarabad</li>
    </ul>
    <p style="font-size: 1rem; line-height: 1.6;">These attacks killed 8 innocent people and hurt 35 others. Many mosques were damaged.</p>
    <p style="font-size: 1rem; line-height: 1.6;">This shows that India Pakistan war is not only on borders but hurting civilians too.</p>

    <h2 id="leaders-speak" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">🗣️ What Did the Leaders Say?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The Pakistani Prime Minister said:</p>
    <blockquote style="font-size: 1rem; font-style: italic; margin-left: 1.5rem;">“India started this war. But we will end it.”</blockquote>
    <p style="font-size: 1rem; line-height: 1.6;">Pakistan Army leaders said:</p>
    <blockquote style="font-size: 1rem; font-style: italic; margin-left: 1.5rem;">“We will protect our country. Always.”</blockquote>
    <p style="font-size: 1rem; line-height: 1.6;">India-Pakistan News is now shared around the world. Even China and Turkey asked both countries to stop the war.</p>

    <h2 id="pakistan-stands-strong" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">🎖️ Pakistan Stands Strong</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The Pakistan Army stayed brave. The people stood with them.</p>
    <p style="font-size: 1rem; line-height: 1.6;">India tried to attack but failed. Now they raised a white flag.</p>
    <p style="font-size: 1rem; line-height: 1.6;">This is a big win in the pk vs India war today. The India Pakistan map shows how close the countries are, but only peace can make them safe.</p>
    <p style="font-size: 1rem; line-height: 1.6;">Let’s hope this India Pakistan jang ends soon. But for now, Pakistan is winning.</p>
  `;

  return (
    <Blog
      title="🇵🇰 India Raises White Flag – What Happened at the LOC?"
      description="Indian army surrenders at LOC after heavy loss. Pakistan shoots down 5 jets and 8 drones. Read the full story in easy English."
      tableOfContents={[
        "india-pakistan-war-update",
        "where-did-this-happen",
        "jets-and-drones",
        "army-posts-destroyed",
        "civil-areas-attacked",
        "leaders-speak",
        "pakistan-stands-strong",
      ]}
      publishDate="May 8, 2025"
      readTime="4 min read"
      photo="/india white flag.webp"
      content={blogContent}
    />
  );
}
