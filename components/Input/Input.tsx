import React from "react";
import EmailIcon from "../Icons/EmailIcon";
import LockIcon from "../Icons/LockIcon";

interface Props {
  labelFor: string;
  labelText: string;
  type: string;
  placeholder?: string;
  value?: any;
  icon?: "email" | "password" | "google" | "apple";
}

export default function Input({
  labelFor,
  labelText,
  type,
  placeholder,
  value,
  icon,
}: Props) {
  return (
    <div className="flex flex-col space-y-3">
      <label htmlFor={labelFor}>{labelText}</label>
      <div className="flex items-center input__default space-x-2">
        {icon === "email" ? (
          <EmailIcon
            size={"xl"}
            style="text-secondary-light dark:text-secondary-dark"
          />
        ) : (
          icon === "password" && (
            <LockIcon
              size={"xl"}
              style="text-secondary-light dark:text-secondary-dark"
            />
          )
        )}
        <input
          className="flex-grow m-0"
          type={type}
          placeholder={placeholder}
          value={value}
        />
      </div>
    </div>
  );
}
