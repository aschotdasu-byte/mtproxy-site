'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Lang, translations } from './i18n';

export default function HomePage() {
  const [lang, setLang] = useState<Lang>('ru');

  useEffect(() => {
    const saved = localStorage.getItem('site-lang') as Lang | null;
    if (saved === 'ru' || saved === 'en' || saved === 'fa') setLang(saved);
  }, []);

  const t = translations[lang];

  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    margin: 0,
    background:
      'radial-gradient(circle at top, rgba(0,0,0,0.06), transparent 28%), #ffffff',
    color: '#111111',
  };

  const container: React.CSSProperties = {
    maxWidth: 1180,
    margin: '0 auto',
    padding: '0 20px',
  };

  const cardStyle: React.CSSProperties = {
    background: '#ffffff',
    border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: 28,
    boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
  };

  const primaryBtn: React.CSSProperties = {
    background: '#111111',
    color: '#ffffff',
    border: 'none',
    borderRadius: 16,
    padding: '14px 22px',
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  };

  const secondaryBtn: React.CSSProperties = {
    background: '#ffffff',
    color: '#111111',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: 16,
    padding: '14px 22px',
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  };

  return (
    <main style={pageStyle}>
      <section style={{ ...container, paddingTop: 72, paddingBottom: 60 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: 32,
          }}
        >
          <div>
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
                marginBottom: 20,
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
              {t.common.serverBadge}
            </div>

            <h1
              style={{
                fontSize: 'clamp(42px, 7vw, 76px)',
                lineHeight: 1,
                margin: '0 0 18px',
                letterSpacing: '-0.04em',
              }}
            >
              {t.home.title}
            </h1>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: '#555',
                maxWidth: 720,
                margin: '0 0 28px',
              }}
            >
              {t.home.subtitle}
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/proxy" style={primaryBtn}>
                {t.home.goProxy}
              </Link>
              <Link href="/how" style={secondaryBtn}>
                {t.home.howTo}
              </Link>
            </div>

            <div
              style={{
                display: 'flex',
                gap: 28,
                flexWrap: 'wrap',
                marginTop: 34,
              }}
            >
              <div>
                <div style={{ fontSize: 28, fontWeight: 700 }}>1</div>
                <div style={{ color: '#666', fontSize: 14 }}>Server</div>
              </div>
              <div>
                <div style={{ fontSize: 28, fontWeight: 700 }}>24/7</div>
                <div style={{ color: '#666', fontSize: 14 }}>{t.home.uptime}</div>
              </div>
              <div>
                <div style={{ fontSize: 28, fontWeight: 700 }}>5</div>
                <div style={{ color: '#666', fontSize: 14 }}>{t.home.pages}</div>
              </div>
            </div>
          </div>

          <div style={{ ...cardStyle, padding: 26, alignSelf: 'start' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 16,
                alignItems: 'start',
              }}
            >
              <div>
                <div style={{ fontSize: 24, fontWeight: 700 }}>
                  {t.home.server}
                </div>
                <div style={{ marginTop: 6, color: '#777', fontSize: 14 }}>
                  NL-1
                </div>
              </div>
              <div
                style={{
                  padding: '8px 12px',
                  borderRadius: 999,
                  background: '#111111',
                  color: '#ffffff',
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                MTProto
              </div>
            </div>

            <div style={{ marginTop: 24, display: 'grid', gap: 14 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingBottom: 12,
                  borderBottom: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <span style={{ color: '#666' }}>{t.common.ping}</span>
                <strong>35 ms</strong>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingBottom: 12,
                  borderBottom: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <span style={{ color: '#666' }}>{t.common.status}</span>
                <strong>{t.common.online}</strong>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ color: '#666' }}>{t.common.protocol}</span>
                <strong>MTProto</strong>
              </div>
            </div>

            <Link
              href="/proxy"
              style={{
                ...primaryBtn,
                width: '100%',
                marginTop: 24,
                textAlign: 'center',
                boxSizing: 'border-box',
              }}
            >
              {t.home.openProxyPage}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
