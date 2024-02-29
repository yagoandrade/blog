import { BsGithub, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex justify-between w-full p-4 lg:p-8 dark:text-[#a6abb4] text-sm font-mono">
      <a href="https://linktr.ee/yagoandrade" target="_blank" rel="noreferrer" className="underline decoration-dotted">
        About me
      </a>
      <div className="flex gap-x-2">
        <a href="https://twitter.com/yagoandradev" target="_blank" rel="noreferrer">
          <BsTwitter size="1.1rem" />
        </a>
        <a href="https://github.com/yagoandrade" target="_blank" rel="noreferrer">
          <BsGithub size="1.1rem" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
