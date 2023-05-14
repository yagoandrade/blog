import TableContent from "@/components/TableContent";
import { Post } from "@/types/post";
import { sql } from "@vercel/postgres";

/* export const metadata = {
  title: "Yago Andrade's blog",
  description: "Made with NextJS",
  openGraph: {
    title: "Yago Andrade's blog",
    description: "Made with NextJS",
  },

  icons: {
    icon: "/favicon/favicon.ico",
  },
}; */

export default async function Home() {
  const { rows }: { rows: Post[] } = await sql`SELECT * FROM posts ORDER BY created_at DESC;`;

  return (
    <main className="flex flex-col min-w-full font-mono">
      <TableContent rows={rows} />
    </main>
  );
}
