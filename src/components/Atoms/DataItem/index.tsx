import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
  name: string;
};
const DataItem = ({ className = "", name }: Props) => {
  const names = classNames({
    [className]: true,
    "data-item": true,
  });
  return <div className={names}>{name}</div>;
};
export default DataItem;
