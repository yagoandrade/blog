"use client";

import { Post } from "@/types/post";
import { formatDate } from "@/utils/clientCommon";
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
    if (sort.sortType === "none") setRows(posts);

    if (sort.sortType === "asc") {
      const sortedRows = rows;
      sortedRows.sort((a, b) => {
        if (a.title < b.title) return -1;
        else if (a.title > b.title) return 1;
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
    <section className="text-sm lg:text-sm flex flex-col text-left">
      <span className="h-fit flex w-full justify-start">
        <button
          className="w-full text-left flex gap-x-2 items-center hover:bg-gray-100 dark:hover:bg-[#242424] px-1.5 lg:px-3 py-2 w-full rounded-sm justify-between"
          onClick={() => sortBy("title")}
        >
          title
          {sort.property === "title" && sort.sortType === "asc" && (
            <BsSortDown className="dark:text-white text-black" size="1rem" />
          )}
          {sort.property === "title" && sort.sortType === "desc" && (
            <BsSortUpAlt className="dark:text-white text-black" size="1rem" />
          )}
        </button>
        <button
          className="flex gap-x-2 items-center hover:bg-gray-100 dark:hover:bg-[#242424] px-1 lg:px-3 py-2 min-w-[4.75rem] lg:min-w-[6rem] rounded-sm justify-between"
          onClick={() => sortBy("views")}
        >
          views
          {sort.property === "views" && sort.sortType === "asc" && (
            <BsSortDown className="dark:text-white text-black" size="1rem" />
          )}
          {sort.property === "views" && sort.sortType === "desc" && (
            <BsSortUpAlt className="dark:text-white text-black" size="1rem" />
          )}
        </button>
        <button
          className="flex gap-x-2 items-center hover:bg-gray-100 dark:hover:bg-[#242424] px-1 lg:px-3 py-2 min-w-[4.75rem] lg:min-w-[6rem] rounded-sm justify-between"
          onClick={() => sortBy("date")}
        >
          date
          {sort.property === "date" && sort.sortType === "asc" && (
            <BsSortDown className="dark:text-white text-black" size="1rem" />
          )}
          {sort.property === "date" && sort.sortType === "desc" && (
            <BsSortUpAlt className="dark:text-white text-black" size="1rem" />
          )}
        </button>
      </span>
      <section className="w-full">
        {rows?.map((post: Post, idx: number) => (
          <Link
            href={post.link}
            key={post.link}
            className={`dark:hover:bg-[#242424] hover:bg-zinc-100 dark:text-white text-sm py-3 w-full flex p-2 rounded-sm ${
              idx + 1 !== rows.length ? "border-b border-[#d4d4d4] dark:border-[#242424]" : ""
            }`}
          >
            <span className="break-words w-full lg:pl-1">{post.title}</span>
            <PostViews post={post} />
            <span className="min-w-[4.75rem] lg:min-w-[6rem] px-3 sm:px-5">
              {formatDate(new Date(post.created_at))}
            </span>
          </Link>
        ))}
      </section>
    </section>
  );
};

export default TableContent;
