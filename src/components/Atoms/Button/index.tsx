import React from "react";
import classNames from "classnames";
import "./Button.css";

type Props = {
  className?: string;
  onClick?: () => void;
  type?: ButtonType;
  name: string;
};
const Button = ({
  className = "",
  onClick = () => void 0,
  type = "Standard",
  name,
}: Props) => {
  const btnClass = React.useMemo(
    () =>
      classNames({
        btn: true,
        [`btn-${type.toLowerCase()}`]: true,
        [className]: true,
      }),
    [type, className]
  );

  return (
    <div className={btnClass} role="button" onClick={onClick}>
      {name.toUpperCase()}
    </div>
  );
};
export default Button;
