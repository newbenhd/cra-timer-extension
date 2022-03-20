import React, { CSSProperties } from "react";
import classNames from "classnames";
import "./HList.css";

type Props = {
  className?: string;
  children: React.ReactNode[];
  gap?: number;
  justifyContent?:
    | "center"
    | "end"
    | "flex-end"
    | "flex-start"
    | "start"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "stretch";
  alignItems?:
    | "center"
    | "end"
    | "flex-end"
    | "flex-start"
    | "self-end"
    | "self-start"
    | "start";
  border?: boolean;
};
const HList = ({
  className = "",
  children,
  gap = 0,
  justifyContent = "flex-start",
  alignItems = "center",
  border = false,
}: Props) => {
  const names = classNames({
    [className]: true,
    hlist: true,
    border,
  });
  return (
    <div
      className={names}
      children={children}
      style={{ gap, justifyContent, alignItems } as CSSProperties}
    />
  );
};
export default HList;
