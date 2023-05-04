"use client";

import { Post } from "@/types/post";
import Link from "next/link";
import { useEffect, useState } from "react";

const PostsList = () => {
  const [rows, setRows] = useState([]);

  async function getPosts() {
    const res: Response = await fetch("/api/hello", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { data } = await res.json();
    setRows(JSON.parse(data));
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="text-left w-full">
      {rows?.map((post: Post, index) => (
        <Link
          href={post.link}
          key={post.link}
          className="dark:hover:bg-zinc-800 hover:bg-zinc-100 dark:text-white text-sm py-3 w-full flex gap-x-3 px-2"
        >
          <span className="min-w-[4rem] text-gray-500">{new Date(post.created_at).getFullYear()}</span>
          <span className="w-full">{post.title}</span>
          <span className="min-w-[4rem]">{post.views}</span>
        </Link>
      ))}
    </div>
  );
};

export default PostsList;
