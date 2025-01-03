'use client';

import React, { useEffect } from 'react';
import { SiteHeader } from './SiteHeader';
import Home from './Home';

export default function HomePage() {
  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      registerServiceWorker();
    }
  }, []);

  async function registerServiceWorker() {
    await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
      updateViaCache: 'none',
    });
  }

  return (
    <>
      <SiteHeader></SiteHeader>

      <main className="main">
        <div className="container">
          <Home />
        </div>
      </main>
    </>
  );
}
