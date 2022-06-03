import React from "react";
import { IconContext } from "react-icons";
import { FaTwitter } from "react-icons/fa";

interface Props {
  onclick?: () => void;
  style?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}

export default function TwitterIcon({ onclick, style, size }: Props) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: `${
            size == "xs"
              ? "text-base"
              : size == "sm"
              ? "text-sm"
              : size == "md"
              ? "text-md"
              : size == "lg"
              ? "text-lg"
              : size == "xl"
              ? "text-xl"
              : size == "xxl"
              ? "text-3xl"
              : "text-2xl"
          } ${style ? style : "text-primary-light dark:text-white"}`,
        }}
      >
        <FaTwitter onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
