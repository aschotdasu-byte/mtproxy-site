'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Lang, translations } from '../i18n';

export default function HowPage() {
  const [lang, setLang] = useState<Lang>('ru');

  useEffect(() => {
    const saved = localStorage.getItem('site-lang') as Lang | null;
    if (saved === 'ru' || saved === 'en' || saved === 'fa') setLang(saved);
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
    padding: 24,
  };

  const numStyle: React.CSSProperties = {
    width: 42,
    height: 42,
    borderRadius: 14,
    background: '#111111',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    marginBottom: 16,
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
            {t.how.title}
          </h1>

          <p
            style={{
              maxWidth: 760,
              color: '#666',
              fontSize: 18,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {t.how.subtitle}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 18,
          }}
        >
          {t.how.steps.map((step, index) => (
            <div key={index} style={cardStyle}>
              <div style={numStyle}>{index + 1}</div>
              <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>
                {step.title}
              </div>
              <div style={{ color: '#666', lineHeight: 1.7 }}>{step.text}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
