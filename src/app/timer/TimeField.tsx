'use client';

import React, { ChangeEvent, useState, useEffect, useRef } from 'react';
import { isValidTimeString } from './utils';

interface TimeFieldProps {
  value: string;
  onInput: (value: string) => void;
}

const timeChoices = ['1:00', '3:00', '5:00', '10:00', '15:00', '20:00', '30:00'];

export function TimeField({ value, onInput }: TimeFieldProps) {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const pickerRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInput(event.target.value);
  };

  const handleTimePick = (time: string) => {
    onInput(time);
    setShowTimePicker(false);
  };

  const handleFocus = () => {
    if (!inputRef.current || !pickerRef.current) {
      return;
    }

    const rect = inputRef.current.getBoundingClientRect();
    pickerRef.current.style.top = rect.bottom + window.scrollY + 'px';
    pickerRef.current.style.left = rect.left + window.scrollX + 'px';
    setShowTimePicker(true);
  };

  // eslint-disable-next-line
  const handleDocumentClick = (event: any) => {
    if (
      pickerRef.current &&
      !pickerRef.current.contains(event.target) &&
      inputRef.current &&
      !inputRef.current.contains(event.target)
    ) {
      setShowTimePicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className="timer-control timer-control--time">
      <input
        type="text"
        className={'input-field' + (!isValidTimeString(value) ? ' input-field--error' : '')}
        ref={inputRef}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <div
        className={'time-picker' + (showTimePicker ? ' time-picker--active' : '')}
        ref={pickerRef}
      >
        {timeChoices.map((tm, index) => (
          <button key={index} className="time-picker__item" onClick={() => handleTimePick(tm)}>
            {tm}
          </button>
        ))}
      </div>
    </div>
  );
}
