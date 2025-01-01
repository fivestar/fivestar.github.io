'use client';

import React, { useState, useEffect } from 'react';
import mb_convert_kana from '@/p2js/p2js.mb_convert_kana';

interface DestFieldProps {
  text: string;
  placeholder: string;
  label: string;
  converter: string;
  id: string;
  activeId: string | null;
  onCopy: (id: string) => void;
}

export function DestField({
  text,
  placeholder,
  label,
  converter,
  id,
  activeId,
  onCopy,
}: DestFieldProps) {
  const [buttonLabel, setButtonLabel] = useState('Copy');

  useEffect(() => {
    if (activeId === id) {
      setButtonLabel('Copied!');
    } else {
      setButtonLabel('Copy');
    }
  }, [activeId, id]);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(convertedText)
      .then(() => {
        onCopy(id);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  const convertedText = mb_convert_kana(text, converter);
  const convertedPlaceholder = mb_convert_kana(placeholder, converter);

  return (
    <div className="kana-control">
      <label className="kana-control__label" htmlFor={id}>
        {label}
      </label>
      <div className="kana-control__area">
        <textarea
          className="kana-control__input"
          id={id}
          value={convertedText}
          placeholder={convertedPlaceholder}
          readOnly={true}
          aria-readonly={true}
        />
        <button
          type="button"
          className="btn kana-control__button"
          data-variant="primary"
          onClick={handleCopyClick}
          disabled={!text}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
