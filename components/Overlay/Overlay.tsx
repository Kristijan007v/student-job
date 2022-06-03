import { useScrollLock } from "@mantine/hooks";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
  closeOverlay?: () => void;
  blur?: boolean;
}

export default function Overlay({ children, closeOverlay, blur }: Props) {
  /* Scroll lock */
  const [scrollLocked, setScrollLocked] = useScrollLock();

  useEffect(() => {
    setScrollLocked(true);

    return () => {
      setScrollLocked(false);
    };
  }, []);

  return (
    <div
      className={`overlay ${
        blur && "backdrop-blur-sm"
      } flex items-end justify-center`}
      onClick={closeOverlay}
    >
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0, transition: { duration: 0.3 } }}
        exit={{ y: "100vh", transition: { duration: 0.3 } }}
        className="m-4 w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </div>
  );
}
