"use client";

import { Post } from "@/types/post";
import { getPostViewsFromLocalStorage, setPostViewsOnLocalStorage } from "@/utils/clientCommon";
import { useEffect, useState } from "react";

interface Props {
  post: Post;
}

export default function PostViews({ post }: Props) {
  const lsStoredViews = getPostViewsFromLocalStorage(post.link);

  const [views, setViews] = useState<number | null>(lsStoredViews ?? post.views);

  async function getViews() {
    const res: Response = await fetch(`/api/views?id=${post.id}`);
    const views = await res.json();
    setViews(views);
    setPostViewsOnLocalStorage(post.link, views);
  }

  useEffect(() => {
    getViews();
  }, []);

  useEffect(() => {
    post.views = views ?? 0;
  }, [views]);

  return <p className="min-w-[4.75rem] lg:min-w-[6rem] px-3 sm:px-5">{views ?? "-"}</p>;
}
