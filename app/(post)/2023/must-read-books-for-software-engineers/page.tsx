// MustReadForSoftwareEngineers.tsx

import { Post } from "@/types/post";
import { sql } from "@vercel/postgres";

const pageTitle = "7 Must-Read Books for Software Engineers: From Beginner to Advanced";
const pageLink = "/2023/must-read-books-for-software-engineers";

export const metadata = {
  title: `${pageTitle} | Yago's Blog`,
  description:
    "Let's delve into the world of frontend engineering outside of web development, exploring the technologies used, the companies hiring for these skills, and the valuable software created without a web frontend layer",
  openGraph: {
    title: `${pageTitle} | Yago's Blog`,
    description:
      "Let's delve into the world of frontend engineering outside of web development, exploring the technologies used, the companies hiring for these skills, and the valuable software created without a web frontend layer",
  },
};

export default async function Page() {
  async function getData() {
    "use server";
    const { rows } = await sql`SELECT * FROM posts WHERE title = (${pageTitle});`;

    return rows[0];
  }

  const post = (await getData()) as Post;
  const views = post.views;

  return (
    <article>
      <div className="flex flex-col gap-y-3 dark:text-gray-300 text-gray-700 leading-7 tracking-normal">
        <span className="flex justify-between w-full">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </span>

        <span className="flex justify-between text-xs dark:text-gray-400 text-gray-600 font-mono">
          <span className="flex flex-col lg:flex-row">
            <p>@yagoandrade</p>
            <p className="lg:flex hidden mx-1">|</p>
            <p>
              {post.created_at.toDateString()} {/* {relativeTime === "in 0 days" ? "now" : relativeTime} */}
            </p>
          </span>
          <p>{views} views</p>
        </span>
        {post.image.length > 0 && (
          <div className="flex flex-col gap-y-1 w-full">
            <img
              src={post.image}
              alt="header_image"
              className="border p-0.5 rounded-lg border-zinc-500 object-cover flex h-72 object-cover w-full"
            />
            <a
              href="https://www.quantamagazine.org/computer-scientist-donald-knuth-cant-stop-telling-stories-20200416/"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-right dark:text-gray-400 text-gray-600 my-1 hover:underline decoration-dotted"
            >
              © Quantamagazine
            </a>
          </div>
        )}

        <p className="mt-3">
          {
            "A successful career in software engineering is built on a strong foundation of knowledge and continuous learning. Books can be a great way to deepen your understanding, expand your skill set, and stay up-to-date with the latest trends in the industry. In this blog post, we'll explore seven essential books for software engineers, catering to various experience levels, from beginner to advanced."
          }
        </p>
        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
          <p className="italic font-medium leading-relaxed text-[#17141E] dark:text-white">
            {"The reading of all good books is like a conversation with the finest minds of past centuries."}
          </p>
          <p className="text-right">- Rene Descartes</p>
        </blockquote>
        <h3 className="font-semibold text-xl my-3">{`Beginner Level: "Clean Code" by Robert C. Martin (Uncle Bob)`}</h3>
        <p>
          {`"Clean Code" is a must-read for anyone starting their journey in software engineering. Written by Robert C.
          Martin, a renowned software engineer and author, this book teaches the principles and practices of writing
          clean, maintainable, and efficient code. By following the guidelines and techniques presented in "Clean Code,"
          you'll be able to improve your coding skills and contribute to better software development.`}
        </p>
        <h3 className="font-semibold text-xl my-3">
          {`Beginner Level: "Introduction to Algorithms" by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and
          Clifford Stein`}
        </h3>
        <p>
          {`Algorithms are the backbone of computer science, and "Introduction to Algorithms" is an excellent resource for beginners looking to strengthen their foundation in this area. This comprehensive book covers a broad range of algorithms in depth, while providing accessible explanations and pseudocode for each algorithm. By studying this book, you'll gain a solid understanding of algorithm design and analysis, which is essential for solving complex problems in software engineering.`}
        </p>
        <h3 className="font-semibold text-xl my-3">
          {`Intermediate Level: "The Pragmatic Programmer" by Andrew Hunt and David Thomas`}
        </h3>
        <p>
          {`Algorithms are the backbone of computer science, and "Introduction to Algorithms" is an excellent resource for
          beginners looking to strengthen their foundation in this area. This comprehensive book covers a broad range of
          algorithms and data structures in depth, while providing accessible explanations and pseudocode for each
          algorithm. By studying this book, you'll gain a solid understanding of algorithm design and analysis, which is
          essential for solving complex problems in software engineering.`}
        </p>
        <h3 className="font-semibold text-xl my-3">
          {`Intermediate Level: "You Don't Know JS" (book series) by Kyle Simpson`}
        </h3>
        <p>
          {`JavaScript is a ubiquitous language in the world of software engineering, and the "You Don't Know JS" book
          series by Kyle Simpson is an excellent resource to deepen your understanding of the language. This series
          consists of six books, each focusing on a specific aspect of JavaScript, such as scope, closures, prototypes,
          and asynchronous programming. Reading these books will give you a comprehensive understanding of JavaScript
          and help you tackle real-world programming challenges.`}
        </p>
        <h3 className="font-semibold text-xl my-3">
          {`Advanced Level: "Design Patterns: Elements of Reusable Object-Oriented Software" by Erich Gamma, Richard Helm,
          Ralph Johnson, and John Vlissides (Gang of Four)`}
        </h3>
        <p>
          {` For experienced software engineers looking to level up their skills, "Design Patterns: Elements of Reusable
          Object-Oriented Software" is a must-read. This seminal work, authored by four renowned computer scientists
          (collectively known as the Gang of Four), introduces 23 design patterns that can be applied to a wide range of
          software development problems. By mastering these patterns, you'll be able to craft more efficient, scalable,
          and maintainable software.`}
        </p>
        <h3 className="font-semibold text-xl my-3">
          {`Advanced Level: "Refactoring: Improving the Design of Existing Code" by Martin Fowler`}
        </h3>
        <p>
          {`As a seasoned software engineer, you'll often find yourself working with legacy code that needs improvement.
          "Refactoring: Improving the Design of Existing Code" by Martin Fowler is a comprehensive guide to refactoring
          techniques that can help you transform existing codebases into more maintainable and efficient systems. By
          applying the principles and techniques discussed in this book, you'll be able to enhance the quality of your
          software and make it easier to adapt and extend.`}
        </p>
        <h3 className="font-semibold text-xl my-3">
          {`Advanced Level: "The Art of Computer Programming" (book series) by Donald E. Knuth`}
        </h3>
        <p>
          {`Of course, how could I not mention him? Donald E. Knuth is one of the most influential computer scientists of
          all time, and "The Art of Computer Programming" is the book series that made him one of the best writers in
          the field. This series is considered a classic and covers a wide range of topics, including algorithms, data
          structures, combinatorial algorithms, and more. While TAOCP is a challenging read, it provides unparalleled
          depth and rigor for those seeking to expand their understanding of computer science and programming.`}
        </p>

        <p className="text-center font-bold text-gray-500 pointer-events-none">* * *</p>
        <p>
          {`These seven books, ranging from beginner to advanced levels, offer valuable insights and techniques to help
          you grow in your career as a software engineer. By investing time in continuous learning and expanding your
          knowledge, you'll not only stay ahead of the curve but also become a more versatile and effective developer.
          Happy reading!`}
        </p>
      </div>
    </article>
  );
}
