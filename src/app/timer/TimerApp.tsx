'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useInterval } from 'usehooks-ts';
import { TimeField } from './TimeField';
import type { TimerState } from './TimerState';
import { StartButton, ResetButton, GongButton } from './Button';
import { TimerDisplay } from './TimerDisplay';
import { toSeconds, isValidTimeString, toTimeString } from './utils';

const CONTROL_HIDE_SECONDS = 5;

export default function TimerApp() {
  const [timer, setTimer] = useState<TimerState>({
    state: 'STOPPED',
    startTime: '5:00',
    secondsAtStart: 5 * 60,
    secondsRemaining: 5 * 60,
  });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [isStandby, setIsStandby] = useState(true);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);
  const standbyTimer = useRef<NodeJS.Timeout | undefined>(undefined);

  const checkOrientation = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setIsRotated(height > width);
  };

  const resetStandbyTimer = useCallback(() => {
    clearTimeout(standbyTimer.current);
    setIsStandby(false);

    if (isFullscreen && timer.state == 'STARTED') {
      standbyTimer.current = setTimeout(() => setIsStandby(true), CONTROL_HIDE_SECONDS * 1000);
    }
  }, [isFullscreen, timer.state]);

  const handleInteraction = () => {
    resetStandbyTimer();
  };

  useEffect(() => {
    audioContextRef.current = new AudioContext();
    fetch('/assets/audio/bellding-254774.mp3')
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => audioContextRef.current?.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        audioBufferRef.current = audioBuffer || null;
      })
      .catch((err) => console.error('Error loading audio file', err));

    checkOrientation();
    window.addEventListener('resize', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      if (standbyTimer.current) {
        clearTimeout(standbyTimer.current);
      }
    };
  }, []);

  useInterval(
    () => {
      setTimer((prev) => ({
        ...prev,
        secondsRemaining: prev.secondsRemaining - 1,
      }));
    },
    timer.state == 'STARTED' ? 1000 : null
  );

  useEffect(() => {
    if (timer.secondsRemaining === 0) {
      playGong();

      console.debug("Time's up!");
    }
  }, [timer.secondsRemaining]);

  useEffect(() => {
    resetStandbyTimer();
  }, [resetStandbyTimer]);

  const handleInput = (value: string) => {
    setTimer((prev) => ({
      ...prev,
      startTime: value,
    }));
  };

  const handleInputDone = (value: string) => {
    try {
      const seconds = toSeconds(value);
      const formattedValue = toTimeString(seconds);

      setTimer((prev) =>
        prev.state != 'STOPPED'
          ? { ...prev, startTime: formattedValue }
          : {
              ...prev,
              startTime: formattedValue,
              secondsAtStart: seconds,
              secondsRemaining: seconds,
            }
      );
    } catch (e: unknown) {
      setTimer((prev) => ({
        ...prev,
        startTime: value,
      }));
    }
  };

  const handleStart = () => {
    try {
      const sec = toSeconds(timer.startTime);

      setTimer((prev) => ({
        ...prev,
        state: 'STARTED',
        secondsAtStart: sec,
        secondsRemaining: sec,
      }));
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error('Failed to parse time: ', e.message);
      }
    }
  };

  const handlePause = () => {
    setTimer((prev) => ({
      ...prev,
      state: 'PAUSED',
    }));
  };

  const handleResume = () => {
    setTimer((prev) => ({
      ...prev,
      state: 'STARTED',
    }));
  };

  const handleReset = () => {
    try {
      const sec = toSeconds(timer.startTime);

      setTimer((prev) => ({
        ...prev,
        state: 'STOPPED',
        secondsAtStart: sec,
        secondsRemaining: sec,
      }));
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error('Failed to parse time: ', e.message);
      }
    }
  };

  const playGong = () => {
    if (!audioBufferRef.current || !audioContextRef.current) {
      console.error('Audio data not ready');
      return;
    }

    const source = audioContextRef.current.createBufferSource();
    source.buffer = audioBufferRef.current;
    source.connect(audioContextRef.current.destination);
    source.start(0);
  };

  const handleToggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  const startTimeInvalid = !isValidTimeString(timer.startTime);

  return (
    <div
      className="timer-layout"
      data-fullscreen={isFullscreen}
      data-rotated={isRotated}
      data-standby={isStandby}
      onClick={handleInteraction}
      onTouchStart={handleInteraction}
    >
      <div className="timer-controls timer-layout__standby-hidden">
        <TimeField
          value={timer.startTime}
          disabled={timer.state != 'STOPPED'}
          onInput={handleInput}
          onInputDone={handleInputDone}
        />
        <StartButton
          timerState={timer.state}
          disabled={startTimeInvalid}
          onStart={handleStart}
          onPause={handlePause}
          onResume={handleResume}
        />
        <ResetButton disabled={startTimeInvalid} onReset={handleReset} />
        <GongButton disabled={startTimeInvalid} onGong={playGong} />
      </div>

      <TimerDisplay
        {...timer}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />
    </div>
  );
}
