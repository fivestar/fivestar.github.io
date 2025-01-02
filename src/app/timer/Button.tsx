import React, { ButtonHTMLAttributes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faPlay,
  faPause,
  faRotateRight,
  faBellConcierge,
} from '@fortawesome/free-solid-svg-icons';
import { TimerStateType } from './TimerState';

interface ControlButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: IconDefinition;
  variant?: 'primary' | '';
  primary?: boolean;
  onClick: () => void;
}

function ControlButton({
  text,
  icon,
  variant = '',
  disabled = false,
  onClick,
}: ControlButtonProps) {
  return (
    <button
      className={`btn timer-control timer-control--button`}
      data-variant={variant}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {icon && (
        <>
          <FontAwesomeIcon icon={icon} size="1x" />
          <span className="visually-hidden">{text}</span>
        </>
      )}
      {!icon && text}
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
      return (
        <ControlButton
          text="Pause"
          icon={faPause}
          variant="primary"
          disabled={disabled}
          onClick={onPause}
        />
      );
    case 'PAUSED':
      return (
        <ControlButton
          text="Resume"
          icon={faPlay}
          variant="primary"
          disabled={disabled}
          onClick={onResume}
        />
      );
    default:
      return (
        <ControlButton
          text="Start"
          icon={faPlay}
          variant="primary"
          disabled={disabled}
          onClick={onStart}
        />
      );
  }
}

interface ResetButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onReset: () => void;
}

export function ResetButton({ disabled = false, onReset }: ResetButtonProps) {
  return <ControlButton text="Reset" icon={faRotateRight} disabled={disabled} onClick={onReset} />;
}

interface GongButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onGong: () => void;
}

export function GongButton({ disabled = false, onGong }: GongButtonProps) {
  return <ControlButton text="Bell" icon={faBellConcierge} disabled={disabled} onClick={onGong} />;
}
