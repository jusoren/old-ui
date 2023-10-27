"use client";

import clsx from "clsx";
import { InputHTMLAttributes, ReactNode, useState } from "react";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import { Button } from "..";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "unstyled";
  // label?: LabelProps;
  leftIcon?: ReactNode;
  error?: string | boolean;
}

export const Input = ({
  variant = "default",
  // label,
  leftIcon,
  className,
  id,
  error,
  type,
  ...rest
}: InputProps) => {
  const [inputType, setInputType] = useState(type);

  const toggleInputType = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <div className={clsx("relative w-full", className)}>
      <input
        {...rest}
        id={id}
        type={inputType}
        className={clsx(
          "px-3.5 h-10 w-full tracking-wide",
          "transition",
          "text-base",
          variant === "default" &&
            "dark:bg-neutral-800 dark:border-neutral-700 dark:placeholder-neutral-500 " +
              "bg-neutral-50 border-neutral-300 placeholder-neutral-400" +
              "dark:dark-autofill",
          // "text-fill-neutral-100 dark:text-fill-primary-500",
          variant === "unstyled" &&
            "bg-transparent border-none placeholder-neutral-400",
          variant !== "unstyled" && "rounded",

          "focus:bg-white dark:focus:bg-neutral-900 focus:border-primary-500 focus:ring-primary-500",
          "dark:focus:border-primary-400",
          // "dark:focus:ring-primary-400",
          "focus:ring-0 focus:ring-inset dark:focus:ring-primary-400",
          Boolean(leftIcon) && "pl-10",
          type === "password" && "pr-9",
          error &&
            "border-red-500 dark:border-red-400 dark:focus:border-red-400 dark:focus:ring-red-400"
        )}
      />
      {leftIcon && (
        <div className="absolute left-0 inset-y-0 w-10 flex items-center justify-center text-neutral-400">
          {leftIcon}
        </div>
      )}

      {type === "password" && (
        <div className="absolute right-0 top-0 h-9 w-10 flex items-center justify-center">
          <Button
            square
            variant="unstyled"
            size="sm"
            type="button"
            tabIndex={-1}
            onClick={toggleInputType}
          >
            {inputType === "password" ? (
              <PiEyeBold size={17} />
            ) : (
              <PiEyeClosedBold size={17} />
            )}
          </Button>
        </div>
      )}

      {/* {error && typeof error === "string" && (
        <HelperText type="error">{error}</HelperText>
      )} */}
    </div>
  );
};
