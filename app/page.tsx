import PostViews from "@/components/PostViews";
import { Post } from "@/types/post";
import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function Home() {
  const { rows }: { rows: Post[] } = await sql`SELECT * FROM posts ORDER BY title ASC;`;

  return (
    <main className="flex flex-col min-w-full font-mono">
      <section className="text-sm flex flex-col">
        <span className="text-left border-b pb-2 h-fit flex w-full justify-start gap-x-3 px-2">
          <button className="min-w-[5rem] text-left">date</button>
          <h3 className="w-full">title</h3>
          <button className="text-left min-w-[3.5rem]">views</button>
        </span>
        <div className="text-left w-full">
          <div className="text-left w-full">
            {rows?.map((post: Post, index) => (
              <Link
                href={post.link}
                key={post.link}
                className="dark:hover:bg-zinc-800 hover:bg-zinc-100 dark:text-white text-sm py-3 w-full flex gap-x-3 px-2"
              >
                <span className="min-w-[5rem] text-gray-500">{new Date(post.created_at).toLocaleDateString()}</span>
                <span className="w-full">{post.title}</span>
                <PostViews post={post} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
