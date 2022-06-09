import React from "react";
import HomeIcon from "../Icons/HomeIcon";
import MessageIcon from "../Icons/MessageIcon";
import PersonIcon from "../Icons/PersonIcon";
import PlusIcon from "../Icons/PlusIcon";
import SearchIcon from "../Icons/SearchIcon";

interface Props {
  openSearch: () => void;
}

export default function MobileNavigation({ openSearch }: Props) {
  return (
    <nav className="fixed bottom-0 right-0 left-0 flex items-center justify-center space-x-6  border-t bg-white p-1 shadow-lg dark:bg-black">
      <HomeIcon />
      <MessageIcon />
      <div className="-translate-y-8 rounded-full bg-black p-4 dark:bg-white">
        <PlusIcon style="text-white dark:text-black" />
      </div>
      <SearchIcon onclick={openSearch} />
      <PersonIcon />
    </nav>
  );
}
