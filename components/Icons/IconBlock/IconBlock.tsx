import React from "react";

interface Props {
  children: React.ReactNode;
  text?: string;
  color?: string;
  style?: string;
}

export default function IconBlock({ children, text, color, style }: Props) {
  return (
    <div
      className={`flex flex-col items-center justify-center space-y-1 rounded-xl pt-4 pb-4 pr-8 pl-8 ${
        color ? color : ""
      }`}
    >
      <span>{children}</span>
      <p className="text-heading-light">{text}</p>
    </div>
  );
}
