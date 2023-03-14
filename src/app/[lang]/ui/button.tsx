import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
  rounded?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

function Button({
  children,
  primary,
  rounded = false,
  type,
  className,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        "text-base px-5 flex justify-between items-center py-2 w-fit",
        { "bg-primary-100 text-white": primary },
        { "rounded-3xl": rounded },
        { "rounded-xl": !rounded },
        `${className}`
      )}
    >
      {children}
    </button>
  );
}

export default Button;
