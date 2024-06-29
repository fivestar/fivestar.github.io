import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="error">
      <h1 className="error__status">404</h1>
      <h2 className="error__message">Page Not Found</h2>
      <p className="error__description">The page you are looing for does not exist.</p>
      <div className="error__action">
        <Link className="btn" href="/">
          &larr; Go to Home Page
        </Link>
      </div>
    </div>
  );
}
