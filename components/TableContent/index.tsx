"use client";

import { Post } from "@/types/post";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsSortDown, BsSortUpAlt } from "react-icons/bs";
import PostViews from "../PostViews";

interface Props {
  posts: Post[];
}

const TableContent = ({ posts }: Props) => {
  const sortTypes = ["none", "asc", "desc"];

  const [rows, setRows] = useState(posts);

  const [sort, setSort] = useState({ property: "none", sortType: sortTypes[0] });
  const [dateSort, setDateSort] = useState(0);
  const [titleSort, setTitleSort] = useState(0);
  const [viewsSort, setViewsSort] = useState(0);

  useEffect(() => {
    if (sort.sortType === "none") {
      setRows(posts);
    }

    if (sort.sortType === "asc") {
      const sortedRows = rows;
      sortedRows.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });

      setRows(sortedRows);
    }
    if (sort.sortType === "desc") {
      const sortedRows = rows;
      sortedRows.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
      sortedRows.reverse();
      setRows(sortedRows);
    }
  }, [sort]);

  const sortBy = (sort: "date" | "title" | "views") => {
    let index: number;
    switch (sort) {
      case "date":
        index = (dateSort + 1) % sortTypes.length;
        setSort({ property: "date", sortType: sortTypes[index] });
        setDateSort(index);
        setTitleSort(0);
        setViewsSort(0);
        break;
      case "title":
        index = (titleSort + 1) % sortTypes.length;
        setSort({ property: "title", sortType: sortTypes[index] });
        setTitleSort(index);
        setDateSort(0);
        setViewsSort(0);
        break;
      case "views":
        index = (viewsSort + 1) % sortTypes.length;
        setSort({ property: "views", sortType: sortTypes[index] });
        setViewsSort(index);
        setDateSort(0);
        setTitleSort(0);
        break;
      default:
        setSort({ property: "none", sortType: sortTypes[0] });
        break;
    }
  };

  return (
    <section className="text-sm lg:text-sm flex flex-col">
      <span className="text-left border-b h-fit flex w-full justify-start">
        <button
          className="min-w-[4.5rem] lg:min-w-[6rem] text-left flex gap-x-1 items-center justify-between px-1 lg:px-3 hover:bg-gray-100
          dark:hover:bg-gray-800 py-2"
          onClick={() => sortBy("date")}
        >
          date
          {sort.property === "date" && sort.sortType === "asc" && (
            <BsSortDown className="dark:text-white text-black" size="1.2rem" />
          )}
          {sort.property === "date" && sort.sortType === "desc" && (
            <BsSortUpAlt className="dark:text-white text-black" size="1.2rem" />
          )}
        </button>
        <button
          className="w-full text-left flex gap-x-3 items-center justify-between px-1 lg:px-3 hover:bg-gray-100
          dark:hover:bg-gray-800 py-2"
          onClick={() => sortBy("title")}
        >
          title
          {sort.property === "title" && sort.sortType === "asc" && (
            <BsSortDown className="dark:text-white text-black" size="1.2rem" />
          )}
          {sort.property === "title" && sort.sortType === "desc" && (
            <BsSortUpAlt className="dark:text-white text-black" size="1.2rem" />
          )}
        </button>
        <button
          className="text-left min-w-[4.5rem] lg:min-w-[6rem] flex gap-x-1 items-center justify-between px-1 lg:px-3 hover:bg-gray-100
          dark:hover:bg-gray-800 py-2"
          onClick={() => sortBy("views")}
        >
          views
          {sort.property === "views" && sort.sortType === "asc" && (
            <BsSortDown className="dark:text-white text-black" size="1.2rem" />
          )}
          {sort.property === "views" && sort.sortType === "desc" && (
            <BsSortUpAlt className="dark:text-white text-black" size="1.2rem" />
          )}
        </button>
      </span>
      <div className="text-left w-full">
        <div className="text-left w-full">
          {rows?.map((post: Post) => (
            <Link
              href={post.link}
              key={post.link}
              className="dark:hover:bg-gray-800 hover:bg-zinc-100 dark:text-white text-sm py-3 w-full flex gap-x-3 lg:px-2"
            >
              <span className="min-w-[4.5rem] lg:min-w-[6rem] dark:text-gray-400 text-gray-500">
                {new Date(post.created_at).toLocaleDateString("en-us")}
              </span>
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
