import React from "react";
import { PTZCircle } from "./components/PTZCircle";
import { PTZSideButtons } from "./components/PTZSideButtons";
import { PTZDropdown } from "./components/PTZDropdown";
import { usePTZCommands } from "./hooks/usePTZCommands";
import { usePTZMenu } from "./hooks/usePTZMenu";
import "./PTZControls.css";

export default function PTZControls({ onPTZCommand, disabled }) {
  const { handleClick } = usePTZCommands(onPTZCommand, disabled);
  const { menuOpen, toggleMenu, closeMenu } = usePTZMenu();

  // Fechar menu quando clicar em Home
  const handleCommand = (action) => {
    handleClick(action);
    if (action === "Home") {
      closeMenu();
    }
  };

  return (
    <div className="ptz-absolute-area">
      {/* Botões laterais */}
      <PTZSideButtons 
        onCommand={handleCommand}
        onMenuToggle={toggleMenu}
        disabled={disabled}
      />

      {/* Círculo PTZ */}
      <PTZCircle 
        onCommand={handleCommand}
        disabled={disabled}
      />

      {/* Menu dropdown */}
      {menuOpen && (
        <PTZDropdown 
          onCommand={handleCommand}
          disabled={disabled}
        />
      )}
    </div>
  );
}
