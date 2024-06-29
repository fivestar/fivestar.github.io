import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { GoogleTagManager } from '@next/third-parties/google';
import { Ubuntu, Noto_Sans_Display } from 'next/font/google';
import 'sanitize.css';
import './globals.css';
import iconPic from '../../public/assets/img/icon.png';
import githubMarkPic from '../../public/assets/github-mark/github-mark.png';
import { titleAndDescription } from './shared-metadata';

export const metadata: Metadata = {
  ...titleAndDescription({
    title: 'fvstr.jp',
    description: "fivestar's personal website",
  }),
};

export const ubuntu = Ubuntu({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
});

export const notoSansDisplay = Noto_Sans_Display({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-display',
});

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      <body className={`${ubuntu.variable} ${notoSansDisplay.variable}`}>
        <div className="layout">
          <div className="logo">
            <h1 className="logo__content">
              <Link href="/" className="logo__link">
                <Image className="logo__icon" src={iconPic} alt="f" />
                &nbsp;fvstr<span className="logo__link-dot">.</span>jp
              </Link>
            </h1>
          </div>

          <main className="main">
            <div className="container">{children}</div>
          </main>

          <footer className="footer">
            <div className="container">
              <small className="footer__text">&copy; 2024 Katsuhiro Ogawa</small>
              <small className="footer__text">
                <a
                  href="https://github.com/fivestar/fivestar.github.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={githubMarkPic} alt="Get the repository" />
                </a>
              </small>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
