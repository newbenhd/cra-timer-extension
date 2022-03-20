import React from "react";
import classNames from "classnames";
import "./StickyHeader.css";

type Props = {
  className?: string;
  children: React.ReactNode;
};
const StickyHeader = ({ className = "", children, ...props }: Props) => {
  const names = classNames({
    "sticky-header": true,
    [className]: true,
  });
  return <header className={names} children={children} />;
};
export default StickyHeader;
