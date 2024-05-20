import React, { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
}

const AuthButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
}) => {
  return (
    <>
      <div className="flex items-center gap-[24px]">
        <button
          className={`flex justify-center items-center gap-3 shadow-btn_outline
           ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      </div>
    </>
  );
};

export default AuthButton;
