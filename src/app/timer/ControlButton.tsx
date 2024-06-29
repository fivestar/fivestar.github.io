'use client';

import React from 'react';

interface ControlButtonProps {
  text: string;
  primary?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export function ControlButton({
  text,
  primary = false,
  disabled = false,
  onClick,
}: ControlButtonProps) {
  return (
    <button
      className={`btn ${primary ? 'btn--primary' : ''} timer-control timer-control--button`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
