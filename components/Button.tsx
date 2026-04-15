import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        clsx(
          "text-nowrap text-[14px] text-shadow-olive-950 font-(family-name:--font-ibm-plex-mono) py-1.5  px-3 bg-transparent border text-white border-white rounded-4xl hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          className,
        ),
      )}
    >
      {children}
    </button>
  );
}

export default Button;
