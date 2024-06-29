import React from 'react';
import type { Metadata } from 'next';
import './kana.css';
import { titleAndDescription } from '../shared-metadata';
import KanaApp from './KanaApp';

export const metadata: Metadata = {
  ...titleAndDescription({
    title: 'Kana - fvstr.jp',
    description: '日本語の全角/半角、ひらがな/カタカナ変換を簡単に行えるツールです',
  }),
};

export default function KanaPage() {
  return (
    <>
      <header className="header">
        <h1 className="header__headline">Kana</h1>
        <p className="header__subheadline">transform Japanese script</p>
      </header>

      <article className="content">
        <KanaApp />
      </article>
    </>
  );
}
