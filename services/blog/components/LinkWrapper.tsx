"use client";
import React, { ReactNode } from "react";
import Link from "next/link";

interface LinkWrapperProps {
  text?: string;
  to: string;
}

const LinkWrapper: React.FC<LinkWrapperProps> = ({ text, to }) => {
  return (
    <div className={""}>
      <Link href={to}>{text}</Link>
    </div>
  );
};

export default LinkWrapper;
