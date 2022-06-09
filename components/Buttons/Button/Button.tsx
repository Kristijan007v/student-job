import React from "react";
import AppleIcon from "../../Icons/AppleIcon";
import GoogleIcon from "../../Icons/GoogleIcon";
import { motion } from "framer-motion";

interface Props {
  id?: string;
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
  id,
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
  /* Button animations */
  const defaultAnimation = {
    hover: { backgroundColor: "#72B0F9" },
    tap: { scale: 0.98, backgroundColor: "#72B0F9" },
  };

  return (
    <motion.button
<<<<<<< HEAD
      initial={{ scale: 1, backgroundColor: "#1B84FF" }}
=======
      id={id}
>>>>>>> origin/main
      whileHover={{
        backgroundColor: "#72B0F9",
      }}
      whileTap={{
        scale: 0.98,
        backgroundColor: "#72B0F9",
      }}
      transition={{ scale: { type: "spring", stiffness: 400 } }}
      onClick={onclick}
      className={`btn ${
        shape == "special"
          ? "border border-black text-black dark:border-white dark:text-white"
          : disabled === true
          ? "bg-white"
          : "bg-button-primary text-white"
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
