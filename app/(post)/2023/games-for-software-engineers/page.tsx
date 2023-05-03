// GamesForSoftwareEngineers.tsx

import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import { Tweet } from "react-tweet";

const jetBrainsMono = JetBrains_Mono({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
});

export const metadata = {
  title: "Games for Software Engineers | Yago Andrade's Blog",
  description: "What are some of the games that SWEs are playing?",
  // Insert other metadata here
};

const GamesForSoftwareEngineers = () => {
  return (
    <article>
      <div className="flex flex-col gap-y-3 dark:text-gray-300 text-gray-700">
        <h1 className="text-2xl font-bold">Games for Software Engineers</h1>
        <span className="flex justify-between text-xs dark:text-gray-400 text-gray-600" style={jetBrainsMono.style}>
          <span className="flex flex-col lg:flex-row">
            <p>@yagoandrade</p>
            <p className="lg:flex hidden mx-1">|</p>
            <p> May 2nd, 2023 (two weeks ago)</p>
          </span>
          <p>34,589 views</p>
        </span>
        <div className="flex flex-col gap-y-1">
          <Image
            src="https://i.ytimg.com/vi/6SKxK-mf81k/maxresdefault.jpg"
            alt="header_image"
            className="border p-0.5 rounded-lg border-zinc-500"
            width={700}
            height={300}
          />
          <a href="#" className="text-xs text-right text-zinc-500 hover:underline decoration-dotted">
            © Resident Evil 4 - Capcom
          </a>
        </div>

        <p className="mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta consectetur dolorem dolorum laborum ab natus?
          Officia voluptates architecto nostrum id, doloremque blanditiis perferendis hic, itaque labore expedita rem
          velit dolore.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe reprehenderit amet consequatur, delectus
          consequuntur error ut distinctio, perferendis, libero ipsa vitae? Cupiditate nulla porro culpa voluptate iure
          cum, ipsam delectus.
        </p>
        <span>
          <a
            href="#"
            className="dark:text-blue-400 text-blue-500 hover:underline decoration-dotted transition duration-300"
          >
            Resident Evil 4 {""}
          </a>
          is, oficially, <b>one of the games ever released.</b>
        </span>
        <h3 className="font-semibold text-xl my-5">Logic games</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, voluptates! Veniam dignissimos odio, nam aut
          laudantium harum magni quas dolorum corrupti iste sequi eligendi doloremque natus nulla quo laborum animi.
        </p>
        <Tweet id="1652010288445804544" />
        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-zinc-800">
          <p className="italic font-medium leading-relaxed text-gray-900 dark:text-white">
            {
              "Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them."
            }
          </p>
          <p className="text-right">- Shakespeare</p>
        </blockquote>
        <p className="text-center font-bold text-zinc-500 pointer-events-none">* * *</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aut repellendus neque optio, beatae minima
          iure earum quibusdam itaque labore cum natus, sit alias cumque voluptatem voluptatibus error fugiat accusamus?
        </p>
      </div>
    </article>
  );
};

export default GamesForSoftwareEngineers;
