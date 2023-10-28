import clsx from "clsx";

export interface SeparatorProps {
  text?: string;
  className?: string;
}

export const Separator = ({ text, className }: SeparatorProps) => {
  return (
    <div className={clsx("flex items-center gap-4 my-2.5", className)}>
      <div className="w-full h-[1px] bg-neutral-400 dark:bg-neutral-600" />

      {text && (
        <>
          <span className="font-semibold text-sm tracking-widest text-neutral-400 dark:text-neutral-500">
            {text}
          </span>
          <div className="w-full h-[1px] bg-neutral-400 dark:bg-neutral-600" />
        </>
      )}
    </div>
  );
};
