import React from "react";
import AppleIcon from "../../Icons/AppleIcon";
import GoogleIcon from "../../Icons/GoogleIcon";
import { motion } from "framer-motion";

interface Props {
  onclick?: () => void;
  shape?: "default" | "special";
  style?: string;
  text: string;
  ariaLabel?: string;
  icon?: "google" | "apple";
  iconSize?: "xs" | "sm" | "md" | "lg" | "xl";
  iconStyle?: string;
  type?: string;
  form?: string;
  disabled?: boolean;
  props?: any;
}

export default function Button({
  onclick,
  shape,
  type,
  ariaLabel,
  style,
  text,
  icon,
  iconSize,
  iconStyle,
  form,
  disabled,
  props,
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
        shape == "special"
          ? "border border-black text-black dark:border-white dark:text-white"
          : "bg-button-primary text-white hover:bg-button-hover"
      } flex items-center justify-center space-x-4 ${style}`}
      aria-label={ariaLabel}
      form={form}
      disabled={disabled}
      {...props}
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
