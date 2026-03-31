'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Lang, translations } from '../i18n';

export default function HomeScreenPage() {
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

  const sectionCard: React.CSSProperties = {
    background: '#ffffff',
    border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: 24,
    padding: 24,
    boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
  };

  const stepCard: React.CSSProperties = {
    display: 'flex',
    gap: 14,
    alignItems: 'flex-start',
    background: '#fafafa',
    border: '1px solid rgba(0,0,0,0.06)',
    borderRadius: 18,
    padding: 18,
  };

  const badge: React.CSSProperties = {
    width: 32,
    height: 32,
    minWidth: 32,
    borderRadius: 999,
    background: '#111111',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    fontSize: 14,
    marginTop: 2,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(38px, 6vw, 64px)',
    lineHeight: 1,
    margin: '0 0 16px',
    letterSpacing: '-0.04em',
  };

  const subtitleStyle: React.CSSProperties = {
    maxWidth: 760,
    color: '#666',
    fontSize: 18,
    lineHeight: 1.7,
    margin: 0,
  };

  const stepTitle: React.CSSProperties = {
    fontWeight: 700,
    fontSize: 18,
    margin: 0,
  };

  const stepText: React.CSSProperties = {
    color: '#666',
    margin: '6px 0 0',
    lineHeight: 1.6,
    fontSize: 15,
  };

  return (
    <main style={pageStyle}>
      <div style={container}>
        <Link href="/" style={{ color: '#666', textDecoration: 'none', fontSize: 14 }}>
          {t.common.backHome}
        </Link>

        <div style={{ marginTop: 24, marginBottom: 28 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 14px',
              borderRadius: 999,
              border: '1px solid rgba(0,0,0,0.08)',
              background: '#fafafa',
              color: '#555',
              fontSize: 14,
              marginBottom: 18,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: '#111111',
                display: 'inline-block',
              }}
            />
            {t.common.quickAccess}
          </div>

          <h1 style={titleStyle}>{t.homescreen.title}</h1>
          <p style={subtitleStyle}>{t.homescreen.subtitle}</p>
        </div>

        <div style={{ display: 'grid', gap: 18, maxWidth: 860 }}>
          <section style={sectionCard}>
            <h2 style={{ marginTop: 0, marginBottom: 18, fontSize: 28 }}>
              {t.homescreen.iphone}
            </h2>

            <div style={{ display: 'grid', gap: 12 }}>
              {t.homescreen.iphoneSteps.map((step, index) => (
                <div key={index} style={stepCard}>
                  <div style={badge}>{index + 1}</div>
                  <div>
                    <p style={stepTitle}>{step.title}</p>
                    <p style={stepText}>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section style={sectionCard}>
            <h2 style={{ marginTop: 0, marginBottom: 18, fontSize: 28 }}>
              {t.homescreen.android}
            </h2>

            <div style={{ display: 'grid', gap: 12 }}>
              {t.homescreen.androidSteps.map((step, index) => (
                <div key={index} style={stepCard}>
                  <div style={badge}>{index + 1}</div>
                  <div>
                    <p style={stepTitle}>{step.title}</p>
                    <p style={stepText}>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
