import React, { CSSProperties } from "react";
import classNames from "classnames";
import "./VList.css";

type Props = {
  className?: string;
  children: React.ReactNode[];
  gap?: number;
};
const VList = ({ className = "", children, gap = 0, ...props }: Props) => {
  const names = classNames({
    [className]: true,
    vlist: true,
  });
  return (
    <div
      className={names}
      children={children}
      style={{ "--gap": gap } as CSSProperties}
    />
  );
};
export default VList;
