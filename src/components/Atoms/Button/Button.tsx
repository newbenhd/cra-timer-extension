import React from "react";

type Props = {
  className?: string;
  onClick?: () => void;
};
const Button = ({ className = "", onClick = () => void 0 }: Props) => {
  return <div className="btn" role="button" onClick={onClick} />;
};
export default Button;
