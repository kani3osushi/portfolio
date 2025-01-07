import { FC } from "react";
import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "submit" | "reset" | "button";
  variant: "default" | "signIn"; // ボタンの種類
}

export const Button: FC<ButtonProps> = function Button({
  onClick,
  className,
  type,
  variant,
  children,
}) {
  return (
    <>
      <p className={className}>
        <button
          onClick={onClick}
          className={`flex items-center gap-3 p-3 pr-5 text-lg text-white rounded-full font-bold tracking-wider leading-none shadow-lg hover:shadow-xl hover:brightness-110 hover:opacity-90 transition-all duration-300 ${
            variant === "signIn" ? "bg-accent pl-6 rounded-md" : "bg-primary"
          }`}
          type={type}
        >
          {children}
        </button>
      </p>
    </>
  );
};
