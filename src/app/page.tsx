import Link from 'next/link';
import Image from 'next/image';
import avatarRacingPic from '../../public/assets/img/avatars/racing.jpg';
import avatarPhpconPic from '../../public/assets/img/avatars/phpcon.png';
import avatarGirlPic from '../../public/assets/img/avatars/girl.png';
import bookcoverPerfectPic from '../../public/assets/img/bookcovers/perfect.jpg';
import bookcoverWebappPic from '../../public/assets/img/bookcovers/webapp.png';

export default function Home() {
  return (
    <>
      <header className="header">
        <h1 className="header__headline">About</h1>
      </header>

      <section id="about" className="content">
        <dl className="infolist">
          <dt className="infolist__term">Katsuhiro Ogawa / 小川 雄大🇯🇵</dt>
          <dd className="infolist__detail">
            a.k.a. <a href="https://github.com/fivestar">fivestar</a>
          </dd>
          <dt className="infolist__term">
            Principal Engineer at <a href="https://about.mercari.com/">Mercari Inc.</a>
          </dt>
          <dt className="infolist__term">Technical Book Writing, Engineering Advising</dt>
          <dt className="infolist__term">
            Born on <time dateTime="1987-06-18">June 18, 1987</time> in Kawaguchi, Saitama
          </dt>
          <dt className="infolist__term">Live in Tokyo</dt>
          <dt className="infolist__term">
            Avatars ...
            <Image className="avatar" src={avatarRacingPic} alt="Racing" />
            <Image className="avatar" src={avatarPhpconPic} alt="PHPcon" />
            <Image className="avatar" src={avatarGirlPic} alt="Umbrella Girl" />
          </dt>
        </dl>
      </section>

      <section id="apps" className="content">
        <header className="content__header">
          <h1 className="content__headline">Apps</h1>
        </header>

        <dl className="infolist">
          <dt className="infolist__term">
            <Link href="/kana">Kana</Link>
          </dt>
          <dd className="infolist__detail">
            Japanese &quot;hiragana/katakana&quot; and &quot;zenkaku/hankaku&quot; transformer.
          </dd>

          <dt className="infolist__term">
            <Link href="/timer">Timer</Link>
          </dt>
          <dd className="infolist__detail">Simple web countdown timer.</dd>
        </dl>
      </section>

      <section id="links" className="content">
        <header className="content__header">
          <h1 className="content__headline">Links</h1>
        </header>
        <dl className="infolist">
          <dt className="infolist__term">
            <a href="https://note.com/fivestr" target="_blank" rel="noreferrer">
              Note
            </a>
          </dt>
          <dt className="infolist__term">
            <a href="https://fivestar.hatenablog.com/" target="_blank" rel="noreferrer">
              Blog
            </a>
          </dt>
          <dt className="infolist__term">
            <a href="https://www.facebook.com/katsuhiro.ogawa" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </dt>
          <dt className="infolist__term">
            <a href="https://github.com/fivestar" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </dt>
          <dt className="infolist__term">
            <a href="https://twitter.com/fivestr" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </dt>
          <dt className="infolist__term">
            <a href="https://www.linkedin.com/in/katsuhiroogawa/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </dt>
          <dt className="infolist__term">
            <a href="https://speakerdeck.com/u/fivestar" target="_blank" rel="noreferrer">
              Slides
            </a>
            &nbsp;(
            <a href="https://www.slideshare.net/fivestar" target="_blank" rel="noreferrer">
              Old
            </a>
            )
          </dt>
        </dl>
      </section>

      <section id="repos" className="content">
        <header className="content__header">
          <h1 className="content__headline">Repositories</h1>
        </header>

        <dl className="infolist">
          <dt className="infolist__term">
            <a href="https://github.com/fivestar/resozyme" target="_blank" rel="noreferrer">
              Resozyme
            </a>
          </dt>
          <dd className="infolist__detail">
            Resource-oriented framework for building the RESTful web application in Go.
          </dd>

          <dt className="infolist__term">
            <a
              href="https://github.com/crocos/CrocosSecurityBundle"
              target="_blank"
              rel="noreferrer"
            >
              CrocosSecurityBundle
            </a>
          </dt>
          <dd className="infolist__detail">
            Symfony bundle provides a simple way to manage auth with annotation.
          </dd>

          <dt className="infolist__term">
            <a href="https://github.com/navy/memberid" target="_blank" rel="noreferrer">
              memberid
            </a>
          </dt>
          <dd className="infolist__detail">
            ID management/converting utility for helping your team members management.
          </dd>

          <dt className="infolist__term">
            <a href="https://github.com/navy/navy" target="_blank" rel="noreferrer">
              Navy
            </a>
          </dt>
          <dd className="infolist__detail">GitHub web-hooked event handling framework.</dd>
        </dl>
      </section>

      <section id="books" className="content">
        <header className="content__header">
          <h1 className="content__headline">Books</h1>
        </header>

        <div className="media">
          <div className="media__thumbnail">
            <a
              href="https://www.amazon.co.jp/dp/4774144371/?&amp;_encoding=UTF8&amp;tag=kofivestar-22&amp;linkCode=ur2&amp;linkId=ba8bf8a2f8a9334a85b7d3ac4acfaaba&amp;camp=247&amp;creative=1211"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={bookcoverPerfectPic} alt="パーフェクトPHP" />
            </a>
          </div>
          <div className="media__content">
            <dl className="infolist">
              <dt className="infolist__term">
                <a
                  href="https://www.amazon.co.jp/dp/4774144371/?&amp;_encoding=UTF8&amp;tag=kofivestar-22&amp;linkCode=ur2&amp;linkId=ba8bf8a2f8a9334a85b7d3ac4acfaaba&amp;camp=247&amp;creative=1211"
                  target="_blank"
                  rel="noreferrer"
                >
                  パーフェクトPHP
                </a>
              </dt>
              <dd className="infolist__detail">
                Published at <time dateTime="2010-11-12">November 12, 2010</time>
              </dd>
              <dd className="infolist__detail">
                Talked at &nbsp;
                <a
                  href="https://www.slideshare.net/fivestar/php-5288493"
                  target="_blank"
                  rel="noreferrer"
                >
                  #phpcon2010
                </a>
                , &nbsp;
                <a
                  href="https://speakerdeck.com/fivestar/the-new-perfect-php-will-be-coming-soon"
                  target="_blank"
                  rel="noreferrer"
                >
                  #phpcon2015
                </a>
              </dd>
            </dl>
          </div>
        </div>

        <div className="media">
          <div className="media__thumbnail">
            <a
              href="https://www.amazon.co.jp/dp/4774150827/?&amp;_encoding=UTF8&amp;tag=kofivestar-22&amp;linkCode=ur2&amp;linkId=9742996e114614ba537f97011c4515f1&amp;camp=247&amp;creative=1211"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={bookcoverWebappPic} alt="効率的なWebアプリケーションの作り方" />
            </a>
          </div>
          <div className="media__content">
            <dl className="infolist">
              <dt className="infolist__term">
                <a
                  href="https://www.amazon.co.jp/dp/4774150827/?&amp;_encoding=UTF8&amp;tag=kofivestar-22&amp;linkCode=ur2&amp;linkId=9742996e114614ba537f97011c4515f1&amp;camp=247&amp;creative=1211"
                  target="_blank"
                  rel="noreferrer"
                >
                  効率的なWebアプリケーションの作り方
                </a>
              </dt>
              <dd className="infolist__detail">
                Published at <time dateTime="2012-05-26">May 26, 2012</time>
              </dd>
              <dd className="infolist__detail">
                Talked at &nbsp;
                <a
                  href="https://speakerdeck.com/fivestar/xiao-lu-de-nawebapurikesiyonfalsezuo-rifang"
                  target="_blank"
                  rel="noreferrer"
                >
                  #Symfony2Study
                </a>
              </dd>
              <dd className="infolist__detail">
                <a href="https://github.com/fivestar/php-rentacar" target="_blank" rel="noreferrer">
                  Application source code
                </a>
              </dd>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
