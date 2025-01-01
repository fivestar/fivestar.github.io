import React, { Dispatch, SetStateAction } from 'react';

interface SourceFieldProps {
  text: string;
  placeholder: string;
  setText: Dispatch<SetStateAction<string>>;
}

export function SourceField({ text, placeholder, setText }: SourceFieldProps) {
  return (
    <div className="kana-control">
      <label className="kana-control__label" htmlFor="kana-source">
        Enter Your Text &gt;
      </label>
      <div className="kana-control__area">
        <textarea
          className="kana-control__input"
          id="kana-source"
          value={text}
          placeholder={placeholder}
          onChange={(event) => setText(event.target.value)}
        />
        <button className="btn kana-control__button" onClick={() => setText('')} disabled={!text}>
          Reset
        </button>
      </div>
    </div>
  );
}
