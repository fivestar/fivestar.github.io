import React, { ButtonHTMLAttributes } from 'react';
import { TimerStateType } from './TimerState';

interface ControlButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'primary' | '';
  primary?: boolean;
  onClick: () => void;
}

function ControlButton({ text, variant = '', disabled = false, onClick }: ControlButtonProps) {
  return (
    <button
      className={`btn timer-control timer-control--button`}
      data-variant={variant}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

interface TriggerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  timerState: TimerStateType;
  onStart: () => void;
  onPause: () => void;
  onResume: () => void;
}

export function StartButton({
  timerState,
  disabled = false,
  onStart,
  onPause,
  onResume,
}: TriggerButtonProps) {
  switch (timerState) {
    case 'STARTED':
      return <ControlButton text="Pause" variant="primary" disabled={disabled} onClick={onPause} />;
    case 'PAUSED':
      return (
        <ControlButton text="Resume" variant="primary" disabled={disabled} onClick={onResume} />
      );
    default:
      return <ControlButton text="Start" variant="primary" disabled={disabled} onClick={onStart} />;
  }
}

interface ResetButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onReset: () => void;
}

export function ResetButton({ disabled = false, onReset }: ResetButtonProps) {
  return <ControlButton text="Reset" disabled={disabled} onClick={onReset} />;
}

interface GongButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onGong: () => void;
}

export function GongButton({ disabled = false, onGong }: GongButtonProps) {
  return <ControlButton text="Gong" disabled={disabled} onClick={onGong} />;
}
