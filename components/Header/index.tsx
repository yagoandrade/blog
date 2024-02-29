"use client";

import { incrementPostViewsOnLocalStorage } from "@/utils/clientCommon";
import { incrementPathViewsOnDatabase } from "@/utils/serverCommon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
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
    <header className="w-full px-3 py-4 lg:px-3 lg:py-6 flex justify-between items-center">
      <Link
        href="/"
        className="dark:hover:bg-[#242424] hover:bg-[#eeedef] dark:text-[#676b71] dark:hover:text-[#e4e4e4] text-lg sm:text-xl font-semibold py-2 px-3 font-inter"
      >
        Yago Andrade
      </Link>
      <span className="flex gap-x-0.5 items-center justify-center font-mono pr-2.5 lg:-mr-2">
        <ThemeToggle />
        <a
          href="https://github.com/yagoandrade"
          target="_blank"
          rel="noreferrer"
          className="hidden lg:flex dark:hover:bg-[#242424] hover:bg-[#eeedef] dark:text-[#a6abb4] dark:hover:text-[#e4e4e4] text-sm px-2 py-1.5 h-full"
        >
          🌎 Find me elsewhere
        </a>
      </span>
    </header>
  );
}
