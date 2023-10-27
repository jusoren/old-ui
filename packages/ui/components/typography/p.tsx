import clsx from "clsx";
import { BaseHTMLAttributes } from "react";

export interface PProps extends BaseHTMLAttributes<HTMLParagraphElement> {
  dimmed?: boolean;
}

export const P = ({ dimmed = false, children, className, ...rest }: PProps) => {
  return (
    <p
      className={clsx(
        "text-base",
        dimmed && "text-neutral-500 dark:text-neutral-400",
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
};
