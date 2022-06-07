import React from "react";
import { IconContext } from "react-icons";
import { BiSearch } from "react-icons/bi";

interface Props {
  onclick?: () => void;
  style?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  hover?: boolean;
}

export default function SearchIcon({ onclick, style, size, hover }: Props) {
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
          } ${style ? style : "text-primary-light dark:text-white"} ${
            hover && "cursor-pointer bg-gray-400 rounded-full"
          }`,
        }}
      >
        <BiSearch onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
