"use client";

import { Post } from "@/types/post";
import Link from "next/link";
import PostViews from "../PostViews";

interface Props {
  rows: Post[];
}

const TableContent = ({ rows }: Props) => {
  return (
    <section className="text-sm flex flex-col">
      <span className="text-left border-b pb-2 h-fit flex w-full justify-start gap-x-3 px-2">
        <p className="min-w-[4rem] text-left flex gap-x-1 items-center">date</p>
        <h3 className="w-full">title</h3>
        <p className="text-left min-w-[4rem] flex gap-x-1 items-center">views</p>
      </span>
      <div className="text-left w-full">
        <div className="text-left w-full">
          {rows?.map((post: Post) => (
            <Link
              href={post.link}
              key={post.link}
              className="dark:hover:bg-zinc-800 hover:bg-zinc-100 dark:text-white text-sm py-3 w-full flex gap-x-3 px-2"
            >
              <span className="min-w-[4rem] text-gray-500">{new Date(post.created_at).getFullYear()}</span>
              <span className="w-full">{post.title}</span>
              <PostViews post={post} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TableContent;
