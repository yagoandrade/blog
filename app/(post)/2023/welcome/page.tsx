// Welcome.tsx

import PostHeader from "@/components/PostHeader";
import ScrollIndicator from "@/components/ScrollIndicator";
import PostContent from "@/posts/welcome.mdx";

import { sql } from "@vercel/postgres";

const pageTitle = "Welcome";
const pageDescription =
  "Welcome to my personal blog! Here I share the reasons for creating this space and sharing my insights with other people";

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
