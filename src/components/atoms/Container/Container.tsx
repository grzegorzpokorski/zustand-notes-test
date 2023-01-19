import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ContaienrProps = {
  children: ReactNode;
  as?: keyof HTMLElementTagNameMap;
  className?: string;
};

export const Container = ({
  children,
  as: Tag = "div",
  className,
}: ContaienrProps) => (
  <Tag className={twMerge("w-full max-w-3xl mx-auto px-3", className)}>
    {children}
  </Tag>
);
