import kv from "@vercel/kv";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const link = searchParams.get("link");

  const views = ((await kv.get(link ?? "")) as number) ?? 0;

  const data = JSON.stringify(views);
  return NextResponse.json({ data });
}
