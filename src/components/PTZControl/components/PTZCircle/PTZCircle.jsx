import React from "react";
import { PTZButton } from "../PTZButton";
import { PTZ_DIRECTIONS } from "../../constants/directions";
import "./PTZCircle.css";

export const PTZCircle = ({ onCommand, disabled }) => {
  return (
    <div className="ptz-control-circle">
      {PTZ_DIRECTIONS.map((dir) => (
        <PTZButton
          key={dir.className}
          icon={dir.icon}
          action={dir.action}
          tooltip={dir.tooltip}
          className={dir.className}
          onClick={onCommand}
          disabled={disabled}
        />
      ))}
    </div>
  );
}; 