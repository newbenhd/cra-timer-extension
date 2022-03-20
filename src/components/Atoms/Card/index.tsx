import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  label: string;
  children: React.ReactNode;
};
const Card = ({ className = "", label, children, ...props }: Props) => {
  const names = classNames({
    [className]: true,
    card: true,
  });
  return (
    <div className={names}>
      <label>{label}</label>
      <div>{children}</div>
    </div>
  );
};
export default Card;
