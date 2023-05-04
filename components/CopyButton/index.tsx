"use client";
import { IoMdShareAlt } from "react-icons/io";

const CopyButton = () => {
  return (
    <button
      className="inline-flex active:bg-gray-200 transition-[background-color] dark:active:bg-[#242424] rounded-sm p-2"
      onClick={() => {
        typeof window !== "undefined" && navigator.clipboard.writeText(window.location.href);
        alert("Copied URL to clipboard!");
      }}
    >
      <IoMdShareAlt />
    </button>
  );
};

export default CopyButton;
