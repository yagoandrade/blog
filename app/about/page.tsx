// about.tsx
import Image from "next/image";
import imgSrc from "/public/images/image.90820376d6e59c005a22.jpg";

export const metadata = {
  title: `About Me | Yago's Blog`,
  description: "About Yago.",
  openGraph: {
    title: `About Me | Yago's Blog`,
    description: "About Yago.",
  },
};

export default async function Page() {
  return (
    <section className="flex">
      <article>
        <h1 className="text-xl font-bold dark:text-white text-black">About</h1>
        <a href="https://twitter.com/yagoandradev" target="_blank" rel="noreferrer" className="relative z-10">
          <Image
            src={imgSrc}
            alt="Yago"
            draggable={false}
            className="rounded-full bg-gray-100 mt-2 mb-5 mx-auto sm:float-right max-h-[175px] w-[175px] shadow-xl object-cover sm:ml-5 sm:mb-5 hover:outline hover:outline-1 dark:hover:outline-white outline-green-400 transition duration-150"
            unoptimized
            priority
          />
        </a>
        <div className="w-full leading-relaxed relative text-sm">
          <p className="my-4">
            As a passionate software engineer, I&apos;ve always been captivated by computers, games, and
            problem-solving. Specializing in frontend development and web technologies, I have continuously explored
            diverse programming languages, paradigms, and software architectures, always eager to innovate and surmount
            challenges.
          </p>
          <p className="my-4">
            Having the privilege of working with talented peers on cutting-edge projects has greatly enhanced my
            personal and professional growth. Through this blog, I intend to share my insights and experiences with
            fellow developers.
          </p>
          <p className="my-4">
            My articles cover a spectrum of topics related to software engineering and frontend development, reflecting
            my commitment to staying current with industry trends and technologies. Feel free to join me on this
            ever-evolving journey.
          </p>
        </div>
      </article>
    </section>
  );
}
