import React, { Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

interface SourceFieldProps {
  text: string;
  placeholder: string;
  setText: Dispatch<SetStateAction<string>>;
}

export function SourceField({ text, placeholder, setText }: SourceFieldProps) {
  return (
    <div className="kana-control">
      <label className="kana-control__label" htmlFor="kana-source">
        Enter Your Text <FontAwesomeIcon icon={faPenToSquare} size="sm" />
      </label>
      <div className="kana-control__area">
        <textarea
          className="kana-control__input"
          id="kana-source"
          value={text}
          placeholder={placeholder}
          onChange={(event) => setText(event.target.value)}
        />
        <button
          className="btn kana-control__button"
          data-variant="transparent"
          onClick={() => setText('')}
          disabled={!text}
          aria-label="Clear text"
        >
          <FontAwesomeIcon icon={faXmark} size="1x" />
        </button>
      </div>
    </div>
  );
}
