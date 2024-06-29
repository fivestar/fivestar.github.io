'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useInterval } from 'usehooks-ts';
import { TimeField } from './TimeField';
import { ControlButton } from './ControlButton';
import { TimerDisplay } from './TimerDisplay';
import { toSeconds, isValidTimeString } from './utils';

type TimerState = {
  state: 'STOPPED' | 'STARTED' | 'PAUSED';
  startTime: string;
  secondsRemaining: number;
};

export default function TimerApp() {
  const [timer, setTimer] = useState<TimerState>({
    state: 'STOPPED',
    startTime: '5:00',
    secondsRemaining: 5 * 60,
  });
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    audioContextRef.current = new AudioContext();
    fetch('/assets/audio/dora.m4a')
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => audioContextRef.current?.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        audioBufferRef.current = audioBuffer || null;
      })
      .catch((err) => console.error('Error loading audio file', err));
  }, []);

  useInterval(
    () => {
      setTimer({
        ...timer,
        secondsRemaining: timer.secondsRemaining - 1,
      });
    },
    timer.state == 'STARTED' ? 1000 : null
  );

  useEffect(() => {
    if (timer.secondsRemaining === 0) {
      playGong();

      console.debug("Time's up!");
    }
  }, [timer.secondsRemaining]);

  const handleInput = (value: string) => {
    setTimer({
      ...timer,
      startTime: value,
    });
  };

  const handleStart = () => {
    try {
      setTimer({
        ...timer,
        state: 'STARTED',
        secondsRemaining: toSeconds(timer.startTime),
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error('Failed to parse time: ', e.message);
      }
    }
  };

  const handlePause = () => {
    setTimer({
      ...timer,
      state: 'PAUSED',
    });
  };

  const handleResume = () => {
    setTimer({
      ...timer,
      state: 'STARTED',
    });
  };

  const handleReset = () => {
    try {
      setTimer({
        ...timer,
        state: 'STOPPED',
        secondsRemaining: toSeconds(timer.startTime),
      });
    } catch (e) {
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

  const controlDisabled = !isValidTimeString(timer.startTime);

  const renderTriggerButton = () => {
    switch (timer.state) {
      case 'STARTED':
        return <ControlButton text="Pause" disabled={controlDisabled} onClick={handlePause} />;
      case 'PAUSED':
        return <ControlButton text="Resume" disabled={controlDisabled} onClick={handleResume} />;
      default:
        return <ControlButton text="Start" disabled={controlDisabled} onClick={handleStart} />;
    }
  };

  return (
    <>
      <div className="timer-controls">
        <TimeField value={timer.startTime} onInput={handleInput} />
        {renderTriggerButton()}
        <ControlButton text="Reset" disabled={controlDisabled} onClick={handleReset} />
        <ControlButton text="Gong" disabled={controlDisabled} onClick={playGong} />
      </div>

      <TimerDisplay seconds={timer.secondsRemaining} />
    </>
  );
}
