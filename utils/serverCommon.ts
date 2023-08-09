"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function incrementPathViewsOnDatabase(link: string) {
  "use server";
  await sql`UPDATE posts SET views = views + 1 WHERE link = (${link});`;
  revalidatePath("/");
}
