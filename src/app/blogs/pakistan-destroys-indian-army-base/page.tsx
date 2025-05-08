import Blog from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pakistan Destroys Indian Brigade Headquarters",
  alternates: {
    canonical: "https://pakindiawar.com/blogs/pakistan-destroys-indian-army-base",
  },
  description:
    "Pakistan shoots down 5 Indian jets and destroys army base after India attacks Punjab and Azad Kashmir. Full update on India Pakistan war 2025.",
  keywords:
    "India Pakistan war 2025, Pakistan retaliation, Indian brigade destroyed, jets shot down, border conflict, Azad Kashmir bombing, Punjab airstrike",
  openGraph: {
    title: "Pakistan Destroys Indian Brigade Headquarters in Retaliation",
    description:
      "Pakistan shoots down 5 Indian jets and destroys army base after India attacks Punjab and Azad Kashmir. Full update on India Pakistan war 2025.",
    type: "article",
    publishedTime: "2025-05-08T00:00:00Z",
    authors: ["Taha Amin"],
  },
};

export default function BlogPageComponent() {
  const blogContent = `
    <h2 id="india-started-the-fight" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">India Started the Fight</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Late at night, India dropped bombs on six cities in Punjab and Azad Kashmir. These cities include:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li>Kotli</li>
      <li>Bahawalpur</li>
      <li>Muridke</li>
      <li>Bagh</li>
      <li>Muzaffarabad</li>
    </ul>
    <p style="font-size: 1rem; line-height: 1.6;">Many homes were hit. Many people were sleeping when bombs fell. Eight people died. Thirty-five got hurt. Most bombs hit mosques and homes.</p>

    <h2 id="pakistan-fights-back-strong" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Pakistan Fights Back Strong</h2>
    <p style="font-size: 1rem; line-height: 1.6;">After a short time, the Pakistan Army gave a strong answer. They used fighter jets and missiles to fight back. Here is what Pakistan did:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li>Shot down 5 Indian jets</li>
      <li>3 Rafale jets</li>
      <li>1 SU-30MKI jet</li>
      <li>1 MIG-29 jet</li>
      <li>Shot down 1 Indian drone</li>
      <li>Destroyed an Indian brigade headquarters</li>
      <li>Destroyed an Indian army post at Dhundial sector</li>
    </ul>
    <p style="font-size: 1rem; line-height: 1.6;">This was a big win for Pakistan. All Pakistan Air Force jets came back safely.</p>

    <h2 id="fighting-at-the-border" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Fighting at the Border</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The Pakistan Army and Indian Army are still firing bullets at each other at the Line of Control (LoC). This is the border between the two countries.</p>

    <h2 id="leaders-speak-out" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Leaders Speak Out</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Pakistan’s army officer, Lt Gen Ahmed Sharif, said:</p>
    <blockquote style="font-size: 1rem; font-style: italic; margin-left: 1.5rem;">"This was a cowardly attack by India. We will respond at the time and place we choose."</blockquote>
    <p style="font-size: 1rem; line-height: 1.6;">The Defence Minister, Khawaja Asif, said:</p>
    <blockquote style="font-size: 1rem; font-style: italic; margin-left: 1.5rem;">"Pakistan has answered with strength. We are ready for anything."</blockquote>
    <p style="font-size: 1rem; line-height: 1.6;">Prime Minister Shehbaz Sharif also called a big emergency meeting in the morning.</p>

    <h2 id="world-is-watching" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">World Is Watching</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The United States told both countries to stay calm and not start a big war. But people are scared. Many think this may turn into the War of India and Pakistan 2025.</p>
    <p style="font-size: 1rem; line-height: 1.6;">Pakistan has also sent a message to the United Nations (UN). Pakistan said India is doing aggression without reason and hurting civilians.</p>

    <h2 id="why-did-india-attack" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Why Did India Attack?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">A few days ago, 26 tourists were killed in Indian Occupied Kashmir (Pahalgam). India is blaming Pakistan, but no proof was shown.</p>
    <p style="font-size: 1rem; line-height: 1.6;">After that, India:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li>Stopped visas for Pakistanis</li>
      <li>Closed the border</li>
      <li>Attacked Pakistani cities</li>
    </ul>
    <p style="font-size: 1rem; line-height: 1.6;">Pakistan says it is not behind the attack and wants peace, but it will defend itself always.</p>

    <h2 id="sad-but-brave-time" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Sad But Brave Time</h2>
    <p style="font-size: 1rem; line-height: 1.6;">This is a sad time for both countries. People are scared. Children are crying. But Pakistanis stand strong. The army says:</p>
    <blockquote style="font-size: 1rem; font-style: italic; margin-left: 1.5rem;">“We will protect every inch of our land.”</blockquote>
  `;

  return (
    <Blog
      title="Pakistan Destroys Indian Brigade Headquarters in Retaliation"
      description="Pakistan shoots down 5 Indian jets and destroys army base after India attacks Punjab and Azad Kashmir. Full update on India Pakistan war 2025."
      tableOfContents={[
        "india-started-the-fight",
        "pakistan-fights-back-strong",
        "fighting-at-the-border",
        "leaders-speak-out",
        "world-is-watching",
        "why-did-india-attack",
        "sad-but-brave-time",
      ]}
      publishDate="May 8, 2025"
      readTime="4 min read"
      photo="/india broken headquarter.png"
      content={blogContent}
    />
  );
}
