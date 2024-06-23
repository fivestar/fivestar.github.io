import { useState, useEffect } from 'react';
import { useInterval } from 'usehooks-ts'
import "./Timer.css";
import { TimeField } from './TimeField';
import { ControlButton } from './ControlButton';
import { toSeconds, toTimeString } from './utils'

const INTERVAL = 1000;

export default function TimerApp() {
  const [inputTime, setInputTime] = useState<string>('5:00');
  const [seconds, setSeconds] = useState<number>(5 * 60);
  const [delay, setDelay] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useInterval(() => {
    setSeconds(seconds - 1);
  }, delay)

  useEffect(() => {
    if (seconds === 0) {
      playGong();
    }
  }, [seconds])

  useEffect(() => {
    setDelay(isRunning ? INTERVAL : null);
  }, [isRunning])

  const handleStart = () => {
    try {
      const seconds = toSeconds(inputTime);
      setSeconds(seconds);

      setIsRunning(true);
    } catch (e: any) {
      console.error('Failed to parse time: ', e.message);
    }
  };

  const handlePause = () => {
    setDelay(null);
  };
  const handleResume = () => {
    setDelay(INTERVAL);
  };

  const handleReset = () => {
    setIsRunning(false);

    try {
      setSeconds(toSeconds(inputTime));
    } catch (e: any) {
      console.error('Failed to parse time: ', e.message);
    }
  };

  const playGong = () => {
    const audio = new Audio('/assets/app/assets/audio/dora.m4a');
    audio.volume = 1.0;
    audio.play();
  };

  const renderTriggerButton = () => {
    if (!isRunning) {
      return <ControlButton text="Start" handleControl={handleStart} />;
    } else if (delay == null) {
      return <ControlButton text="Resume" handleControl={handleResume} />;
    } else {
      return <ControlButton text="Pause" handleControl={handlePause} />;
    }
  }

  const renderDisplayState = () => {
    if (seconds < 0) {
      return 'timer-display--timeup';
    } else if (seconds < 30) {
      return 'timer-display--alert';
    } else if (seconds < 60) {
      return 'timer-display--warning';
    }
    return 'timer-display--default';
  };

  return (
    <div>
      <div className="timer-controls">
        <TimeField
          inputTime={inputTime}
          setInputTime={setInputTime}
        />
        {renderTriggerButton()}
        <ControlButton text="Reset" handleControl={handleReset} />
        <ControlButton text="Gong" handleControl={playGong} />
      </div>

      <div className={'timer-display ' + renderDisplayState()}>
        <div className="timer-display__time ">{toTimeString(seconds)}</div>
      </div>
    </div>
  )
}
