import { useScrollLock } from "@mantine/hooks";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../Buttons/Button/Button";

interface Props {
  children: JSX.Element;
  contentPosition?: "top" | "bottom" | "center";
  closeOverlay?: () => void;
  blur?: boolean;
}

export default function Overlay({
  children,
  contentPosition,
  closeOverlay,
  blur,
}: Props) {
  /* Scroll lock */
  const [scrollLocked, setScrollLocked] = useScrollLock();

  useEffect(() => {
    setScrollLocked(true);

    return () => {
      setScrollLocked(false);
    };
  }, []);

  const dropInBottom = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <div
      className={`overlay ${blur && "backdrop-blur-sm"} flex ${
        contentPosition === "top"
          ? "items-start"
          : contentPosition === "center"
          ? "items-center"
          : "items-end"
      } justify-center`}
      onClick={closeOverlay}
    >
      <motion.div
        variants={dropInBottom}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="m-4 w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </div>
  );
}
