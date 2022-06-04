import React from "react";
import EmailIcon from "../Icons/EmailIcon";
import LockIcon from "../Icons/LockIcon";

interface Props {
  labelFor: string;
  labelText: string;
  name: string;
  id: string;
  type: string;
  placeholder?: string;
  value?: any;
  icon?: "email" | "password" | "google" | "apple";
  props?: any;
  validateForm?: any;
  onError?: boolean;
}

export default function Input({
  labelFor,
  labelText,
  name,
  id,
  type,
  placeholder,
  value,
  icon,
  validateForm,
  onError,
  ...rest
}: Props) {
  return (
    <div className="flex flex-col space-y-3">
      <label htmlFor={labelFor}>{labelText}</label>
      <div
        className={`input__default flex items-center space-x-2 ${
          onError ? "border border-red-500" : "border"
        }`}
      >
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
          className="m-0 flex-grow"
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          id={id}
          {...validateForm}
          {...rest}
        />
      </div>
    </div>
  );
}
