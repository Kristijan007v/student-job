import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt?: string;
  avatarName?: string;
  avatarSize?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  avatarDescription?: string;
}

export default function Avatar({
  src,
  alt,
  avatarName,
  avatarSize,
  avatarDescription,
}: Props) {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div
          className={`relative ${
            avatarSize === "xs"
              ? "h-12 w-12"
              : avatarSize === "sm"
              ? "h-16 w-16"
              : avatarSize === "md"
              ? "h-20 w-20"
              : avatarSize === "lg"
              ? "h-24 w-24"
              : avatarSize === "xl"
              ? "h-36 w-36"
              : avatarSize === "xxl"
              ? "h-48 w-48"
              : "h-28 w-28"
          }`}
        >
          <Image
            src={`${src}`}
            layout="fill"
            objectFit="cover"
            priority={true}
            placeholder="blur"
            blurDataURL={`https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`}
            className="rounded-full"
          />
        </div>
        <div className="mt-6 text-center">
          <h2>{avatarName}</h2>
          <p>{avatarDescription}</p>
        </div>
      </div>
    </>
  );
}
