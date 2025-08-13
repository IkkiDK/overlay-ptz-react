import React from "react";
import * as Tooltip from '@radix-ui/react-tooltip';
import { ZoomInIcon, ZoomOutIcon, MenuIcon } from "lucide-react";
import "./PTZSideButtons.css";

export const PTZSideButtons = ({ onCommand, onMenuToggle, disabled }) => {
  return (
    <div className="ptz-side-buttons">
      <Tooltip.Root disableHoverableContent>
        <Tooltip.Trigger asChild>
          <button
            className="ptz-extra-btn ptz-menu-btn"
            onClick={onMenuToggle}
            disabled={disabled}
          >
            <MenuIcon size={28} color="#fff" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Content side="right" align="center">
          Opções extras
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Root>
      
      <Tooltip.Root disableHoverableContent>
        <Tooltip.Trigger asChild>
          <button
            className="ptz-extra-btn ptz-zoom-btn"
            onClick={() => onCommand("ZoomIn")}
            disabled={disabled}
          >
            <ZoomInIcon size={24} color="#fff" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Content side="right" align="center">
          Zoom +
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Root>
      
      <Tooltip.Root disableHoverableContent>
        <Tooltip.Trigger asChild>
          <button
            className="ptz-extra-btn ptz-zoom-btn"
            onClick={() => onCommand("ZoomOut")}
            disabled={disabled}
          >
            <ZoomOutIcon size={24} color="#fff" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Content side="right" align="center">
          Zoom –
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Root>
    </div>
  );
}; 