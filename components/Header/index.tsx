"use client";

import { incrementPostViewsOnLocalStorage } from "@/utils/clientCommon";
import { incrementPathViewsOnDatabase } from "@/utils/serverCommon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { ThemeToggle } from "../ThemeToggle";

export default function Header() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      incrementPathViewsOnDatabase(pathname);
      incrementPostViewsOnLocalStorage(pathname);
    }
  }, [pathname]);

  return (
    <header className="w-full px-3 py-4 lg:px-6 lg:py-6 flex justify-between items-center">
      <Link
        href="/"
        className="dark:hover:bg-[#242424] hover:bg-zinc-100 dark:text-white sm:text-xl font-semibold py-2 px-3 rounded-sm font-inter"
      >
        Yago Andrade
      </Link>
      <span className="flex gap-x-2 items-center font-mono">
        <ThemeToggle />
        <a
          href="https://github.com/yagoandrade"
          target="_blank"
          rel="noreferrer"
          className="dark:hover:bg-[#242424] hover:bg-zinc-100 dark:text-white text-sm p-2 h-full rounded-sm"
        >
          <span className="hidden lg:flex text-sm">🌎 Find me elsewhere</span>
          <span className="flex lg:hidden">
            <AiFillGithub size="1.33rem" />
          </span>
        </a>
      </span>
    </header>
  );
}
