'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Lang, translations } from '../i18n';

export default function FaqPage() {
  const [lang, setLang] = useState<Lang>('ru');

 useEffect(() => {
  const saved = localStorage.getItem('site-lang') as Lang | null;
  if (saved === 'ru' || saved === 'en' || saved === 'fa') {
    setLang(saved);
  }

  const handler = () => {
    const newLang = localStorage.getItem('site-lang') as Lang | null;
    if (newLang === 'ru' || newLang === 'en' || newLang === 'fa') {
      setLang(newLang);
    }
  };

  window.addEventListener('lang-change', handler);

  return () => window.removeEventListener('lang-change', handler);
}, []);

  const t = translations[lang];

  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    background:
      'radial-gradient(circle at top, rgba(0,0,0,0.05), transparent 28%), #ffffff',
    color: '#111111',
  };

  const container: React.CSSProperties = {
    maxWidth: 1180,
    margin: '0 auto',
    padding: '56px 20px 80px',
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  const cardStyle: React.CSSProperties = {
    background: '#ffffff',
    border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: 24,
    boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
    padding: 28,
  };

  return (
    <main style={pageStyle}>
      <div style={container}>
        <Link href="/" style={{ color: '#666', textDecoration: 'none', fontSize: 14 }}>
          {t.common.backHome}
        </Link>

        <div style={{ marginTop: 24, marginBottom: 28 }}>
          <h1
            style={{
              fontSize: 'clamp(38px, 6vw, 64px)',
              lineHeight: 1,
              margin: '0 0 16px',
              letterSpacing: '-0.04em',
            }}
          >
            {t.faq.title}
          </h1>
        </div>

        <div style={{ ...cardStyle, maxWidth: 860 }}>
          <div style={{ display: 'grid', gap: 14 }}>
            {t.faq.items.map((item, index) => (
              <details
                key={index}
                style={{
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: 18,
                  padding: '18px 20px',
                  background: '#fff',
                }}
              >
                <summary style={{ cursor: 'pointer', fontWeight: 700, fontSize: 18 }}>
                  {item.q}
                </summary>
                <p style={{ color: '#666', marginTop: 12, lineHeight: 1.7 }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
