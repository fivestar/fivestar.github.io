import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress, faExpand } from '@fortawesome/free-solid-svg-icons';
import { toTimeString } from './utils';
import { TimerState } from './TimerState';

type TimerDisplayProps = TimerState & {
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
};

export function TimerDisplay({
  state,
  secondsRemaining,
  secondsAtStart,
  isFullscreen,
  onToggleFullscreen,
}: TimerDisplayProps) {
  const renderVariant = () => {
    if (secondsRemaining <= 0) {
      return 'exceeded';
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
      aria-label={secondsRemaining + ' seconds remaining...'}
    >
      <progress
        className="timer-progress"
        value={secondsAtStart - secondsRemaining}
        max={secondsAtStart}
        hidden={state == 'STOPPED'}
      ></progress>
      <div className="timer-display__time">{toTimeString(secondsRemaining)}</div>
      <div className="timer-fullscreen-toggle timer-layout__standby-hidden">
        <button className="btn" data-variant="transparent" onClick={(e) => onToggleFullscreen()}>
          <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} size="lg" />
          <span className="visually-hidden">
            {isFullscreen ? 'Compress' : 'Expand '} Fullscreen
          </span>
        </button>
      </div>
    </div>
  );
}
