'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Lang, translations } from './i18n';

export const metadata = {
  title: 'MTProxy Site',
  description: 'Telegram proxy website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<Lang>('ru');

  useEffect(() => {
    const saved = localStorage.getItem('site-lang') as Lang | null;
    if (saved === 'ru' || saved === 'en' || saved === 'fa') {
      setLang(saved);
      return;
    }

    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('ru')) setLang('ru');
    else if (browserLang.startsWith('fa')) setLang('fa');
    else setLang('en');
  }, []);

  useEffect(() => {
    localStorage.setItem('site-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = translations[lang];

  const headerStyle: React.CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 20,
    background: 'rgba(255,255,255,0.92)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(0,0,0,0.08)',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: 1180,
    margin: '0 auto',
    padding: '0 20px',
  };

  const navLink: React.CSSProperties = {
    color: '#555',
    textDecoration: 'none',
    fontSize: 14,
  };

  const langBtn = (active: boolean): React.CSSProperties => ({
    border: '1px solid rgba(0,0,0,0.08)',
    background: active ? '#111111' : '#ffffff',
    color: active ? '#ffffff' : '#444444',
    borderRadius: 999,
    padding: '8px 14px',
    fontSize: 13,
    cursor: 'pointer',
  });

  return (
    <html lang={lang}>
      <body
        style={{
          margin: 0,
          background: '#ffffff',
          color: '#111111',
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <header style={headerStyle}>
          <div
            style={{
              ...containerStyle,
              minHeight: 76,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 20,
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                textDecoration: 'none',
                color: '#111111',
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 14,
                  background: '#111111',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                }}
              >
                MT
              </div>
              <div style={{ fontWeight: 700, fontSize: 18 }}>{t.brand}</div>
            </Link>

            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 22,
                flexWrap: 'wrap',
              }}
            >
              <Link href="/" style={navLink}>{t.nav.home}</Link>
              <Link href="/proxy" style={navLink}>{t.nav.proxy}</Link>
              <Link href="/how" style={navLink}>{t.nav.how}</Link>
              <Link href="/faq" style={navLink}>{t.nav.faq}</Link>
              <Link href="/about" style={navLink}>{t.nav.about}</Link>
              <Link href="/homescreen" style={navLink}>{t.nav.homescreen}</Link>
            </nav>

            <div
              style={{
                display: 'flex',
                gap: 8,
                padding: 4,
                borderRadius: 999,
                background: '#f5f5f5',
                border: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              <button onClick={() => setLang('ru')} style={langBtn(lang === 'ru')}>RU</button>
              <button onClick={() => setLang('en')} style={langBtn(lang === 'en')}>EN</button>
              <button onClick={() => setLang('fa')} style={langBtn(lang === 'fa')}>FA</button>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
