// Welcome.tsx

import PostHeader from "@/components/PostHeader";
import ScrollIndicator from "@/components/ScrollIndicator";
import PostContent from "@/posts/scalingWebsites.mdx";
import { sql } from "@vercel/postgres";

const pageTitle = "Scaling Platforms: 9 Strategies for High-Performance Web Applications";
const pageDescription =
  "See how to chart the course for efficient and scalable web applications through strategic optimization and cutting-edge technologies";

export const metadata = {
  title: `${pageTitle} | Yago's Blog`,
  description: pageDescription,

  openGraph: {
    title: `${pageTitle} | Yago's Blog`,
    description: pageDescription,
  },
};

export default async function Page() {
  const { rows } = await sql`SELECT * FROM posts WHERE title = (${pageTitle}) ORDER BY title ASC;`;

  const post = rows[0];

  return (
    <article className="prose prose-base md:prose-lg dark:prose-invert prose-headings:my-4 prose-p:my-4 prose-hr:my-4 flex flex-col dark:text-[#d4d4d4] text-gray-700 leading-7 tracking-normal min-w-full mb-16">
      <ScrollIndicator />
      <PostHeader title={post.title} createdAt={post.created_at} views={post.views} imgSrc={post.image} />
      <PostContent />
    </article>
  );
}
