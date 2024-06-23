import React, { useState, useEffect, useRef } from 'react';
import { isValidTimeString } from './utils'

interface TimeFieldProps {
  inputTime: string;
  setInputTime: Function;
}

export function TimeField({
  inputTime,
  setInputTime,
}: TimeFieldProps) {
  const [valid, setValid] = useState<boolean>(true);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const pickerRef = useRef<HTMLInputElement | null>(null);

  const timeChoices = ['1:00', '3:00', '5:00', '10:00', '15:00', '20:00', '30:00'];

  useEffect(() => {
    setValid(isValidTimeString(inputTime));
  }, [inputTime]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTime(event.target.value);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!inputRef.current || !pickerRef.current) {
      return
    }

    const rect = inputRef.current.getBoundingClientRect();
    pickerRef.current.style.top = rect.bottom + window.scrollY + 'px';
    pickerRef.current.style.left = rect.left + window.scrollX + 'px';
    setShowTimePicker(true);
  };

  const handleDocumentClick = (event: any) => {
    if (pickerRef.current && !pickerRef.current.contains(event.target) &&
      inputRef.current && !inputRef.current.contains(event.target)) {
      setShowTimePicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleTimePick = (time: string) => {
    setInputTime(time);
    setShowTimePicker(false);
  };

  return (
    <div className="timer-control timer-control--time">
      <input
        type="text"
        className={'input-field' + (valid ? '' : ' input-field--error')}
        ref={inputRef}
        value={inputTime}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <div className={'time-picker' + (showTimePicker ? ' time-picker--shown' : '')} ref={pickerRef}>
        {timeChoices.map(tm =>
          <button className="time-picker__item" onClick={() => handleTimePick(tm)}>{tm}</button>
        )}
      </div>
    </div>
  );
}