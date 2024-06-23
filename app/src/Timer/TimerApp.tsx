import { useState, useEffect, useRef } from 'react';
import { useInterval } from 'usehooks-ts'
import "./Timer.css";
import { TimeField } from './TimeField';
import { ControlButton } from './ControlButton';
import { ControlsDisabledContext } from "./ControlsDisabledContext";
import { toSeconds, toTimeString, isValidTimeString } from './utils'

const INTERVAL = 1000;

export default function TimerApp() {
  const [inputTime, setInputTime] = useState<string>('5:00');
  const [seconds, setSeconds] = useState<number>(5 * 60);
  const [delay, setDelay] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);

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

  useEffect(() => {
    audioContextRef.current = new AudioContext();
    fetch('/assets/app/assets/audio/dora.m4a')
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => audioContextRef.current?.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        audioBufferRef.current = audioBuffer || null;
      })
      .catch(err => console.error('Error loading audio file', err));
  }, []);

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
    if (audioBufferRef.current && audioContextRef.current) {
      const source = audioContextRef.current.createBufferSource();
      source.buffer = audioBufferRef.current;
      source.connect(audioContextRef.current.destination);
      source.start(0);
    }
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
    <>
      <div className="timer-controls">
        <ControlsDisabledContext.Provider value={!isValidTimeString(inputTime)}>
          <TimeField
            inputTime={inputTime}
            setInputTime={setInputTime}
          />
          {renderTriggerButton()}
          <ControlButton text="Reset" handleControl={handleReset} />
          <ControlButton text="Gong" handleControl={playGong} />
        </ControlsDisabledContext.Provider>
      </div>

      <div className={'timer-display ' + renderDisplayState()}>
        <div className="timer-display__time ">{toTimeString(seconds)}</div>
      </div>
    </>
  )
}
