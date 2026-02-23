import { seoData } from '@/lib/content/portfolio';
import ThemeProvider from '@/lib/hooks/use-theme';
import fontVariables from '@/lib/utils/fonts';

import Cursor from '@/components/ui/Cursor';

import '../styles/globals.css';
import type { Metadata } from 'next';

const SITE_URL = 'https://vinitgiri.vercel.app';

export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
  keywords: seoData.keywords.join(','),

  authors: [
    {
      name: seoData.author,
    },
  ],

  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: seoData.title,
    description: seoData.description,
    siteName: seoData.title,
  },

  twitter: {
    card: 'summary_large_image',
    title: seoData.title,
    description: seoData.description,
  },

  icons: {
    icon: '/favicons/favicon-32x32.png',
    apple: '/favicons/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="/scripts/no-flash.js" async />
      </head>
      <body className={`text-text bg-bg ${fontVariables}`}>
        <Cursor className="hidden dark:lg:block" />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
