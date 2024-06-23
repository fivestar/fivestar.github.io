import React, { useState, useEffect } from 'react';

interface DestFieldProps {
  text: string
  placeholder: string
  label: string;
  converter: string;
  id: string;
  activeId: string | null;
  onCopy: Function;
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

  useEffect(() => {
    setButtonLabel('Copy');
  }, [text]);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(convertedText).then(() => {
      onCopy(id);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  const convertedText = mb_convert_kana(text, converter);
  const convertedPlaceholder = mb_convert_kana(placeholder, converter);

  return (
    <div className="kana-control">
      <label className="kana-control__label" htmlFor={id}>{label}</label>
      <div className="kana-control__area">
        <textarea
          className="kana-control__input"
          id={id}
          value={convertedText}
          placeholder={convertedPlaceholder}
          readOnly={true}
        />
        <button
          className="btn kana-control__button"
          onClick={handleCopyClick}
          disabled={!text}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  )
}