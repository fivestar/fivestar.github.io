import React from 'react';
import { toTimeString } from './utils';
import { TimerState } from './TimerState';

export function TimerDisplay({ state, secondsRemaining, secondsAtStart }: TimerState) {
  const renderVariant = () => {
    if (secondsRemaining <= 0) {
      return 'timeup';
    } else if (secondsRemaining <= 30) {
      return 'alert';
    } else if (secondsRemaining <= 60) {
      return 'warning';
    } else {
      return 'default';
    }
  };

  return (
    <div
      className="timer-display"
      data-variant={renderVariant()}
      aria-label={secondsRemaining + ' remaining...'}
    >
      <progress
        className="timer-display__progress"
        value={secondsAtStart - secondsRemaining}
        max={secondsAtStart}
        hidden={state != 'STARTED'}
      ></progress>
      <div className="timer-display__time">{toTimeString(secondsRemaining)}</div>
    </div>
  );
}
