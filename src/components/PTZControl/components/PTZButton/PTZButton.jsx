import React from "react";
import * as Tooltip from '@radix-ui/react-tooltip';
import "./PTZButton.css";

export const PTZButton = ({ 
  icon, 
  action, 
  tooltip, 
  className = "", 
  onClick, 
  disabled = false,
  tooltipSide = "top",
  tooltipAlign = "center"

}) => {
  return (
    <Tooltip.Root disableHoverableContent>
      <Tooltip.Trigger asChild>
        <button
          className={`ptz-btn ${className}`}
          onClick={() => onClick(action)}
          aria-label={action}
          type="button"
          disabled={disabled}
        >
          {icon}
        </button>
      </Tooltip.Trigger>
      <Tooltip.Content side={tooltipSide} align={tooltipAlign}>
        {tooltip}
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip.Root>
  );
}; 
