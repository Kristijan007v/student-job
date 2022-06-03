import React from "react";
import AppleIcon from "../../Icons/AppleIcon";
import GoogleIcon from "../../Icons/GoogleIcon";
import { motion } from "framer-motion";

interface Props {
  onclick?: () => void;
  type?: "default" | "special";
  style?: string;
  text: string;
  ariaLabel?: string;
  icon?: "google" | "apple";
  iconSize?: "xs" | "sm" | "md" | "lg" | "xl";
  iconStyle?: string;
}

export default function Button({
  onclick,
  type,
  ariaLabel,
  style,
  text,
  icon,
  iconSize,
  iconStyle,
}: Props) {
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
      onClick={onclick}
      className={`btn ${
        type == "special"
          ? "border border-black dark:border-white text-black dark:text-white"
          : "bg-button-primary text-white"
      } flex items-center justify-center space-x-4 ${style}`}
      aria-label={ariaLabel}
    >
      {icon === "google" ? (
        <GoogleIcon size={iconSize} style={iconStyle} />
      ) : (
        icon === "apple" && <AppleIcon size={iconSize} style={iconStyle} />
      )}
      <span>{text}</span>
    </motion.button>
  );
}
