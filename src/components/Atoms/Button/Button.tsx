import React from "react";

type Props = {
  className?: string;
  onClick?: () => void;
  type?: "Primary" | "Secondary" | "Danger" | "Warn" | "Standard";
};
const Button = ({
  className = "",
  onClick = () => void 0,
  type = "Standard",
}: Props) => {
  return <div className="btn" role="button" onClick={onClick} />;
};
export default Button;
