interface Props {
  src: string;
  copyright?: string;
}

const PostImageHolder = ({ src, copyright }: Props) => {
  return (
    <div className="flex flex-col mb-4 not-prose">
      <img src={src} alt="header_image" className="object-cover flex h-72 object-cover w-full my-0" />
      {copyright && (
        <p className="text-xs text-right dark:text-gray-400 text-gray-600 my-1 hover:underline decoration-dotted">
          {copyright}
        </p>
      )}
    </div>
  );
};

export default PostImageHolder;
