import clsx from "clsx";
import { BaseHTMLAttributes } from "react";

export interface HeadingProps extends BaseHTMLAttributes<HTMLHeadingElement> {}

export const H1 = ({ children, className }: HeadingProps) => {
  return <h1 className={clsx("text-2xl font-bold", className)}>{children}</h1>;
};

export const H2 = ({ children, className }: HeadingProps) => {
  return (
    <h2 className={clsx("text-lg lg:text-xl font-semibold", className)}>
      {children}
    </h2>
  );
};
