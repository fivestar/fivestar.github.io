'use client';

import React, { ChangeEvent, FocusEvent, KeyboardEvent, useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { isValidTimeString } from './utils';

interface TimeFieldProps {
  value: string;
  onInput: (value: string) => void;
}

const timeChoices = ['1:00', '3:00', '5:00', '10:00', '15:00', '20:00', '30:00'];

export function TimeField({ value, onInput }: TimeFieldProps) {
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

  const handleTimePick = (time: string, key: number) => {
    onInput(time);
    setShowTimePicker(false);
    setFocusedKey(key);
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

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const nextFocus = e.relatedTarget;
    if (!pickerRef.current?.contains(nextFocus)) {
      setShowTimePicker(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setShowTimePicker(false);
      inputRef.current?.focus();
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusNextOption();
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusPreviousOption();
    }

    if (e.key === 'Enter') {
      pickFocusedOption();
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
    handleTimePick(timeChoices[focusedKey], focusedKey);
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
    <div className="timer-control timer-control--time">
      <div className="input-group">
        <label htmlFor="timer-input" className="timer-control__label input-group__text">
          <FontAwesomeIcon icon={faStopwatch} size="sm" />
          <span className="visually-hidden">Timer input</span>
        </label>{' '}
        <input
          type="text"
          className={'input-field timer-control__input'}
          id="timer-input"
          ref={inputRef}
          value={value}
          aria-haspopup={true}
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
            onClick={() => handleTimePick(tm, index)}
          >
            {tm}
          </li>
        ))}
      </ul>
    </div>
  );
}
