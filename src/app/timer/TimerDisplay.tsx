import React from 'react';
import { toTimeString } from './utils';

interface TimerDisplayProps {
  seconds: number;
}

export function TimerDisplay({ seconds }: TimerDisplayProps) {
  const renderDisplayStateClassName = () => {
    if (seconds <= 0) {
      return 'timer-display--timeup';
    } else if (seconds <= 30) {
      return 'timer-display--alert';
    } else if (seconds <= 60) {
      return 'timer-display--warning';
    } else {
      return 'timer-display--default';
    }
  };

  return (
    <div className={'timer-display ' + renderDisplayStateClassName()}>
      <div className="timer-display__time">{toTimeString(seconds)}</div>
    </div>
  );
}
