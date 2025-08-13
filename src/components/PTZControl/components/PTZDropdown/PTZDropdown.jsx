import React from "react";
import * as Tooltip from '@radix-ui/react-tooltip';
import IrisOpen from "../../../../assets/irisopen.svg?react";
import IrisClose from "../../../../assets/irisclose.svg?react";
import FocusOpen from "../../../../assets/focusopen.svg?react";
import FocusClose from "../../../../assets/focusclose.svg?react";
import "./PTZDropdown.css";

export const PTZDropdown = ({ onCommand, disabled }) => {
  return (
    <div className="ptz-menu-dropdown-absolute">
      <Tooltip.Root disableHoverableContent>
        <Tooltip.Trigger asChild>
          <button
            className="ptz-extra-btn"
            onClick={() => onCommand("FocusOpen")}
            disabled={disabled}
          >
            <FocusOpen color="#fff" width={24} height={24} />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Content side="top" align="center">
          Foco +
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Root>
      
      <Tooltip.Root disableHoverableContent>
        <Tooltip.Trigger asChild>
          <button
            className="ptz-extra-btn"
            onClick={() => onCommand("FocusClose")}
            disabled={disabled}
          >
            <FocusClose color="#fff" width={24} height={24} />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Content side="top" align="center">
          Foco -
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Root>
      
      <Tooltip.Root disableHoverableContent>
        <Tooltip.Trigger asChild>
          <button
            className="ptz-extra-btn"
            onClick={() => onCommand("IrisOpen")}
            disabled={disabled}
          >
            <IrisOpen color="#fff" width={24} height={24} />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Content side="top" align="center">
          Iris +
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Root>
      
      <Tooltip.Root disableHoverableContent>
        <Tooltip.Trigger asChild>
          <button
            className="ptz-extra-btn"
            onClick={() => onCommand("IrisClose")}
            disabled={disabled}
          >
            <IrisClose color="#fff" width={24} height={24} />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Content side="top" align="center">
          Iris -
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Root>
    </div>
  );
}; 