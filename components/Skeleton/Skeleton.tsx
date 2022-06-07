import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Overlay from "../Overlay/Overlay";
import Search from "../Search/Search";

interface Props {
  children: React.ReactNode;
  mobileNavigation?: boolean;
}

const items = {
  data: [
    {
      section: {
        id: "1",
        title: "Settings",
        content: [
          {
            id: "1",
            title: "Font size",
          },
          {
            id: "2",
            title: "Dark mode",
          },
        ],
      },
    },
    {
      section: {
        id: "2",
        title: "Pages",
        content: [
          {
            id: "1",
            title: "Profile",
          },
          {
            id: "2",
            title: "Home",
          },
        ],
      },
    },
  ],
};

export default function Skeleton({ children, mobileNavigation }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const [results, setResults] = useState(items);

  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div>
      {/* Toast notifications */}
      <div>
        <Toaster />
      </div>

      {/* Mobile navigation */}
      {mobileNavigation && (
        <MobileNavigation
          openSearch={() => {
            setSearchOpen(true);
          }}
        />
      )}

      {/* Main content goes here */}
      <div>{children}</div>

      {/* Footer goes here */}

      {/* Application search */}
      <AnimatePresence exitBeforeEnter>
        {searchOpen && (
          <Overlay
            closeOverlay={() => {
              setSearchOpen(false);
            }}
            contentPosition={"top"}
            blur
          >
            <>
              <div>
                <Search onchange={() => {}} />
              </div>
              {/* <div className="mt-4 flex flex-col space-y-1.5">
                {results.data.length > 0 ? (
                  <>
                    {results.data.map((item) => (
                      <>
                        <h3
                          key={item.section.id}
                          className="font-medium text-black"
                        >
                          {item.section.title}
                        </h3>
                        {item.section.items.map((subItem) => (
                          <div
                            key={subItem.id}
                            className="rounded-md bg-white p-4"
                          >
                            {subItem.title}
                          </div>
                        ))}
                      </>
                    ))}
                  </>
                ) : (
                  <div className="text-center">
                    <h3 className="font-medium text-black">No results</h3>
                  </div>
                )}
              </div> */}
            </>
          </Overlay>
        )}
      </AnimatePresence>
    </div>
  );
}
