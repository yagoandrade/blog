import { Post } from "@/types/post";
import kv from "@vercel/kv";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { rows }: { rows: Post[] } = await sql`SELECT id, title, link, created_at FROM posts`;

  for await (const post of rows) post.views = ((await kv.get(post.link ?? "")) as number) ?? 0;

  const data = JSON.stringify(rows);
  return NextResponse.json({ data });
}
