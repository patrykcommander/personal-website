import React from "react";
import clsx from "clsx";

type SocialLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  href: string;
  customClass?: string;
};

export default function SocialLink({
  children,
  href,
  customClass,
  ...rest
}: SocialLinkProps) {
  const classString = clsx(
    "relative flex flex-row justify-center items-center w-[64px] h-[48px] border-2 border-black dark:border-white hover:cursor-pointer transition-colors ease-linear hover:bg-light-background dark:hover:bg-dark-secondary",
    customClass
  );

  return (
    <a target="_blank" href={href} {...rest}>
      <div className={classString} style={{ borderRadius: "36px" }}>
        {children}
      </div>
    </a>
  );
}
