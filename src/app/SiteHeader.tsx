import Image from 'next/image';
import Link from 'next/link';
import iconPic from '@@/assets/img/icon.png';

export function SiteHeader({
  logoOnly,
}: Readonly<{
  logoOnly?: boolean;
}>) {
  return (
    <header className="site-header" data-logo-only={logoOnly}>
      <h1 className="brand">
        <Link href="/" className="brand__link">
          <div className="brand__container">
            <Image className="brand__icon" src={iconPic} alt="" />
            <span className="brand__title">
              fvstr
              <span className="brand__dot">.</span>jp
            </span>
          </div>
        </Link>
      </h1>
    </header>
  );
}
