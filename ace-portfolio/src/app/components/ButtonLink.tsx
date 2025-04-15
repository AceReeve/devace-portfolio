import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export default function ButtonLink({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={clsx(
        "focus:ring-offset-3 relative inline-flex h-fit w-fit rounded border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-white outline-none ring-violet-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded after:bg-violet-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-violet-200/10 hover:text-violet-300 after:hover:bg-opacity-55 focus:ring-4",
        className,
      )}
      {...restProps}
    />
  );
}
