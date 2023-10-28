import * as React from "react";
import clsx from "clsx";

export interface ButtonProps<T extends React.ElementType> {
  variant?:
    | "primary"
    | "secondary"
    | "default"
    | "transparent"
    | "unstyled"
    | "menu"
    | "active-menu";
  size?: "xs" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  square?: boolean;
  rounded?: boolean;
  chip?: number;
  as?: T;
  textClassName?: string;
}

export function Button<T extends React.ElementType = "button">({
  className,
  children,
  as,
  size = "md",
  fullWidth = false,
  square = false,
  rounded = false,
  variant = "default",
  disabled = false,
  leftIcon,
  ...rest
}: ButtonProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>): JSX.Element {
  const Component = as || "button";

  return (
    <Component
      className={clsx(
        "relative shadow tracking-wide font-semibold",
        "flex items-center justify-center",
        "text-center",
        "transition",
        "focus:outline-none",
        variant !== "unstyled" &&
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500",
        variant !== "transparent" && variant !== "unstyled" && "border",
        variant === "primary" &&
          clsx(
            "bg-primary-500 text-neutral-100 border-primary-500",
            "dark:bg-primary-600 dark:text-neutral-100 dark:border-primary-600",
            "dark:hover:bg-primary-600/90 dark:border-primary-600/90"
          ),
        variant === "default" &&
          clsx(
            "bg-neutral-100 text-neutral-700 border-neutral-200",
            "dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300",
            "dark:hover:bg-neutral-800/80 dark:hover:border-neutral-700/80"
          ),
        variant === "transparent" && "border-transparent",
        variant === "menu" &&
          "border-none dark:text-neutral-400 dark:hover:text-neutral-300",
        variant === "active-menu" &&
          "border-none dark:text-neutral-300 dark:bg-neutral-600/30",
        size === "xs" && !square && "px-2.5 h-8 text-xs gap-2",
        size === "sm" && !square && "px-3 h-9 text-sm gap-2",
        size === "md" && !square && "px-3.5 h-10 text-base gap-3",
        size === "lg" && !square && "px-4 h-11 text-lg gap-3.5",
        size === "xs" && square && "w-8 h-8",
        size === "sm" && square && "w-9 h-9",
        size === "md" && square && "w-10 h-10",
        size === "lg" && square && "w-11 h-11",
        // size === "sm" && "w-8 h-8",
        // size === "md" && "w-10 h-10",
        fullWidth && "w-full",
        disabled && "opacity-70 pointer-events-none",
        rounded ? "rounded-full" : "rounded",
        className
      )}
      {...rest}
    >
      {leftIcon && <div className="flex-shrink-0">{leftIcon}</div>}
      <span className="">{children}</span>
    </Component>
  );
}
