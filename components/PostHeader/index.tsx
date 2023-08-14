import PostImageHolder from "../PostImageHolder";

interface Props {
  title: string;
  author?: string;
  createdAt: Date;
  views: number;
  imgSrc?: string;
  copyright?: string;
}

const PostHeader = ({ title, author = "Yago", createdAt, views, imgSrc, copyright }: Props) => {
  return (
    <>
      <h1 className="mb-0">{title}</h1>
      <span className="flex justify-between text-sm dark:text-gray-400 text-gray-600 text-base font-mono my-0 not-prose items-center -mt-2 mb-4">
        <span className="flex flex-col lg:flex-row mt-2">
          {/* <p>{author}</p>
          <p className="lg:flex hidden mx-1">at</p> */}
          <p>
            {createdAt.toLocaleString("en-US", {
              hour12: false,
              hour: "2-digit",
              minute: "2-digit",
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "UTC",
            })}
          </p>
        </span>
        <p>{views} views</p>
      </span>
      {imgSrc && <PostImageHolder src={imgSrc} copyright={copyright} />}
    </>
  );
};

export default PostHeader;
