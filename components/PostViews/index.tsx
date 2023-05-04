"use client";

import { Post } from "@/types/post";
import { useEffect, useState } from "react";

interface Props {
  post: Post;
}

export default function PostViews({ post }: Props) {
  const [views, setViews] = useState<number | null>(post.views);

  async function getViews() {
    const res: Response = await fetch(`/api/hello?link=${post.link}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { data } = await res.json();
    setViews(JSON.parse(data));
  }

  useEffect(() => {
    getViews();
  }, []);

  useEffect(() => {
    post.views = views as number;
  }, [views]);

  return <span className="min-w-[4rem]">{views ?? "-"}</span>;
}
