'use client';

import React, { useState, useEffect } from 'react';
import { SourceField } from './SourceField';
import { DestField } from './DestField';

const converters = [
  ['to 半角英数/全角カナ', 'KVas'],
  ['to 全角', 'KVAS'],
  ['to 半角', 'khas'],
  ['かな to 全角カナ', 'CKVAS'],
  ['カナ to 全角かな', 'cHVAS'],
];

const placeholder = 'みなとくあかさか9-7-1 ミッドタウン・タワー';

export default function KanaApp() {
  const [text, setText] = useState<string>('');
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    setActiveId(null);
  }, [text]);

  const handleCopy = (id: string | null) => {
    setActiveId(id);
  };

  return (
    <>
      <div className="kana-form" data-form-type="in">
        <fieldset>
          <legend>Input Field</legend>
          <SourceField text={text} placeholder={placeholder} setText={setText} />
        </fieldset>
      </div>

      <div className="kana-form" data-form-type="out">
        <fieldset>
          <legend>Output Fields</legend>
          {converters.map((conv, index) => (
            <DestField
              key={index}
              text={text}
              placeholder={placeholder}
              label={conv[0]}
              converter={conv[1]}
              id={`kana-dest-${index}`}
              activeId={activeId}
              onCopy={handleCopy}
            />
          ))}
        </fieldset>
      </div>
    </>
  );
}
