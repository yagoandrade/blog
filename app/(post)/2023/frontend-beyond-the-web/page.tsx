// FrontendBeyondTheWeb.tsx

import PostHeader from "@/components/PostHeader";
import PostContent from "@/posts/frontend-beyond-the-web.mdx";

import { sql } from "@vercel/postgres";

const pageTitle = "Frontend Development Beyond the Web: Exploring Alternative Technologies";
const pageDescription =
  "Let's delve into the world of frontend engineering outside of web development, exploring the technologies used, the companies hiring for these skills, and the valuable software created without a web frontend layer";

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
    <article className="prose prose-base md:prose-lg lg:prose-xl dark:prose-invert prose-headings:my-7 mt-10 prose-p:my-4 prose-hr:my-4 flex flex-col dark:text-gray-100 text-gray-700 leading-7 tracking-normal min-w-full mb-16">
      <PostHeader
        title={post.title}
        createdAt={post.created_at.toDateString()}
        views={post.views}
        imgSrc={post.image}
        copyright="© Fili Santillán - Unsplash"
      />

      <PostContent />
    </article>
  );
}
