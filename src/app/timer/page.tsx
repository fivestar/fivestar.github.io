import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader } from '../SiteHeader';
import './timer.css';
import { titleAndDescription } from '../shared-metadata';
import TimerApp from './TimerApp';

export const metadata: Metadata = {
  ...titleAndDescription({
    title: 'Timer - fvstr.jp',
    description: 'Countdown for talks',
  }),
};

export default function TimerPage() {
  return (
    <>
      <SiteHeader>
        <div className="container">
          <div className="content-header">
            <h2 className="content-header__title">
              <Link href="/timer" className="content-header__link">
                Timer
              </Link>
            </h2>
            <p className="content-header__description">Countdown for talks</p>
          </div>
        </div>
      </SiteHeader>

      <main className="main">
        <div className="container">
          <article className="content">
            <TimerApp />
          </article>
        </div>
      </main>
    </>
  );
}
