import type { NextPage } from "next";
import Link from "next/link";
import SearchIcon from "../components/Icons/SearchIcon";
import Skeleton from "../components/Skeleton/Skeleton";

const Home: NextPage = () => {
  return (
    <Skeleton mobileNavigation={true}>
      <div className="p-6">
        <p>Hi,</p>
        <p className="text-2xl font-bold">Robert</p>
      </div>

      <div className="m-6">
        <div className="flex items-center space-x-2 rounded-xl border p-3 shadow-sm">
          <SearchIcon />
          <input
            type={"search"}
            placeholder="Search"
            className="flex-grow placeholder:text-secondary-light"
          />
        </div>
      </div>

      <Link href={"/sign-in"}>
        <a className="m-6 text-center">Sign in</a>
      </Link>
    </Skeleton>
  );
};

export default Home;
