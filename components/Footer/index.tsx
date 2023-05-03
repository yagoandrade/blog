import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
});

const Footer = () => {
  return (
    <footer className="flex justify-between w-full p-8 dark:text-white text-sm" style={jetBrainsMono.style}>
      <p>Yago Andrade</p>
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
