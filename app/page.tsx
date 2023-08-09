import TableContent from "@/components/TableContent";
import { Post } from "@/types/post";
import { sql } from "@vercel/postgres";

export default async function Home() {
  const { rows }: { rows: Post[] } =
    await sql`SELECT id, title, image, link, description, created_at FROM posts ORDER BY created_at DESC;`;

  return (
    <main className="flex flex-col min-w-full font-mono">
      <TableContent posts={rows} />
    </main>
  );
}
