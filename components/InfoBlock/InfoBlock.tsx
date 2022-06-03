import React from "react";

interface Props {
  infoLabel?: string;
  infoValue: string;
  children: React.ReactNode;
}

export default function InfoBlock({ infoLabel, infoValue, children }: Props) {
  return (
    <div>
      <div className="flex flex-col space-y-2">
        <label>{infoLabel}</label>
        <div className="flex items-center space-x-3 rounded-lg border border-border-primary bg-white p-2.5 text-black dark:bg-background-secondary-dark dark:text-white">
          {children}
          <span>{infoValue}</span>
        </div>
      </div>
    </div>
  );
}
