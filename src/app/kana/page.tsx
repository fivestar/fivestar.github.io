import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '../layout';
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
      <SiteHeader>
        <div className="container">
          <div className="content-header">
            <h2 className="content-header__title">
              <Link href="/kana" className="content-header__link">
                Kana
              </Link>
            </h2>
            <p className="content-header__description">Easy Japanese text transforms</p>
          </div>
        </div>
      </SiteHeader>

      <main className="main">
        <div className="container">
          <article className="content">
            <KanaApp />
          </article>
        </div>
      </main>
    </>
  );
}
