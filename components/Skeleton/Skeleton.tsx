import React from "react";
import { Toaster } from "react-hot-toast";

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
    </div>
  );
}
