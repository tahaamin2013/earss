import Blog from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Washington Post Confirms Crash of India’s Second French Jet",
  alternates: {
    canonical: "https://www.pakindiawar.com/blogs/india-second-french-jet-crash",
  },
  description:
    "The Washington Post confirms that India’s second French-made Rafale jet has crashed during the 2025 war, raising serious concerns about India's air power.",
  keywords:
    "India second Rafale jet crash, Washington Post, Rafale jet, India Air Force, Indo-Pak War 2025, Indian fighter jets, France Rafale, air power, military news",
  openGraph: {
    title: "Washington Post Confirms Crash of India’s Second French Jet",
    description:
      "The Washington Post confirms that India’s second French-made Rafale jet has crashed during the 2025 war, raising serious concerns about India's air power.",
    type: "article",
    publishedTime: "2025-05-10T00:00:00Z",
    authors: ["Taha Amin"],
  },
};

export default function BlogPageComponent() {
  const blogContent = `
    <h2 id="what-happened-to-the-jet" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">What Happened to the Jet?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">According to reports:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li>The jet crashed while returning from a mission.</li>
      <li>Indian Air Force has lost two Rafale jets so far in the war.</li>
      <li>Pakistan Air Force may have hit the jet or it crashed due to failure.</li>
    </ul>
    <p style="font-size: 1rem; line-height: 1.6;">This is a big blow to India’s air power, as Rafale jets are very expensive and hard to replace.</p>

    <h2 id="what-is-a-rafale-jet" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">What is a Rafale Jet?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The Rafale is made in France. It is a very fast and powerful fighter jet. India bought 36 of them in a major deal with France. Each Rafale costs millions of dollars. The crash of two Rafales in one war is a serious issue for the Indian Air Force.</p>

    <h2 id="what-did-the-washington-post-say" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">What Did the Washington Post Say?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The Washington Post reported that:</p>
    <blockquote style="font-size: 1rem; line-height: 1.6; font-style: italic; margin-left: 1.5rem;">"Sources inside the Indian military have confirmed the loss of a second Rafale jet during operations."</blockquote>
    <p style="font-size: 1rem; line-height: 1.6;">This report has now gone viral online and is being talked about all over social media.</p>

    <h2 id="what-does-this-mean-for-india" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">What Does This Mean for India?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">India’s air strength is now weaker. The crash may hurt India’s reputation. France may also ask questions about how the jets are being used. Some Indian citizens are also worried and angry after hearing about the crash.</p>

    <h2 id="what-are-people-saying-online" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">What Are People Saying Online?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">On social media, people are reacting:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li><em>"How can they lose two Rafales in just a few days?"</em></li>
      <li><em>"France will not be happy."</em></li>
      <li><em>"Pakistan is clearly winning the air war."</em></li>
    </ul>
  `;

  return (
    <Blog
      title="Washington Post Confirms Crash of India’s Second French Jet"
      description="The Washington Post confirms that India’s second French-made Rafale jet has crashed during the 2025 war, raising serious concerns about India's air power."
      tableOfContents={[
        "what-happened-to-the-jet",
        "what-is-a-rafale-jet",
        "what-did-the-washington-post-say",
        "what-does-this-mean-for-india",
        "what-are-people-saying-online",
      ]}
      publishDate="May 10, 2025"
      readTime="4 min read"
      photo="/rocket2.jpg"
      content={blogContent}
    />
  );
}
