import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '../SiteHeader';
import './kana.css';
import { titleAndDescription, appleMobileWebApp } from '../shared-metadata';
import KanaApp from './KanaApp';

export const metadata: Metadata = {
  ...titleAndDescription({
    title: 'Kana - fvstr.jp',
    description: '日本語の全角/半角、ひらがな/カタカナ変換を簡単に行えるツールです',
  }),
  ...appleMobileWebApp(),
};

export default function KanaPage() {
  return (
    <div className="page">
      <SiteHeader logoOnly={true} />

      <main className="main">
        <div className="container">
          <div className="content-header main-header">
            <h2 className="content-header__title">
              <Link href="/kana" className="content-header__link">
                Kana
              </Link>
            </h2>
            <p className="content-header__description">Easy Japanese kana/width transforms</p>
          </div>

          <div className="content">
            <KanaApp />
          </div>
        </div>
      </main>
    </div>
  );
}
