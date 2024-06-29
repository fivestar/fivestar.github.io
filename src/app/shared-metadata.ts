export function titleAndDescription({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return {
    title: title,
    description: description,
    openGraph: {
      siteName: title,
      title: title,
      description: description,
      type: 'website',
      url: 'https://fvstr.jp',
      images: ['https://fvstr.jp/assets/img/icon-og.png'],
    },
  };
}
