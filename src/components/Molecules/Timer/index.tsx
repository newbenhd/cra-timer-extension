import React from "react";
import classNames from "classnames";
import DataItem from "../../Atoms/DataItem";
import Card from "../../Atoms/Card";
import HList from "../../Atoms/HList";
import Button from "../../Atoms/Button";

type Props = {
  className?: string;
  description?: string;
  hour?: number;
  minutes?: number;
  seconds?: number;
  isRun?: boolean;
  status?: "Start" | "Pause" | "Continue";
};
const Timer = ({
  className = "",
  description = "timer",
  hour = 0,
  minutes = 0,
  seconds = 0,
  status = "Start",
}: Props) => {
  const names = classNames({
    [className]: true,
    timer: true,
  });
  const button_props = React.useMemo(
    () =>
      (() => {
        switch (status) {
          case "Continue":
            return {
              type: "Secondary",
              name: "Continue",
            };
          case "Pause":
            return {
              type: "Warn",
              name: "Pause",
            };
          case "Start":
          default:
            return {
              type: "Primary",
              name: "Start",
            };
        }
      })(),
    [status]
  ) as {
    type: ButtonType;
    name: string;
  };
  return (
    <div className={names}>
      <Card label={description.toUpperCase()}>
        <HList>
          <HList justifyContent="space-around">
            <DataItem name={hour.toString()} />
            <span> : </span>
            <DataItem name={minutes.toString()} />
            <span> : </span>
            <DataItem name={seconds.toString()} />
          </HList>
          <Button type={button_props.type} name={button_props.name} />
        </HList>
      </Card>
    </div>
  );
};
export default Timer;
