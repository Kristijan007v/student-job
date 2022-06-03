import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function IconButton({ children }: Props) {
  return (
    <button className="rounded-lg border border-secondary-light p-1 dark:border-secondary-dark">
      {children}
    </button>
  );
}
