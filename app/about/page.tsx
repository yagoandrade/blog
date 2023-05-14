// about.tsx
import Image from "next/image";
import imgSrc from "/public/images/image.90820376d6e59c005a22.jpg";

/* export const metadata = {
  title: `About Me | Yago Andrade's Blog`,
  description: "About Yago Andrade.",
  openGraph: {
    title: `About Me | Yago Andrade's Blog`,
    description: "About Yago Andrade.",
  },
}; */

export default function Page() {
  return (
    <section className="flex">
      <article>
        <h1 className="text-xl font-bold dark:text-white text-black">About</h1>
        <a href="https://twitter.com/yagodotdev" target="_blank" rel="noreferrer" className="relative z-10">
          <Image
            src={imgSrc}
            alt="Yago Andrade"
            draggable={false}
            className="rounded-full bg-gray-100 mt-2 mb-5 mx-auto sm:float-right max-h-[175px] w-[175px] shadow-xl object-cover sm:ml-5 sm:mb-5 hover:outline hover:outline-1 dark:hover:outline-white outline-green-400 transition duration-150"
            unoptimized
            priority
          />
        </a>
        <div className="w-full leading-relaxed relative">
          <p className="my-4">
            I&#39;m a software engineer with a strong focus on frontend development and web technologies.
          </p>
          <p className="my-4">
            I have always been fascinated with computers since a young age, and my passion for solving problems led me
            to experiment with various programming languages and paradigms, and to solve a lot of problems in the
            computer science realm.
          </p>
          <p className="my-4">
            Throughout my career, I&#39;ve had the privilege of working with incredibly talented and awe-inspiring
            individuals. Collaborating on cutting-edge projects and discussing the latest industry developments has
            helped me to learn and grow both personally and professionally; on this blog, I hope to pay it forward by
            sharing my experiences and thoughts with other developers.
          </p>
          <p className="my-4">
            In my articles, I cover various topics related to software engineering and frontend development. I&#39;m
            constantly learning and evolving my skills to stay up-to-date with the latest industry trends and
            technologies, and I hope to share some of that knowledge and random thoughts about technology here.
          </p>
        </div>
      </article>
    </section>
  );
}
