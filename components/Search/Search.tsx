import React from "react";
import SearchIcon from "../Icons/SearchIcon";

interface Props {
  onchange: (e: any) => void;
  value?: string;
}

export default function Search({ onchange, value }: Props) {
  return (
    <div className="flex items-center space-x-2 rounded-xl border bg-white p-3 shadow-sm">
      <SearchIcon />
      <input
        type={"search"}
        placeholder="Search"
        className="flex-grow placeholder:text-secondary-light"
        onChange={onchange}
        value={value}
      />
    </div>
  );
}
