function SourceField() {
  return (
    <div className="kana-form kana-form--source" id="kana-form-source">
      <fieldset>
        <div className="kana-control">
          <label className="kana-control__label" htmlFor="kana-source">Input</label>
          <div className="kana-control__area">
            <textarea className="kana-control__input" id="kana-source" placeholder="みなとくあかさか9-7-1 ミッドタウン・タワー"></textarea>
            <button className="btn kana-control__button kana-control__button--reset">Reset</button>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default SourceField;