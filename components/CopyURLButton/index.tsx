"use client";
import { IoMdShareAlt } from "react-icons/io";

const CopyURLButton = () => {
  return (
    <button
      className="inline-flex active:bg-gray-200 transition-[background-color] dark:active:bg-[#242424] p-2"
      onClick={() => {
        typeof window !== "undefined" && navigator.clipboard.writeText(window.location.href);
        alert("Copied URL to clipboard!");
      }}
    >
      <IoMdShareAlt />
    </button>
  );
};

export default CopyURLButton;
