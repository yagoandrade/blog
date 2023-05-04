import PostsList from "@/components/PostsList";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
});

export const revalidate = 60;

export default async function Home() {
  return (
    <main className="flex flex-col min-w-full" style={jetBrainsMono.style}>
      <section className="text-sm flex flex-col">
        <span className="text-left border-b pb-2 h-fit flex w-full justify-start gap-x-3 px-2">
          <button className="min-w-[4rem] text-left">date</button>
          <h3 className="w-full">title</h3>
          <button className="text-left min-w-[4rem]">views</button>
        </span>
        <PostsList />
      </section>
    </main>
  );
}
