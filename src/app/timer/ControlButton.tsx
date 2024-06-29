'use client';

import React from 'react';

interface ControlButtonProps {
  text: string;
  disabled: boolean;
  onClick: () => void;
}

export function ControlButton({ text, disabled, onClick }: ControlButtonProps) {
  return (
    <button
      className="btn timer-control timer-control--button"
      onClick={() => onClick()}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
