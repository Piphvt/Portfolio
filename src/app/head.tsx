export default function Head() {
  const baseUrl = "https://piphat-portfolio.vercel.app";

  return (
    <>
      <title>Piphat Portfolio</title>
      <meta name="description" content="A developer who turns ideas into interactive experiences." />

      {/* Open Graph */}
      <meta property="og:title" content="Piphat Portfolio" />
      <meta property="og:description" content="A developer who turns ideas into interactive experiences." />
      <meta property="og:image" content={`${baseUrl}/image/og-image.png`} />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Piphat Portfolio" />
      <meta name="twitter:description" content="A developer who turns ideas into interactive experiences." />
      <meta name="twitter:image" content={`${baseUrl}/image/og-image.png`} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
