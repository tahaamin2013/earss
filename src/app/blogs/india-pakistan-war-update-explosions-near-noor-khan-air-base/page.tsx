import Blog from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explosion Near Noor Khan Air Base - Full Update",
  description:
    "Big explosions and missile attacks happened near Noor Khan Air Base. People were sleeping when it happened. Many got hurt and some died. Full report here.",
  alternates: {
    canonical: "https://www.pakindiawar.com/blogs/explosion-near-noor-khan-air-base",
  },
  keywords:
    "Explosion Noor Khan Air Base, missiles attack Rawalpindi, people died sleeping, Rawalpindi Lahore blast news, Pakistan India war 2025",
  openGraph: {
    title: "Explosion Near Noor Khan Air Base - Full Update",
    description:
      "Big explosions and missile attacks happened near Noor Khan Air Base. People were sleeping when it happened. Many got hurt and some died. Full report here.",
    type: "article",
    publishedTime: "2025-05-09T00:00:00Z",
    authors: ["Taha Amin"],
  },
};

const BlogPage = () => {
  const blogContent = `
    <h2 id="explosion-near-noor-khan-air-base" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">💥 Explosion Near Noor Khan Air Base - Full Update</h2>
    <br />
    
    <h3 id="introduction" style="font-size: 1.25rem; font-weight: bold;">What Happened?</h3>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">On the night of May 9, 2025, there was a big explosion near Noor Khan Air Base. People were sleeping in their homes. Suddenly, there was a loud boom. Windows broke, and the sky turned red. Missiles were fired. They exploded near homes and buildings. People were screaming and running. Some people died while they were sleeping. It was very scary.</p>
    <br />

    <h3 id="where-the-explosions-were-heard" style="font-size: 1.25rem; font-weight: bold;">Where Did It Happen?</h3>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">The sound of explosions came from Rawalpindi and also from Lahore. The center of the blast was near the Noor Khan Air Base in the Chaklala area. People in Islamabad also heard the blasts. The ground shook. Cars stopped. Some buildings got damaged badly.</p>
    <br />

    <h3 id="what-authorities-know" style="font-size: 1.25rem; font-weight: bold;">What Did the Police Say?</h3>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">Police and army teams reached the area quickly. They said missiles were launched, and this may be a planned attack. They are still checking everything. Bomb experts are searching the area to find out who did it. So far, they are not saying the name of the attacker. But people believe it is because of the war.</p>
    <br />

    <h3 id="people-scared-and-sad" style="font-size: 1.25rem; font-weight: bold;">People Are Scared and Sad</h3>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">Many families are crying. Their houses were broken. Some children are missing. People were asleep when missiles exploded. They had no time to run. Fire was everywhere. It looked like a war zone. Everyone is scared. They are not feeling safe anymore.</p>
    <br />

    <h3 id="rescue-teams-and-hospitals" style="font-size: 1.25rem; font-weight: bold;">Rescue Teams and Hospitals</h3>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">Rescue 1122 teams came to help. They pulled people out from broken buildings. Ambulances took hurt people to hospitals. Doctors and nurses are trying to save lives. Hospitals in Rawalpindi, Lahore, and Islamabad are full. Many people are still missing.</p>
    <br />

    <h3 id="missiles-fired" style="font-size: 1.25rem; font-weight: bold;">Missiles Were Fired</h3>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">Missiles exploded near houses and roads. People saw fire coming from the sky. These were not just sounds — these were real attacks. The missiles exploded loudly. Some landed on buildings. It was like a war had started in the middle of the night.</p>
    <br />

    <h3 id="who-is-responsible" style="font-size: 1.25rem; font-weight: bold;">Who Did This?</h3>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">The government has not told who is behind this. But many think it is because of the tension between India and Pakistan. The two countries are not getting along. People are asking for answers. They want to feel safe again.</p>
    <br />

    <h3 id="what-people-should-do" style="font-size: 1.25rem; font-weight: bold;">What Should You Do Now?</h3>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">Stay in a safe place. Do not go outside unless you must. Listen to the news and follow what police and rescue teams say. Do not go near the area of the explosions. Stay away from broken wires and damaged buildings. Help others if you can.</p>
    <br />

    <h3 id="final-message" style="font-size: 1.25rem; font-weight: bold;">Final Message</h3>
    <br />
    <p style="font-size: 1rem; line-height: 1.6;">This is a sad day for Pakistan. People have lost family members. Some people were sleeping when they died. May Allah help those families. We hope peace comes soon, and no more bombs fall. Stay strong, and pray for your country.</p>
    <br />
    <video
  width="100%"
  controls
  style="margin-top: 1rem; margin-bottom: 1rem;"
>
  <source src="/noor-khan-explosion.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

  `;

  return (
    <Blog
      title="Explosion Near Noor Khan Air Base - Full Update"
      description="Big explosions and missile attacks happened near Noor Khan Air Base. People were sleeping when it happened. Many got hurt and some died. Full report here."
      tableOfContents={[
        "explosion-near-noor-khan-air-base",
        "introduction",
        "where-the-explosions-were-heard",
        "what-authorities-know",
        "people-scared-and-sad",
        "rescue-teams-and-hospitals",
        "missiles-fired",
        "who-is-responsible",
        "what-people-should-do",
        "final-message",
      ]}
      publishDate="May 9, 2025"
      readTime="5 min read"
      photo="/blast plane.png"
      content={blogContent}
    />
  );
};

export default BlogPage;
