import clsx from "clsx";
import * as React from "react";

export function Card({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  return (
    <a
      className={clsx(className)}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2 className="text-xl font-semibold text-red-500">
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  );
}
