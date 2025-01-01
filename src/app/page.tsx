import Link from 'next/link';
import Image from 'next/image';
import { SiteHeader } from './SiteHeader';
import avatarRacingPic from '@@/assets/img/avatars/racing.jpg';
import avatarPhpconPic from '@@/assets/img/avatars/phpcon.png';
import avatarGirlPic from '@@/assets/img/avatars/girl.png';
import bookcoverPerfectPic from '@@/assets/img/bookcovers/perfect.jpg';
import bookcoverWebappPic from '@@/assets/img/bookcovers/webapp.png';

export default function HomePage() {
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

function Home() {
  return (
    <article className="content">
      <Section title="About">
        <ul className="infolist">
          <li className="infolist_item">
            <div className="infolist__title">Katsuhiro Ogawa / 小川 雄大 🇯🇵</div>
            <div className="infolist__description">
              a.k.a. <a href="https://github.com/fivestar">fivestar</a>
            </div>
          </li>
          <li className="infolist_item">
            <div className="infolist__title">
              Principal Engineer at <a href="https://about.mercari.com/">Mercari Inc.</a>
            </div>
          </li>
          <li className="infolist_item">
            <div className="infolist__title">Technical Book Writing, Engineering Advising</div>
          </li>
          <li className="infolist_item">
            <div className="infolist__title">
              Born on <time dateTime="1987-06-18">June 18, 1987</time> in Kawaguchi, Saitama
            </div>
          </li>
          <li className="infolist_item">
            <div className="infolist__title">Live in Tokyo</div>
          </li>
          <li className="infolist_item">
            <div className="infolist__title">
              Avatars ... <Image className="avatar" src={avatarRacingPic} alt="Racing" />{' '}
              <Image className="avatar" src={avatarPhpconPic} alt="PHPcon" />{' '}
              <Image className="avatar" src={avatarGirlPic} alt="Umbrella Girl" />
            </div>
          </li>
        </ul>
      </Section>

      <Section title="Apps">
        <ul className="infolist">
          <li className="infolist_item">
            <div className="infolist__title">
              <Link href="/kana">Kana</Link>
            </div>
            <div className="infolist__description">
              Japanese &quot;hiragana/katakana&quot; and &quot;zenkaku/hankaku&quot; transformer.
            </div>
          </li>
          <li className="infolist_item">
            <div className="infolist__title">
              <Link href="/timer">Timer</Link>
            </div>
            <div className="infolist__description">Simple web countdown timer.</div>
          </li>
        </ul>
      </Section>

      <Section title="Links">
        <ul className="infolist">
          <li className="infolist_item">
            <div className="infolist__title">
              <a href="https://note.com/fivestr" target="_blank" rel="noreferrer">
                Note
              </a>
            </div>
          </li>
          <li className="infolist_item">
            <div className="infolist__title">
              <a href="https://fivestar.hatenablog.com/" target="_blank" rel="noreferrer">
                Blog
              </a>
            </div>
          </li>
          <li className="infolist_item">
            <div className="infolist__title">
              <a href="https://www.facebook.com/katsuhiro.ogawa" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>
          </li>
          <li className="infolist_item">
            <div className="infolist__title">
              <a href="https://github.com/fivestar" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </li>
          <li className="infolist_item">
            <div className="infolist__title">
              <a href="https://twitter.com/fivestr" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </div>
          </li>
          <li className="infolist_item">
            <div className="infolist__title">
              <a
                href="https://www.linkedin.com/in/katsuhiroogawa/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </li>
          <li className="infolist_item">
            <div className="infolist__title">
              <a href="https://speakerdeck.com/u/fivestar" target="_blank" rel="noreferrer">
                Slides
              </a>{' '}
              (
              <a href="https://www.slideshare.net/fivestar" target="_blank" rel="noreferrer">
                Old
              </a>
              )
            </div>
          </li>
        </ul>
      </Section>

      <Section title="Repos">
        <ul className="infolist">
          <li className="infolist_item">
            <div className="infolist__title">
              <a href="https://github.com/fivestar/resozyme" target="_blank" rel="noreferrer">
                Resozyme
              </a>
            </div>
            <div className="infolist__description">
              Resource-oriented framework for building the RESTful web application in Go.
            </div>
          </li>
          <li className="infolist_item">
            <div className="infolist__title">
              <a
                href="https://github.com/crocos/CrocosSecurityBundle"
                target="_blank"
                rel="noreferrer"
              >
                CrocosSecurityBundle
              </a>
            </div>
            <div className="infolist__description">
              Symfony bundle provides a simple way to manage auth with annotation.
            </div>
          </li>
          <li className="infolist_item">
            <div className="infolist__title">
              <a href="https://github.com/navy/memberid" target="_blank" rel="noreferrer">
                memberid
              </a>
            </div>
            <div className="infolist__description">
              ID management/converting utility for helping your team members management.
            </div>
          </li>
          <li className="infolist_item">
            <div className="infolist__title">
              <a href="https://github.com/navy/navy" target="_blank" rel="noreferrer">
                Navy
              </a>
            </div>
            <div className="infolist__description">GitHub web-hooked event handling framework.</div>
          </li>
        </ul>
      </Section>

      <Section title="Books">
        <div className="media" itemScope itemType="https://schema.org/Book">
          <div className="media__thumbnail">
            <a
              href="https://www.amazon.co.jp/dp/4774144371/?&amp;_encoding=UTF8&amp;tag=kofivestar-22&amp;linkCode=ur2&amp;linkId=ba8bf8a2f8a9334a85b7d3ac4acfaaba&amp;camp=247&amp;creative=1211"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={bookcoverPerfectPic} alt="Cover of パーフェクトPHP" itemProp="image" />
            </a>
          </div>
          <div className="media__content">
            <ul className="infolist">
              <li className="infolist_item">
                <div className="infolist__title">
                  <a
                    href="https://www.amazon.co.jp/dp/4774144371/?&amp;_encoding=UTF8&amp;tag=kofivestar-22&amp;linkCode=ur2&amp;linkId=ba8bf8a2f8a9334a85b7d3ac4acfaaba&amp;camp=247&amp;creative=1211"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span itemProp="name">パーフェクトPHP</span>
                  </a>
                </div>
                <div className="infolist__description">
                  Published at{' '}
                  <time dateTime="2010-11-12" itemProp="datePublished">
                    November 12, 2010
                  </time>
                </div>
                <div className="infolist__description">
                  Talked at{' '}
                  <span
                    itemProp="subjectOf"
                    itemScope
                    itemType="https://schema.org/PresentationDigitalDocument"
                  >
                    <a
                      href="https://www.slideshare.net/fivestar/php-5288493"
                      target="_blank"
                      rel="noreferrer"
                      itemProp="url"
                    >
                      #phpcon2010
                    </a>
                  </span>
                  ,{' '}
                  <span
                    itemProp="subjectOf"
                    itemScope
                    itemType="https://schema.org/PresentationDigitalDocument"
                  >
                    <a
                      href="https://speakerdeck.com/fivestar/the-new-perfect-php-will-be-coming-soon"
                      target="_blank"
                      rel="noreferrer"
                      itemProp="url"
                    >
                      #phpcon2015
                    </a>
                  </span>
                </div>
                <div className="infolist__description">
                  ISBN: <span itemProp="isbn">978-4-7741-4437-5</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="media" itemScope itemType="https://schema.org/Book">
          <div className="media__thumbnail">
            <a
              href="https://www.amazon.co.jp/dp/4774150827/?&amp;_encoding=UTF8&amp;tag=kofivestar-22&amp;linkCode=ur2&amp;linkId=9742996e114614ba537f97011c4515f1&amp;camp=247&amp;creative=1211"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={bookcoverWebappPic}
                alt="Cover of 効率的なWebアプリケーションの作り方"
                itemProp="image"
              />
            </a>
          </div>
          <div className="media__content">
            <ul className="infolist">
              <li className="infolist_item">
                <div className="infolist__title">
                  <a
                    href="https://www.amazon.co.jp/dp/4774150827/?&amp;_encoding=UTF8&amp;tag=kofivestar-22&amp;linkCode=ur2&amp;linkId=9742996e114614ba537f97011c4515f1&amp;camp=247&amp;creative=1211"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span itemProp="name">効率的なWebアプリケーションの作り方</span>
                  </a>
                </div>
                <div className="infolist__description">
                  Published at{' '}
                  <time dateTime="2012-05-26" itemProp="datePublished">
                    May 26, 2012
                  </time>
                </div>
                <div className="infolist__description">
                  Talked at{' '}
                  <span
                    itemProp="subjectOf"
                    itemScope
                    itemType="https://schema.org/PresentationDigitalDocument"
                  >
                    <a
                      href="https://speakerdeck.com/fivestar/xiao-lu-de-nawebapurikesiyonfalsezuo-rifang"
                      target="_blank"
                      rel="noreferrer"
                      itemProp="url"
                    >
                      #Symfony2Study
                    </a>
                  </span>
                </div>
                <div className="infolist__description">
                  ISBN: <span itemProp="isbn">978-4-7741-5082-6</span>
                </div>
                <div className="infolist__description">
                  <span
                    itemProp="hasPart"
                    itemScope
                    itemType="https://schema.org/SoftwareSourceCode"
                  >
                    <a
                      href="https://github.com/fivestar/php-rentacar"
                      target="_blank"
                      rel="noreferrer"
                      itemProp="codeRepository"
                    >
                      Rentacar application source code
                    </a>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </article>
  );
}

function Section({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  const id = title
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[^\w-]/g, '');

  return (
    <section className="content-section" id={id}>
      <header className="content-header">
        <h2 className="content-header__title">{title}</h2>
      </header>
      {children}
    </section>
  );
}
