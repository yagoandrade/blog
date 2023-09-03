const Footer = () => {
  return (
    <footer className="flex justify-between w-full p-4 lg:p-8 dark:text-white text-sm font-mon">
      <a href="https://linktr.ee/yagoandrade" target="_blank" rel="noreferrer" className="underline decoration-dotted">
        About me
      </a>
      <a
        href="https://github.com/yagoandrade/blog"
        target="_blank"
        rel="noreferrer"
        className="underline decoration-dotted"
      >
        Source code
      </a>
    </footer>
  );
};

export default Footer;
