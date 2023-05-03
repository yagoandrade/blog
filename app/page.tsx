import { links } from "@/utils/links";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const jetBrainsMono = JetBrains_Mono({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
});

export default function Home() {
  return (
    <main className="flex flex-col min-w-full" style={jetBrainsMono.style}>
      <section className="text-sm flex flex-col">
        <span className="text-left border-b pb-2 h-fit flex w-full justify-start gap-x-3 px-2">
          <button className="min-w-[4rem] text-left">date</button>
          <h3 className="w-full">title</h3>
          <button className="text-left min-w-[4rem]">views</button>
        </span>
        <div className="text-left w-full">
          {links.map((post) => (
            <Link
              href={post.link}
              key={post.link}
              className="dark:hover:bg-zinc-800 hover:bg-zinc-100 dark:text-white text-sm py-3 w-full flex gap-x-3 px-2"
            >
              <span className="min-w-[4rem] text-gray-500">{post.year}</span>
              <span className="w-full">{post.title}</span>
              <span className="min-w-[4rem]">{post.views}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
