import { FC } from "react";
import React from "react";
interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "submit" | "reset" | "button";
}

export const Button: FC<ButtonProps> = function Button({
  onClick,
  className,
  type,
  children,
}) {
  return (
    <>
      <p>
        <button onClick={onClick} className={className} type={type}>
          {children}
        </button>
      </p>
    </>
  );
};
