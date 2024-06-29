import React from 'react';
import type { Metadata } from 'next';
import './timer.css';
import { titleAndDescription } from '../shared-metadata';
import TimerApp from './TimerApp';

export const metadata: Metadata = {
  ...titleAndDescription({
    title: 'Timer | fvstr.jp',
    description: 'Simple Countdown Timer',
  }),
};

export default function TimerPage() {
  return (
    <>
      <header className="header">
        <h1 className="header__headline">Timer</h1>
        <p className="header__subheadline">simple countdown timer</p>
      </header>

      <article className="content">
        <TimerApp />
      </article>
    </>
  );
}
