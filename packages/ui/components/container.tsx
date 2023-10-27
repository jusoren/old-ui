import { ReactNode } from "react";
import clsx from "clsx";

export type ContainerSize = "xs" | "sm" | "md";

export interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  middle?: boolean;
  compact?: boolean;
}

export const Container = ({
  children,
  size = "md",
  middle,
  compact = false,
}: ContainerProps) => {
  return (
    <div
      className={clsx(
        "relative w-full mx-auto",
        // "px-5",
        // !compact && "py-8 md:py-10",
        "flex flex-col",
        size === "xs" && "max-w-sm",
        size === "sm" && "max-w-sm",
        size === "md" && "max-w-screen-2xl",
        middle && "items-center justify-center"
      )}
      style={{
        minHeight: "auto",
      }}
    >
      {children}
    </div>
  );
};
