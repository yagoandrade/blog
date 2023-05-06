"use server";

import kv from "@vercel/kv";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function incrementPathViews(link: string) {
  await sql`UPDATE posts SET views = views + 1 WHERE link = (${link});`;
  await kv.incr(link);
  revalidatePath("/");
}
