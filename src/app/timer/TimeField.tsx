'use client';

import React, { ChangeEvent, FocusEvent, KeyboardEvent, useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { isValidTimeString } from './utils';

interface TimeFieldProps {
  value: string;
  disabled: boolean;
  onInput: (value: string) => void;
  onInputDone: (value: string) => void;
}

const timeChoices = ['1:00', '3:00', '5:00', '10:00', '15:00', '20:00', '30:00'];

export function TimeField({ value, disabled, onInput, onInputDone }: TimeFieldProps) {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [focusedKey, setFocusedKey] = useState(-1);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const pickerRef = useRef<HTMLUListElement | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInput(event.target.value);

    let found = false;
    timeChoices.map((v, k) => {
      if (event.target.value === v) {
        setFocusedKey(k);
        found = true;
      }
    });
    if (!found) {
      setFocusedKey(-1);
    }
  };

  const handleTimePick = (time: string) => {
    onInputDone(time);
    setShowTimePicker(false);
    setFocusedKey(-1);
  };

  const handleFocus = () => {
    if (!inputRef.current || !pickerRef.current) {
      return;
    }

    const rect = inputRef.current.getBoundingClientRect();
    pickerRef.current.style.right = '0';
    setShowTimePicker(true);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const nextFocus = event.relatedTarget;
    if (!pickerRef.current?.contains(nextFocus)) {
      setShowTimePicker(false);
      onInputDone(value);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setShowTimePicker(false);
      inputRef.current?.focus();
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      focusNextOption();
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      focusPreviousOption();
    }

    if (event.key === 'Enter') {
      if (focusedKey > -1) {
        pickFocusedOption();

        // Delay the firing of onBlur events.
        setTimeout(() => {
          (event.target as HTMLInputElement).blur();
        }, 0);
      } else if (isValidTimeString(value)) {
        (event.target as HTMLInputElement).blur();
      }
    }
  };

  const focusNextOption = () => {
    if (focusedKey === -1 || focusedKey === timeChoices.length - 1) {
      setFocusedKey(0);
    } else {
      setFocusedKey(focusedKey + 1);
    }
  };

  const focusPreviousOption = () => {
    if (focusedKey === -1 || focusedKey === 0) {
      setFocusedKey(timeChoices.length - 1);
    } else {
      setFocusedKey(focusedKey - 1);
    }
  };

  const pickFocusedOption = () => {
    if (focusedKey === -1) {
      return;
    }
    handleTimePick(timeChoices[focusedKey]);
  };

  // eslint-disable-next-line
  const handleDocumentClick = (event: any) => {
    if (!pickerRef.current?.contains(event.target) && !inputRef.current?.contains(event.target)) {
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
    <div className="timer-control" data-control-kind="time">
      <div className="input-group">
        <label htmlFor="timer-input" className="input-group__text">
          <FontAwesomeIcon icon={faStopwatch} size="sm" />
          <span className="visually-hidden">Timer input</span>
        </label>{' '}
        <input
          type="text"
          className={'input-field'}
          id="timer-input"
          ref={inputRef}
          value={value}
          disabled={disabled}
          role="combobox"
          aria-haspopup={true}
          aria-expanded={showTimePicker}
          aria-controls="time-picker"
          aria-invalid={!isValidTimeString(value)}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
      </div>
      <ul
        className="time-picker"
        id="time-picker"
        ref={pickerRef}
        role="listbox"
        hidden={!showTimePicker}
      >
        {timeChoices.map((tm, index) => (
          <li
            key={index}
            className="time-picker__item"
            role="option"
            tabIndex={-1}
            aria-selected={index === focusedKey}
            onClick={() => handleTimePick(tm)}
          >
            {tm}
          </li>
        ))}
      </ul>
    </div>
  );
}
