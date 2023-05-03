import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { ThemeToggle } from "../ThemeToggle";

const jetBrainsMono = JetBrains_Mono({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
});

const Header = () => {
  return (
    <header className="w-full p-6 flex justify-between items-center">
      <Link href="/" className="dark:hover:bg-zinc-800 hover:bg-zinc-100 dark:text-white font-semibold text-lg p-2">
        Yago Andrade
      </Link>
      <span className="flex gap-x-2 items-center" style={jetBrainsMono.style}>
        <ThemeToggle />
        <Link href="/about" className="dark:hover:bg-zinc-800 hover:bg-zinc-100 dark:text-white text-xs p-2">
          About
        </Link>
        <a
          href="https://github.com/yagoandrade"
          target="_blank"
          rel="noreferrer"
          className="dark:hover:bg-zinc-800 hover:bg-zinc-100 dark:text-white text-xs p-2"
        >
          <span className="hidden lg:flex">🌎 Find me elsewhere</span>
          <span className="flex lg:hidden">
            <AiFillGithub size="1.33rem" />
          </span>
        </a>
      </span>
    </header>
  );
};

export default Header;
