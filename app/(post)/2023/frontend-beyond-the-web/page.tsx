// FrontendBeyondTheWeb.tsx

import { sql } from "@vercel/postgres";

const pageTitle = "Frontend Development Beyond the Web: Exploring Alternative Technologies";

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
  const { rows } = await sql`SELECT * FROM posts WHERE title = (${pageTitle}) ORDER BY title ASC;`;
  const post = rows[0];
  const views = post.views;

  return (
    <article>
      <div className="flex flex-col gap-y-3 dark:text-gray-100 text-gray-700 leading-7 tracking-normal">
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
          <div className="flex flex-col gap-y-1">
            <img
              src={post.image}
              alt="header_image"
              className="border p-0.5 rounded-lg border-zinc-500 object-cover flex h-72 object-cover w-full"
            />
            <a
              href="https://unsplash.com/pt-br/fotografias/1HCb2gPk3ik"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-right dark:text-gray-400 text-gray-600 my-1 hover:underline decoration-dotted"
            >
              © Fili Santillán - Unsplash
            </a>
          </div>
        )}

        <p className="mt-3">
          Frontend development is often associated with web development, but it extends far beyond that realm. In a
          world dominated by web and mobile applications, it&apos;s easy to overlook the wide variety of other frontend
          technologies that are shaping the way we interact with software. In this blog post, we&apos;ll delve into the
          world of frontend development outside of web development, exploring the technologies used, the companies
          hiring for these skills, and the valuable software created without a web frontend layer.
        </p>

        <h3 className="font-semibold text-xl my-3">Desktop Application Development</h3>
        <p>
          Languages and frameworks like C++, C#, Java, and Python, along with GUI libraries such as Qt, GTK+, and WPF,
          are commonly used to develop desktop applications with rich user interfaces.
        </p>
        <h3 className="font-semibold text-xl my-3">Mobile Application Development</h3>
        <p>
          For native mobile app development, developers often use languages like Swift for iOS and Kotlin for Android,
          along with platform-specific SDKs (Software Development Kits) provided by Apple and Google.
        </p>
        <h3 className="font-semibold text-xl my-3">Game Development</h3>
        <p>
          Frontend game development typically involves the use of game engines like Unity, Unreal Engine, or Godot.
          These engines provide tools and frameworks to create engaging, interactive user experiences.
        </p>
        <h3 className="font-semibold text-xl my-3">Embedded Systems and IoT Devices</h3>
        <p>
          For frontend development on embedded systems and IoT devices, languages like C, C++, and Rust are popular
          choices, along with specific libraries and frameworks designed for the hardware in question.
        </p>
        <p className="text-center font-bold text-gray-500 pointer-events-none">* * *</p>
        <p>
          Various industries and companies seek talented frontend developers for non-web projects. Software companies
          like Adobe and Microsoft, game studios such as Electronic Arts and Ubisoft, and hardware manufacturers like
          Apple and Samsung hire frontend developers to create visually appealing and engaging user interfaces for
          desktop applications, mobile apps, video games, and embedded systems. Examples of valuable software without
          web frontend layers include Adobe Creative Suite, Microsoft Office Suite, popular mobile apps like Instagram,
          and video games like Red Dead Redemption 2. Furthermore, smart home devices such as Amazon Echo and Apple
          HomePod also feature user interfaces designed specifically for their hardware.
        </p>
      </div>
    </article>
  );
}
