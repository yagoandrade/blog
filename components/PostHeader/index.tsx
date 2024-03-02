import PostImageHolder from "../PostImageHolder";

interface Props {
  title: string;
  author?: string;
  createdAt: Date;
  views: number;
  imgSrc?: string;
  copyright?: string;
}

const PostHeader = ({ title, createdAt, views, imgSrc, copyright }: Props) => {
  return (
    <>
      <h1 className="mb-0 font-soehne font-normal">{title}</h1>
      <span className="flex flex-wrap gap-x-3 justify-between text-sm text-gray-600 text-base my-0 not-prose items-center mt-2 mb-4 text-[#585b61] dark:text-[#676b71]">
        <span className="flex flex-col lg:flex-row">
          <p>
            Last edited:{" "}
            {createdAt.toLocaleString("en-US", {
              hour12: false,
              hour: "2-digit",
              minute: "2-digit",
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
