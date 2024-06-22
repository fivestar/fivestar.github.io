import React from 'react';
import ReactDOM from 'react-dom/client';
import KanaApp from './Kana/KanaApp';
import reportWebVitals from './reportWebVitals';

document.addEventListener("DOMContentLoaded", () => {
  const kanaRootElement = document.getElementById('kana-root')
  if (kanaRootElement) {
    const root = ReactDOM.createRoot(
      kanaRootElement as HTMLElement
    );
    root.render(
      <React.StrictMode>
        <KanaApp />
      </React.StrictMode>
    );
  }

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
})