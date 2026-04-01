import { ReactNode } from 'react';
import SiteHeader from './SiteHeader';

export const metadata = {
  title: 'MTProxy Site',
  description: 'Telegram proxy website',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        style={{
          margin: 0,
          background: '#ffffff',
          color: '#111111',
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
