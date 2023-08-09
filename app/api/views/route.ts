import { Post } from "@/types/post";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const { rows }: { rows: Post[] } = await sql`SELECT views FROM posts WHERE id = ${id};`;

  const views = JSON.stringify(rows[0].views);

  return NextResponse.json(rows[0].views);
}
