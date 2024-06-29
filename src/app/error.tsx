'use client';

import React, { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="error">
      <h1 className="error__status">Oops!</h1>
      <h2 className="error__message">Something went wrong</h2>
      <p className="error__description">An unexpected error has occurred.</p>
      <div className="error__action">
        <button className="btn" onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </div>
  );
}
