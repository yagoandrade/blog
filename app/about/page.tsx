// about.tsx
import Image from "next/image";
import imgSrc from "/public/images/image.90820376d6e59c005a22.jpg";

export default function Page() {
  return (
    <section className="flex">
      <article>
        <h1 className="text-xl font-bold dark:text-white text-black">Page</h1>
        <a href="https://twitter.com/yagodotdev" target="_blank" rel="noreferrer" className="relative z-10">
          <Image
            src={imgSrc}
            alt="Yago Andrade"
            draggable={false}
            className="rounded-full bg-gray-100 mt-2 mb-5 mx-auto sm:float-right max-h-[175px] w-[175px] shadow-xl object-cover sm:ml-5 sm:mb-5 hover:outline hover:outline-1 dark:hover:outline-white outline-green-400 transition duration-150"
            unoptimized
            priority
            placeholder="blur"
          />
        </a>
        <div className="w-full leading-relaxed relative">
          <p className="my-4">
            I&#39;m a software engineer with a strong focus on frontend development and web technologies.
          </p>
          <p className="my-4">
            I spent my early teens solving miniature problems using C++ and playing computer games to pass the time, it
            devolved to using C and having no time to play in college, but hey! At least a few good memories were made.
          </p>
          <p className="my-4">
            After joining the Phantom Network core team, I helped develop state-of-the-art web3 applications with an
            international team using JavaScript and its frontend frameworks.
          </p>
          <p className="my-4">
            While you&#39;re here, don&#39;t forget to read some of my articles on Computer Science, Artificial
            Intelligence and Software Engineering (mostly Frontend engineering!) topics, as those are my most covered
            subjects on this blog.
          </p>
        </div>

        {/* <h1 className="text-xl font-bold dark:text-white text-black">Technical contributions</h1>
        <ul className="list-disc">
          <li>Done something</li>
          <li>Done something</li>
          <li>Done something</li>
          <li>Done something</li>
        </ul> */}
      </article>
    </section>
  );
}
