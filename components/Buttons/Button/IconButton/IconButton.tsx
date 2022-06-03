import React from "react";
import { motion } from "framer-motion";
interface Props {
  children: React.ReactNode;
}

export default function IconButton({ children }: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      }}
      whileTap={{
        scale: 0.9,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      }}
      className="hover:bg-text-primary-light rounded-xl border border-secondary-light p-1.5 dark:border-secondary-dark"
    >
      {children}
    </motion.button>
  );
}
