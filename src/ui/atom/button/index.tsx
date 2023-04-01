import clsx from "clsx";
import React from "react";
import Spinier from "@svg/spinier.svg";
import {
  IconRender,
  Props,
  mainClassName,
  spinierVariants,
  variants,
} from "./helpers";

function Button({
  onClick,
  style = "primary",
  width = "normal",
  text = "center",
  className,
  children,
  size = "base",
  font = "normal",
  type = "button",
  rounded = "default",
  isLoading,
  disabled = false,
  icon,
}: Props) {
  return (
    <button
      className={clsx(
        mainClassName,
        variants.size[size],
        variants.text[text],
        variants.width[width],
        variants.style[style],
        variants.font[font],
        variants.rounded[rounded],
        className
      )}
      disabled={disabled || isLoading}
      type={type}
      onClick={onClick}
    >
      {isLoading === true ? (
        <span>
          <Spinier className={clsx(spinierVariants[style])} />
        </span>
      ) : (
        <div className="flex items-center justify-between gap-3">
          {icon && IconRender(icon)} {children}
        </div>
      )}
    </button>
  );
}

export default Button;
