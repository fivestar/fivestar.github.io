import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import avatarRacingPic from '@@/assets/img/avatars/racing.jpg';
import avatarPhpconPic from '@@/assets/img/avatars/phpcon.png';
import avatarGirlPic from '@@/assets/img/avatars/girl.png';
import bookcoverPerfectPic from '@@/assets/img/bookcovers/perfect.jpg';
import bookcoverWebappPic from '@@/assets/img/bookcovers/webapp.png';

type InfoItem = {
  title: string;
  url: string;
  description?: string;
};

type BookItem = {
  id: string;
  title: string;
  url: string;
  coverImage: StaticImageData;
  publishDate: string;
  publishDateFormat: string;
  presentationURL: string;
  presentationEvent: string;
  isbn: string;
  amazonURL: string;
  parts?: InfoItem[];
};

const apps: InfoItem[] = [
  {
    title: 'Kana',
    url: '/kana',
    description: 'Japanese "hiragana/katakana" and "zenkaku/hankaku" transformer.',
  },
  { title: 'Timer', url: '/timer', description: 'Countdown timer for talks' },
];

const links: InfoItem[] = [
  { title: 'Note', url: 'https://note.com/fivestr' },
  { title: 'Hatena Blog', url: 'https://fivestar.hatenablog.com/' },
  { title: 'Facebook', url: 'https://www.facebook.com/katsuhiro.ogawa' },
  { title: 'GitHub', url: 'https://github.com/fivestar' },
  { title: 'Twitter', url: 'https://twitter.com/fivestr' },
  { title: 'LinkedIn', url: 'https://www.linkedin.com/in/katsuhiroogawa/' },
  { title: 'SlideShare', url: 'https://www.slideshare.net/fivestar' },
  { title: 'Speaker Deck', url: 'https://speakerdeck.com/u/fivestar' },
];

const repos: InfoItem[] = [
  {
    title: 'Resozyme',
    url: 'https://github.com/fivestar/resozyme',
    description: 'Resource-oriented framework for building the RESTful web application in Go.',
  },
  {
    title: 'CrocosSecurityBundle',
    url: 'https://github.com/crocos/CrocosSecurityBundle',
    description: 'Symfony bundle provides a simple way to manage auth with annotation.',
  },
  {
    title: 'memberid',
    url: 'https://github.com/navy/memberid',
    description: 'ID management/converting utility for helping your team members management.',
  },
  {
    title: 'Navy',
    url: 'https://github.com/navy/navy',
    description: 'GitHub web-hooked event handling framework.',
  },
];

const books: BookItem[] = [
  {
    id: 'urn:isbn:978-4-7741-4437-5',
    title: 'パーフェクトPHP',
    url: 'https://gihyo.jp/book/2010/978-4-7741-4437-5',
    coverImage: bookcoverPerfectPic,
    publishDate: '2010-11-12',
    publishDateFormat: 'Nov. 12, 2010',
    presentationURL: 'https://www.slideshare.net/fivestar/php-5288493',
    presentationEvent: '#phpcon2010',
    isbn: '978-4-7741-4437-5',
    amazonURL:
      'https://www.amazon.co.jp/dp/4774144371/?&_encoding=UTF8&tag=kofivestar-22&linkCode=ur2&linkId=ba8bf8a2f8a9334a85b7d3ac4acfaaba&camp=247&creative=1211',
  },
  {
    id: 'urn:isbn:978-4-7741-5082-6',
    title: '効率的なWebアプリケーションの作り方',
    url: 'https://gihyo.jp/book/2012/978-4-7741-5082-6',
    coverImage: bookcoverWebappPic,
    publishDate: '2012-05-26',
    publishDateFormat: 'May 26, 2012',
    presentationURL: 'https://speakerdeck.com/fivestar/xiao-lu-de-nawebapurikesiyonfalsezuo-rifang',
    presentationEvent: '#Symfony2Study',
    isbn: '978-4-7741-5082-6',
    amazonURL:
      'https://www.amazon.co.jp/dp/4774150827/?&_encoding=UTF8&tag=kofivestar-22&linkCode=ur2&linkId=9742996e114614ba537f97011c4515f1&camp=247&creative=1211',
    parts: [
      {
        title: 'Application repo',
        url: 'https://github.com/fivestar/php-rentacar',
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="content">
      <Section title="About">
        <ul className="infolist" itemScope itemType="https://schema.org/Person">
          <li className="infolist__item">
            <div className="infolist__title" data-keyinfo={true}>
              <span itemProp="name">
                <span lang="en">Katsuhiro Ogawa</span> (
                <span itemProp="familyName" lang="ja">
                  小川
                </span>{' '}
                <span itemProp="givenName" lang="ja">
                  雄大
                </span>
                )
              </span>{' '}
              <span itemProp="nationality">
                <span aria-hidden={true}>🇯🇵</span>
                <span className="visually-hidden">Japan</span>
              </span>
            </div>
            <div className="infolist__description">
              <a
                href="https://github.com/fivestar"
                itemProp="identifier"
                target="_blank"
                rel="noreferrer"
              >
                @<span itemProp="alternateName">fivestar</span>
              </a>{' '}
              <Image className="avatar" src={avatarRacingPic} alt="Racing Icon" itemProp="image" />{' '}
              <Image className="avatar" src={avatarPhpconPic} alt="PHPcon Icon" itemProp="image" />{' '}
              <Image
                className="avatar"
                src={avatarGirlPic}
                alt="Umbrella Girl Icon"
                itemProp="image"
              />
            </div>
            <div className="infolist__description">
              <span itemProp="jobTitle">Principal Engineer</span> at{' '}
              <span itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
                <a
                  href="https://about.mercari.com/"
                  target="_blank"
                  rel="noreferrer"
                  itemProp="url"
                >
                  <span itemProp="name">Mercari Inc.</span>
                </a>
              </span>
            </div>
            <div className="infolist__description">
              <span itemProp="description">Technical Book Writing, Engineering Advising</span>
            </div>
            <div className="infolist__description">
              Born on{' '}
              <time dateTime="1987-06-18" itemProp="birthDate">
                June 18, 1987
              </time>{' '}
              in{' '}
              <span itemProp="birthPlace" itemScope itemType="https://schema.org/Place">
                <span itemProp="name">Kawaguchi, Saitama</span>
              </span>
            </div>
            <div className="infolist__description">
              Live in{' '}
              <span itemProp="homeLocation" itemScope itemType="https://schema.org/Place">
                <span itemProp="name">Tokyo</span>
              </span>
            </div>
          </li>
        </ul>
      </Section>

      <Section title="Apps">
        <ul className="infolist">
          {apps.map((app, index) => (
            <li key={index} className="infolist__item">
              <div className="infolist__title">
                <Link href={app.url}>{app.title}</Link>
              </div>
              <div className="infolist__description">{app.description}</div>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Links">
        <ul className="infolist">
          {links.map((link, index) => (
            <li key={index} className="infolist__item">
              <div className="infolist__title">
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.title}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Repos">
        <ul className="infolist">
          {repos.map((repo, index) => (
            <li key={index} className="infolist__item">
              <div className="infolist__title">
                <a href={repo.url} target="_blank" rel="noreferrer">
                  {repo.title}
                </a>
              </div>
              <div className="infolist__description">{repo.description}</div>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Books">
        {books.map((book) => (
          <div
            key={book.id}
            className="media"
            itemScope
            itemType="https://schema.org/Book"
            itemID={book.id}
          >
            <div className="media__thumbnail">
              <a href={book.url} target="_blank" rel="noreferrer">
                <Image src={book.coverImage} alt={'Cover of ' + book.title} itemProp="image" />
              </a>
            </div>
            <div className="media__content">
              <ul className="infolist">
                <li className="infolist__item">
                  <div className="infolist__title">
                    <a href={book.url} target="_blank" rel="noreferrer" itemProp="url">
                      <span itemProp="name">{book.title}</span>
                    </a>
                  </div>
                  <div className="infolist__description">
                    Published:{' '}
                    <time dateTime={book.publishDate} itemProp="datePublished">
                      {book.publishDateFormat}
                    </time>
                  </div>
                  <div className="infolist__description">
                    Slides:{' '}
                    <span
                      itemProp="subjectOf"
                      itemScope
                      itemType="https://schema.org/PresentationDigitalDocument"
                    >
                      <a
                        href={book.presentationURL}
                        target="_blank"
                        rel="noreferrer"
                        itemProp="url"
                      >
                        {book.presentationEvent}
                      </a>
                    </span>
                  </div>
                  <div className="infolist__description">
                    ISBN: <span itemProp="isbn">{book.isbn}</span>
                  </div>
                  <div className="infolist__description">
                    <a href={book.amazonURL} target="_blank" rel="noreferrer" itemProp="url">
                      Amazon
                    </a>
                  </div>
                  {book.parts?.map((part, index) => (
                    <div key={index} className="infolist__description">
                      <span
                        itemProp="hasPart"
                        itemScope
                        itemType="https://schema.org/SoftwareSourceCode"
                      >
                        <a
                          href={part.url}
                          target="_blank"
                          rel="noreferrer"
                          itemProp="codeRepository"
                        >
                          {part.title}
                        </a>
                      </span>
                    </div>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </Section>
    </div>
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
