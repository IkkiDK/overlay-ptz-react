import { useCallback } from 'react';

export const usePTZCommands = (onPTZCommand, disabled) => {
  const handleClick = useCallback((action) => {
    console.log('PTZ Command:', action);
    
    if (onPTZCommand && !disabled) {
      onPTZCommand(action);
    } else {
      console.log('Command blocked - disabled:', disabled);
    }
  }, [onPTZCommand, disabled]);

  return { handleClick };
}; 