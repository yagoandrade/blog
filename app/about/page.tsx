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
            Since a young age, I&apos;ve been fascinated with computers, games and problem-solving. I&apos;ve embarked
            on a journey of exploration, experimenting with diverse programming languages, paradigms, and software
            architectures. Continually seeking fresh avenues for innovation and conquering challenges, I am committed to
            documenting my findings and sharing my evolving journey here.
          </p>
          <p className="my-4">
            Throughout my career, I&apos;ve also had the privilege of working with incredibly talented individuals.
            Collaborating on cutting-edge projects and discussing industry developments has helped me learn and grow
            personally and professionally. On this blog, I aim to share my experiences and thoughts with other
            developers.
          </p>
          <p className="my-4">
            In my articles, I try to cover various topics related to software engineering and frontend development. I
            constantly learn and evolve my skills to stay up-to-date with industry trends and technologies, so feel free
            to join me on this journey.
          </p>
        </div>
      </article>
    </section>
  );
}
