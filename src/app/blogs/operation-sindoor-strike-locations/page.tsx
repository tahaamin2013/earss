import Blog from "@/components/blog";
import { Metadata } from "next";

// Set up metadata
export const metadata: Metadata = {
  title: "Operation Sindoor: Strike Locations in Pakistan | India-Pakistan War 2025",
  description:
    "Discover the key strike locations of Operation Sindoor by India in Pakistan during the 2025 war. Learn about the camps hit and their importance.",
  alternates: {
    canonical: "https://www.pakindiawar.com/blogs/operation-sindoor-strike-locations-pakistan",
  },
  keywords:
    "Operation Sindoor, India Pakistan War 2025, India Pakistan conflict, India strikes Pakistan, terrorist camps Pakistan, India strikes terror groups, India military action",
  openGraph: {
    title: "Operation Sindoor: Strike Locations in Pakistan | India-Pakistan War 2025",
    description:
      "Discover the key strike locations of Operation Sindoor by India in Pakistan during the 2025 war. Learn about the camps hit and their importance.",
    type: "article",
    publishedTime: "2025-05-09T00:00:00Z",
    authors: ["Taha Amin"],
  },
};

const BlogPage = () => {
  const blogContent = `
    <h2 id="operation-sindoor-strike-locations" style="font-size: 1.5rem; font-weight: bold; margin-top: 2rem;">🚨 Operation Sindoor: Strike Locations in Pakistan</h2>
  <br/>
    <p style="font-size: 1rem; line-height: 1.6;">On May 7th, 2025, early in the morning, India started an operation called Operation Sindoor. This was a surprise attack on Pakistan. The attack happened because of a terrible event in Palgam on April 22nd, where 26 people were killed by terrorists. Most of the victims were from India.</p>
  <br/>
    <p style="font-size: 1rem; line-height: 1.6;">India's army aimed at stopping terrorists by hitting their camps in Pakistan. The goal was to stop the people who plan attacks on India. Here’s where India struck:</p>
   <br/> 
    <h3 id="bahavalpur" style="font-size: 1.25rem; font-weight: bold;">1. Bahavalpur - Terrorists' Base</h3>
    <p style="font-size: 1rem; line-height: 1.6;">The first place India attacked was in Bahavalpur, a city in Pakistan. There, a madrasa called Mara Subanalah was hit. This madrasa was used by Jashim Mohammad, a group that helps terrorists plan attacks on India.</p>
<br/>
    <h3 id="muratk" style="font-size: 1.25rem; font-weight: bold;">2. Muratk - Big Terrorist Group’s Headquarters</h3>
    <p style="font-size: 1rem; line-height: 1.6;">Next, India hit Muratk, a place near Lahore. This is where Lashkar Tayiba had its headquarters. This group has been responsible for many attacks on India.</p>
    <br/>
    <h3 id="tala" style="font-size: 1.25rem; font-weight: bold;">3. Tala - Border Camp</h3>
    <p style="font-size: 1rem; line-height: 1.6;">Then, India attacked a camp in Tala. This camp was used by Jashim Mohammad. It is close to the Indian border, and terrorists use it to cross into India.</p>
<br/>
    <h3 id="majjit-ali-hadid" style="font-size: 1.25rem; font-weight: bold;">4. Majjit Ali Hadid - Radicalization Camp</h3>
    <p style="font-size: 1rem; line-height: 1.6;">Another place hit by India was Majjit Ali Hadid in Bernala. This camp was used to turn people into terrorists. The people trained here would often carry out attacks in India.</p>
<br/>
    <h3 id="muzaffarabad-sedna-bilal" style="font-size: 1.25rem; font-weight: bold;">5. Muzaffarabad & Sedna Bilal - Terrorist Training</h3>
    <p style="font-size: 1rem; line-height: 1.6;">The Indian Army also attacked Muzaffarabad, the capital of Pakistan-occupied Jammu and Kashmir. There, they hit a camp called Shavai Nala. This camp trained terrorists to attack India. Another camp, Sedna Bilal, was also destroyed. It was used for planning attacks in Jammu and Kashmir.</p>
  <br/>  
    <h2 id="why-did-india-do-this" style="font-size: 1.5rem; font-weight: bold;">❓ Why Did India Do This?</h2>
   <br/>
    <p style="font-size: 1rem; line-height: 1.6;">India did this because it wanted to stop the terrorist groups in Pakistan. These groups have caused many problems for India, especially in Jammu and Kashmir. India believes that if these camps are destroyed, it will stop some of the violence in the region.</p>
    <br/>
    
    <h2 id="whats-happening-now" style="font-size: 1.5rem; font-weight: bold;">🔥 What’s Happening Now?</h2>
   
    <p style="font-size: 1rem; line-height: 1.6;">The war between India and Pakistan is not over. India will continue to fight against terrorists, and Pakistan might try to stop them. Countries like Turkey and China are supporting Pakistan, which makes things even more complicated.</p>
  <br/>
   
    <p style="font-size: 1rem; line-height: 1.6;">This fight is called the India Pakistan war or the war of India and Pakistan 2025. India wants peace, but it is also ready to fight to protect its people.</p>
  `;

  return (
    <Blog
      title="Operation Sindoor: Strike Locations in Pakistan | India-Pakistan War 2025"
      description="Discover the key strike locations of Operation Sindoor by India in Pakistan during the 2025 war. Learn about the camps hit and their importance."
      tableOfContents={[
        "operation-sindoor-strike-locations",
        "bahavalpur",
        "muratk",
        "tala",
        "majjit-ali-hadid",
        "muzaffarabad-sedna-bilal",
        "why-did-india-do-this",
        "whats-happening-now",
      ]}
      publishDate="May 9, 2025"
      readTime="5 min read"
      photo="/operation-sindoor-strike-map.webp"
      content={blogContent}
    />
  );
};

export default BlogPage;
