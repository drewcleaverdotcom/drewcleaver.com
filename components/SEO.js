import Head from 'next/head';

const defaultMeta = {
  title:
    'Drew Cleaver Consulting | Political Strategy, Business Automation, Spiritual Insight',
  description:
    'Drew Cleaver Consulting offers expert political strategy, business automation, and spiritual insight to help organizations thrive.',
  keywords:
    'Drew Cleaver Consulting, political strategy, business automation, spiritual insight',
  image: '/DrewCconsultingLOGOcanary.png',
  url: 'https://drewcleaver.com',
};

export default function SEO({
  title = defaultMeta.title,
  description = defaultMeta.description,
  keywords = defaultMeta.keywords,
  image = defaultMeta.image,
  url = defaultMeta.url,
}) {
  const imageUrl = image.startsWith('http') ? image : `${url}${image}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / LinkedIn / Instagram / GitHub */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Drew Cleaver Consulting" />

      {/* Twitter - also used by some platforms */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}
