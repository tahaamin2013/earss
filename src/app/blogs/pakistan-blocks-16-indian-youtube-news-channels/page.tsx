import Blog from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pakistan Blocks 16 Indian YouTube News Channels",
  alternates: {
    canonical: "https://www.pakindiawar.com/blogs/pakistan-blocks-16-indian-youtube-channels",
  },
  description:
    "Pakistan has blocked 16 Indian YouTube channels during the 2025 war for spreading fake news and anti-Pakistan videos. Cyber teams are watching online platforms closely.",
  keywords:
    "Pakistan blocks Indian YouTube channels, fake news, anti-Pakistan videos, Indo-Pak War 2025, cybersecurity, digital war, propaganda",
  openGraph: {
    title: "Pakistan Blocks 16 Indian YouTube News Channels",
    description:
      "Pakistan has blocked 16 Indian YouTube channels during the 2025 war for spreading fake news and anti-Pakistan videos. Cyber teams are watching online platforms closely.",
    type: "article",
    publishedTime: "2025-05-10T00:00:00Z",
    authors: ["Taha Amin"],
  },
};

export default function BlogPageComponent() {
  const blogContent = `
    <h2 id="why-were-these-channels-blocked" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Why Were These Channels Blocked?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The Pakistani government claims that these Indian YouTube channels:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li>Lied about Pakistan's military actions.</li>
      <li>Posted fake videos of attacks that never happened.</li>
      <li>Tried to make Pakistan look weak or evil.</li>
      <li>Spread hate and fear among viewers.</li>
    </ul>
    <p style="font-size: 1rem; line-height: 1.6;">This kind of false content is very dangerous, especially during a war.</p>

    <h2 id="example-of-fake-news-spread" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Example of Fake News Spread</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Some channels falsely claimed:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li>Indian forces destroyed Pakistani jets (which was not true).</li>
      <li>Pakistan attacked innocent civilians (no proof of this).</li>
      <li>Fake war footage from video games was shown as real.</li>
    </ul>
    <p style="font-size: 1rem; line-height: 1.6;">These lies confuse people and spread hatred, which is why Pakistan took quick action to stop it.</p>

    <h2 id="pakistans-official-statement" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Pakistan’s Official Statement</h2>
    <p style="font-size: 1rem; line-height: 1.6;">A government spokesperson said: <em>"We will not allow any foreign media to lie about our country and our brave soldiers. These channels were creating false stories to damage Pakistan’s image."</em></p>

    <h2 id="what-steps-are-being-taken" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">What Steps Are Being Taken?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Pakistan’s cybersecurity teams are working around the clock to:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li>Find and block fake news channels.</li>
      <li>Stop the spread of anti-Pakistan content.</li>
      <li>Monitor websites, apps, and social media platforms.</li>
      <li>Take action against any false reports shared online.</li>
    </ul>
    <p style="font-size: 1rem; line-height: 1.6;">If any other channels post lies, they will also be blocked.</p>

    <h2 id="digital-war-is-also-important" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Digital War Is Also Important</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The war is not just fought on land and in the sky, but also online. Fake news can:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li>Scare people.</li>
      <li>Create hate between countries.</li>
      <li>Cause panic among citizens.</li>
    </ul>
    <p style="font-size: 1rem; line-height: 1.6;">Pakistan is now fighting a digital war to protect the truth and stop lies from spreading.</p>

    <h2 id="public-reaction-in-pakistan" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Public Reaction in Pakistan</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Many people in Pakistan support the government’s decision, saying:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li><em>"Good job! Don’t let them lie about us."</em></li>
      <li><em>"We need to protect our country not just with weapons but also with facts."</em></li>
      <li><em>"Fake news is as dangerous as bombs."</em></li>
    </ul>

    <h2 id="what-you-should-do" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">What You Should Do</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Dear readers, during this time of war, remember to:</p>
    <ul style="font-size: 1rem; line-height: 1.6; margin-left: 1.5rem;">
      <li>Don’t believe everything you see online.</li>
      <li>Always check the source of videos and posts.</li>
      <li>Only trust official news from the Pakistan Army or Government.</li>
    </ul>
  `;

  return (
    <Blog
      title="Pakistan Blocks 16 Indian YouTube News Channels"
      description="Pakistan has blocked 16 Indian YouTube channels during the 2025 war for spreading fake news and anti-Pakistan videos. Cyber teams are watching online platforms closely."
      tableOfContents={[
        "why-were-these-channels-blocked",
        "example-of-fake-news-spread",
        "pakistans-official-statement",
        "what-steps-are-being-taken",
        "digital-war-is-also-important",
        "public-reaction-in-pakistan",
        "what-you-should-do",
      ]}
      publishDate="May 10, 2025"
      readTime="5 min read"
      photo="/banned youtube.jpg"
      content={blogContent}
    />
  );
}
