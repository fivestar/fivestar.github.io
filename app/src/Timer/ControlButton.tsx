import React from 'react';
import { useControlsDisabled } from './ControlsDisabledContext';

interface ControlButtonProps {
  text: string;
  handleControl: () => void;
}

export function ControlButton({ text, handleControl }: ControlButtonProps) {
  const disabled = useControlsDisabled();

  return (
    <button
      className="btn timer-control timer-control--button"
      onClick={() => handleControl()}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
