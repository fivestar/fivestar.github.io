'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useInterval } from 'usehooks-ts';
import { TimeField } from './TimeField';
import { TimerState } from './TimerState';
import { StartButton, ResetButton, GongButton } from './Button';
import { TimerDisplay } from './TimerDisplay';
import { toSeconds, isValidTimeString } from './utils';

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

  const startTimeInvalid = !isValidTimeString(timer.startTime);

  return (
    <>
      <div className="timer-controls">
        <TimeField value={timer.startTime} onInput={handleInput} />
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

      <TimerDisplay seconds={timer.secondsRemaining} />
    </>
  );
}
