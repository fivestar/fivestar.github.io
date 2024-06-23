interface SourceFieldProps {
  text: string
  placeholder: string
  setText: Function;
}

export function SourceField({
  text,
  placeholder,
  setText,
}: SourceFieldProps) {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="kana-control">
      <label className="kana-control__label" htmlFor="kana-source">Input</label>
      <div className="kana-control__area">
        <textarea
          className="kana-control__input"
          id="kana-source"
          value={text}
          placeholder={placeholder}
          onChange={handleChange}
        />
        <button className="btn kana-control__button" onClick={() => setText("")} disabled={!text}>Reset</button>
      </div>
    </div>
  );
}