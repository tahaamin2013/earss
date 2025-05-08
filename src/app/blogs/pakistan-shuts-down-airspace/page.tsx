import Blog from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pakistan Shuts Down Its Airspace for Security | PakIndiaWar",
  description:
    "Pakistan has shut down its airspace to improve security and protect against threats, including India and Pakistan war.",
  keywords: "Pakistan airspace closed, security measures, India Pakistan war, no-fly zone, aviation alert, Pakistan defense, war of India and Pakistan",
  openGraph: {
    title: "Pakistan Shuts Down Its Airspace for Security",
    description:
      "Pakistan has shut down its airspace to improve security and protect against threats, including India and Pakistan war.",
    type: "article",
    publishedTime: "2025-05-07T00:00:00Z",
    authors: ["Taha Amin"],
  },
};

export default function BlogPageComponent() {
  const blogContent = `
    <h2 id="introduction" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Intro</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Pakistan has decided to shut down its airspace. This means no planes are allowed to fly over or into Pakistan's airspace. This decision was made to make Pakistan safer and protect the country, especially in case of any war of India and Pakistan.</p>

    <h2 id="why-did-pakistan-shut-down-its-airspace" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Why Did Pakistan Shut Down Its Airspace?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Pakistan shut down its airspace because of growing security concerns. The government wants to make sure no foreign planes can enter without permission. This decision is also to protect Pakistan from possible threats, especially from India Pakistan war.</p>

    <h2 id="how-does-this-affect-air-travel" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">How Does This Affect Air Travel?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Shutting down airspace affects many flights. Planes that were supposed to fly over Pakistan will have to change their route. This can cause delays and cancellations for travelers. It also means India Pakistan news will be watched closely to see if any changes happen between the two countries. India and Pakistan news has been a big topic lately.</p>

    <h2 id="what-does-this-mean-for-pakistan-safety" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">What Does This Mean for Pakistan's Safety?</h2>
    <p style="font-size: 1rem; line-height: 1.6;">The decision to shut down the airspace is an important step in protecting the country. It shows that Pakistan is serious about defending its borders. This move is also important if there is any risk of war of India and Pakistan or any tensions between India and Pakistan war. India Pakistan jang can have many consequences, so Pakistan is taking all steps to stay safe.</p>

    <h2 id="conclusion" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Conclusion</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Shutting down airspace is a strong action by Pakistan. It helps protect the country and its people from any threats. As the situation between India Pakistan continues, Pakistan’s defense forces remain on high alert, ready for anything, especially if there is a PK vs India war.</p>
  `;

  return (
    <>
      <Blog
        title="Pakistan Shuts Down Its Airspace for Security"
        description="Pakistan has shut down its airspace to improve security and protect against threats, including India and Pakistan war."
        tableOfContents={[
          "introduction",
          "why-did-pakistan-shut-down-its-airspace",
          "how-does-this-affect-air-travel",
          "what-does-this-mean-for-pakistan-safety",
          "conclusion"
        ]}
        publishDate="May 7, 2025"
        readTime="3 min read"
        photo="/Pakistan Airspace.jpg"
        content={blogContent}
      />
    </>
  );
}
