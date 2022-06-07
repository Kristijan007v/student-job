import React from "react";
import { Toaster } from "react-hot-toast";
import { useTheme } from "next-themes";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

interface Props {
  children: React.ReactNode;
}

export default function Skeleton({ children }: Props) {
  return (
    <div>
      {/* Toast notifications */}
      <div>
        <Toaster />
      </div>

      {/* Main content goes here */}
      <div>{children}</div>

      {/* Toogle light and dark mode */}
      <div className="m-6 flex justify-center">
        <ThemeSwitch />
      </div>
    </div>
  );
}
