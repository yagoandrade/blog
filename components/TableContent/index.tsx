"use client";
import { Post } from "@/types/post";
import { formatDate } from "@/utils/clientCommon";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsSortDown, BsSortUpAlt } from "react-icons/bs";

interface Props {
  posts: Post[];
}

const sortTypes = ["none", "asc", "desc"];

const TableContent = ({ posts }: Props) => {
  const [rows, setRows] = useState(posts);
  const [sort, setSort] = useState({ property: "none", sortType: sortTypes[0] });

  useEffect(() => {
    const sortRows = (property: keyof Post, sortType: string) => {
      if (sortType === "none") return posts;
      return [...rows].sort((a, b) => {
        if (a[property] < b[property]) return -1;
        if (a[property] > b[property]) return 1;
        return 0;
      });
    };

    const sortedRows = sortRows(sort.property as keyof Post, sort.sortType);
    if (sort.sortType === "desc") sortedRows.reverse();
    setRows(sortedRows);
  }, [sort]);

  const sortBy = (property: "date" | "title" | "views") => {
    const currentSortType = sort.property === property ? sort.sortType : "none";
    const nextSortType = sortTypes[(sortTypes.indexOf(currentSortType) + 1) % sortTypes.length];
    setSort({ property, sortType: nextSortType });
  };

  const SortButton = ({ property }: { property: "date" | "title" | "views" }) => (
    <button
      className={`flex gap-x-2 items-center hover:bg-[#eeedef] dark:hover:bg-[#242424] dark:text-[#676b71] dark:hover:text-white p-2 lg:pl-3 ${
        property === "date" ? "w-24 justify-end" : "justify-start w-full"
      }`}
      onClick={() => sortBy(property)}
    >
      {property === "title" && <span>Title</span>}
      {sort.property === property && sort.sortType === "asc" && <BsSortDown size="1rem" />}
      {sort.property === property && sort.sortType === "desc" && <BsSortUpAlt size="1rem" />}
      {property === "date" && <span>Date</span>}
    </button>
  );

  return (
    <section className="text-sm lg:text-sm flex flex-col text-left font-mono">
      <span className="h-fit flex w-full">
        <span className="w-full">
          <SortButton property="title" />
        </span>
        <span className="flex justify-end">
          <SortButton property="date" />
        </span>
      </span>

      <section className="w-full">
        {rows?.map((post: Post, idx: number) => (
          <Link
            href={post.link}
            key={post.link}
            className={`dark:hover:bg-[#242424] dark:text-white dark:hover:text-white hover:bg-[#eeedef] dark:text-white text-sm py-3 w-full flex p-2 gap-x-8 ${
              idx + 1 !== rows.length ? "border-b border-[#d4d4d4] dark:border-[#242424]" : ""
            }`}
          >
            <span className="break-words w-full lg:pl-1">
              <p className="w-fit">{post.title}</p>
            </span>
            <span className="w-fit">{formatDate(new Date(post.created_at))}</span>
          </Link>
        ))}
      </section>
    </section>
  );
};

export default TableContent;
