import { Post } from "@/types/post";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { rows }: { rows: Post[] } = await sql`SELECT * FROM posts ORDER BY created_at DESC;`;

  const _rows = rows.reduce((a, item) => ({ ...a, [item.id]: item.views }), {});

  const data = JSON.stringify(_rows);
  return NextResponse.json({ data });
}
