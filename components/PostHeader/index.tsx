import PostImageHolder from "../PostImageHolder";

interface Props {
  title: string;
  author?: string;
  createdAt: string;
  views: number;
  imgSrc?: string;
  copyright?: string;
}

const PostHeader = ({ title, author = "@yagoandrade", createdAt, views, imgSrc, copyright }: Props) => {
  return (
    <>
      <h1 className="mt-16 mb-0">{title}</h1>
      <span className="flex justify-between text-xs dark:text-gray-400 text-gray-600 font-mono my-0 not-prose items-center -mt-2 mb-4">
        <span className="flex flex-col lg:flex-row">
          <p>{author}</p>
          <p className="lg:flex hidden mx-1">|</p>
          <p>{createdAt}</p>
        </span>
        <p>{views} views</p>
      </span>
      {imgSrc && <PostImageHolder src={imgSrc} copyright={copyright} />}
    </>
  );
};

export default PostHeader;
