'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Lang, translations } from '../i18n';

export default function ProxyPage() {
  const [lang, setLang] = useState<Lang>('ru');

  const proxyLink =
    'tg://proxy?server=edge.jekahub.com&port=443&secret=eeaccaaf5fae0bc2da69b3dbd464c191';

  const shareLink =
    'https://t.me/proxy?server=edge.jekahub.com&port=443&secret=eeaccaaf5fae0bc2da69b3dbd464c191';

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
    borderRadius: 28,
    boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
  };

  const primaryBtn: React.CSSProperties = {
    background: '#111111',
    color: '#ffffff',
    borderRadius: 16,
    padding: '14px 22px',
    fontSize: 15,
    fontWeight: 600,
    textDecoration: 'none',
    display: 'inline-block',
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
            {t.common.serverBadge}
          </div>

          <h1
            style={{
              fontSize: 'clamp(38px, 6vw, 64px)',
              lineHeight: 1,
              margin: '0 0 16px',
              letterSpacing: '-0.04em',
            }}
          >
            {t.proxy.title}
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
            {t.proxy.subtitle}
          </p>
        </div>

        <div
          style={{
            ...cardStyle,
            padding: 28,
            maxWidth: 760,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'start',
              gap: 16,
            }}
          >
            <div>
              <div style={{ fontSize: 28, fontWeight: 700 }}>
                {t.proxy.server}
              </div>
              <div style={{ color: '#777', marginTop: 6 }}>NL-1</div>
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

          <a href={proxyLink} style={{ ...primaryBtn, marginTop: 24 }}>
            {t.common.connect}
          </a>

          <div
            style={{
              marginTop: 16,
              color: '#555',
              lineHeight: 1.6,
              fontSize: 14,
            }}
          >
            {lang === 'ru' && 'Если отправляешь друзьям вне Telegram:'}
            {lang === 'en' && 'If you send it to friends outside Telegram:'}
            {lang === 'fa' && 'اگر لینک را خارج از تلگرام برای دوستان می‌فرستی:'}
            <br />
            <a href={shareLink} style={{ color: '#111', wordBreak: 'break-all' }}>
              {shareLink}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
