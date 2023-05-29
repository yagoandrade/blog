"use client";

import { incrementPathViews } from "@/utils/common";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { ThemeToggle } from "../ThemeToggle";

export default function Header() {
  const pathname = usePathname();

  useEffect(() => {
    incrementPathViews(pathname);
  }, [pathname]);

  return (
    <header className="w-full px-3 py-4 lg:px-6 lg:py-6 flex justify-between items-center">
      <Link href="/" className="dark:hover:bg-gray-800 hover:bg-zinc-100 dark:text-white font-semibold text-lg p-2">
        Yago Andrade
      </Link>
      <span className="flex gap-x-2 items-center font-mono">
        <ThemeToggle />
        <Link href="/about" className="dark:hover:bg-gray-800 hover:bg-zinc-100 dark:text-white text-xs p-2">
          About
        </Link>
        <a
          href="https://github.com/yagoandrade"
          target="_blank"
          rel="noreferrer"
          className="dark:hover:bg-gray-800 hover:bg-zinc-100 dark:text-white text-xs p-2"
        >
          <span className="hidden lg:flex">🌎 Find me elsewhere</span>
          <span className="flex lg:hidden">
            <AiFillGithub size="1.33rem" />
          </span>
        </a>
      </span>
    </header>
  );
}
