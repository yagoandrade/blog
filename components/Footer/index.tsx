const Footer = () => {
  return (
    <footer className="flex justify-between w-full p-8 dark:text-white text-sm font-mono">
      <a
        href="https://github.com/yagoandrade"
        target="_blank"
        rel="noreferrer"
        className="hover:underline decoration-dotted"
      >
        Yago Andrade
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
