import '../styles/globals.css';
import { ReactNode } from 'react';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
});

const baseUrl = "https://piphat-portfolio.vercel.app";

export const metadata = {
  title: 'Piphat Portfolio',
  description: 'A developer who turns ideas into interactive experiences.',
  openGraph: {
    title: 'Piphat Portfolio',
    description: 'A developer who turns ideas into interactive experiences.',
    url: baseUrl,
    siteName: 'Piphat Portfolio',
    images: [
      {
        url: `${baseUrl}/image/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Piphat Portfolio Thumbnail',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piphat Portfolio',
    description: 'A developer who turns ideas into interactive experiences.',
    images: [`${baseUrl}/image/og-image.png`],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-outfit">{children}</body>
    </html>
  );
}
