import Blog from "@/components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Schools and Colleges in Islamabad Closed on May 7, 2025 | PakIndiaWar",
  description:
    "Due to the current security situation, all public and private schools and colleges in Islamabad will remain closed on May 7, 2025.",
  keywords: "Schools closed Islamabad, Colleges closed Islamabad, Pakistan news, Islamabad May 7, 2025, India Pakistan war, Islamabad schools closure",
  openGraph: {
    title: "All Schools and Colleges in Islamabad Closed on May 7, 2025",
    description:
      "Due to the current security situation, all public and private schools and colleges in Islamabad will remain closed on May 7, 2025.",
    type: "article",
    publishedTime: "2025-05-07T00:00:00Z",
    authors: ["Taha Amin"],
  },
};

export default function BlogPageComponent() {
  const blogContent = `
    <h2 style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Schools and Colleges Closed in Islamabad on May 7, 2025</h2>
    <p style="font-size: 1rem; line-height: 1.6;">According to a letter from the Office of the District Magistrate, Islamabad Capital Territory, all schools and colleges in Islamabad will remain closed on May 7, 2025 (Wednesday). This decision has been made due to the current safety concerns in the city. Both government and private institutions are included in this closure.</p>

    <p style="font-size: 1rem; line-height: 1.6;">The primary purpose of this closure is to ensure the safety of students and teachers during these uncertain times.</p>
<br/>
    <p style="font-size: 1rem; line-height: 1.6;">However, exams scheduled for May 7, 2025, will still proceed as planned. If you have an exam on this day, you are required to attend and give your paper. Exams will not be canceled.</p>

    <h2 style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">In Summary:</h2>
    <ul style="font-size: 1rem; line-height: 1.6;">
      <li>✅ Schools and Colleges = Closed</li>
      <li>✅ Exams = Will take place as scheduled</li>
    </ul>
 <br/>

    <p style="font-size: 1rem; line-height: 1.6;">The India Pakistan news is also heavily focused on the India Pakistan war currently, with many speculating how it may impact the situation in Islamabad. Many people are concerned that the rising tensions between the India and Pakistan war might lead to even further disruptions in Pakistan. As the situation unfolds, the India and Pakistan war of 2025 continues to escalate, with Pakistan Army and Indian Army engaging in conflicts.</p>
 <br/>
    <p style="font-size: 1rem; line-height: 1.6;">In the midst of this uncertainty, Islamabad's closure of educational institutions has become a hot topic. The war of India and Pakistan and its effects on daily life in cities like Islamabad is a point of discussion. People are hoping for peace and that the situation will stabilize soon. It's important to stay informed and continue to monitor India and Pakistan news.</p>

    <h2 style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">Stay Updated</h2>
    <p style="font-size: 1rem; line-height: 1.6;">Please stay updated with the news and stay safe.</p>
    

  `;

  return (
    <>
      <Blog
        title="All Schools and Colleges in Islamabad Closed on May 7, 2025"
        description="Due to the current security situation, all public and private schools and colleges in Islamabad will remain closed on May 7, 2025. Exams will still be held as scheduled."
        tableOfContents={[
          "schools-and-colleges-closed-in-islamabad",
          "summary",
          "stay-updated"
        ]}
        publishDate="May 7, 2025"
        readTime="2 min read"
        photo="/Note of pakistan.jpg"
        content={blogContent}
      />
    </>
  );
}
