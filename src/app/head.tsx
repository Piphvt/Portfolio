export default function Head() {
  return (
    <>
      <title>Piphat Portfolio</title>
      <meta name="description" content="A developer who turns ideas into interactive experiences." />

      {/* Open Graph */}
      <meta property="og:title" content="Piphat Portfolio" />
      <meta property="og:description" content="A developer who turns ideas into interactive experiences." />
      <meta property="og:image" content="/image/og-image.png" />
      <meta property="og:url" content="https://piphat-portfolio.vercel.app/" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Piphat Portfolio" />
      <meta name="twitter:description" content="A developer who turns ideas into interactive experiences." />
      <meta name="twitter:image" content="/image/og-image.png" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
