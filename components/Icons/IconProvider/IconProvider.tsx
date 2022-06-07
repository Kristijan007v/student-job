import React from "react";
import { IconContext } from "react-icons";

interface Props {
  children: React.ReactNode;

  style?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}

export default function IconProvider({ children, style, size }: Props) {
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
        {children}
      </IconContext.Provider>
    </>
  );
}
