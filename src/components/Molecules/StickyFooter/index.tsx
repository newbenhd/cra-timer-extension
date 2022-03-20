import React from "react";
import classNames from "classnames";
import "./StickyFooter.css";

type Props = {
  className?: string;
  children: React.ReactNode;
};
const StickyFooter = ({ className = "", children, ...props }: Props) => {
  const names = classNames({
    "sticky-footer": true,
    [className]: true,
  });
  return <footer className={names} children={children} />;
};
export default StickyFooter;
