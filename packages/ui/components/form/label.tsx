import { LabelHTMLAttributes, ReactNode } from "react";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text?: string;
  children?: ReactNode;
  rightElement?: ReactNode;
}

export const Label = ({ text, children, ...rest }: LabelProps) => {
  return (
    <label
      {...rest}
      className="block font-semibold text-neutral-600 dark:text-neutral-300 mb-2"
    >
      {text || children}
    </label>
  );
};
