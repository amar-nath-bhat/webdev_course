import React, { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  color?: string; //? indicates property is optional
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
