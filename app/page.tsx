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

  const proxyLink =
    'tg://proxy?server=edge.jekahub.com&port=443&secret=eeaccaaf5fae0bc2da69b3dbd464c191';

  const shareLink =
    'https://t.me/proxy?server=edge.jekahub.com&port=443&secret=eeaccaaf5fae0bc2da69b3dbd464c191';

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

  const faqItems = {
    ru: [
      ['Это бесплатный прокси?', 'Да, сейчас на сайте доступен один рабочий сервер для быстрого подключения.'],
      ['Работает ли на телефоне?', 'Да, сайт и подключение рассчитаны на смартфоны и планшеты.'],
      ['Нужно ли устанавливать отдельное приложение?', 'Нет, достаточно открыть Telegram и подтвердить подключение прокси.'],
      ['Можно ли добавить сайт на главный экран?', 'Да, для этого у нас есть отдельная страница с инструкцией для iPhone и Android.'],
      ['Можно ли добавить ещё серверы?', 'Да, позже можно расширить список стран и вывести несколько карточек прокси.'],
      ['Безопасно ли использовать такой прокси?', 'Лучше использовать только те серверы, которым ты доверяешь, и регулярно обновлять список.'],
    ],
    en: [
      ['Is this proxy free?', 'Yes, one working server is currently available for quick connection.'],
      ['Does it work on mobile?', 'Yes, the site and connection flow are designed for phones and tablets.'],
      ['Do I need a separate app?', 'No, you only need Telegram and a confirmation to enable the proxy.'],
      ['Can I add the site to the home screen?', 'Yes, there is a separate page with instructions for iPhone and Android.'],
      ['Can more servers be added?', 'Yes, later the list can be expanded with more countries and proxy cards.'],
      ['Is it safe to use this proxy?', 'It is better to use only servers you trust and keep the list updated.'],
    ],
    fa: [
      ['آیا این پروکسی رایگان است؟', 'بله، در حال حاضر یک سرور فعال برای اتصال سریع در سایت موجود است.'],
      ['آیا روی موبایل کار می‌کند؟', 'بله، سایت و فرایند اتصال برای موبایل و تبلت طراحی شده‌اند.'],
      ['آیا به برنامه جداگانه نیاز دارم؟', 'خیر، فقط کافی است تلگرام را باز کنید و اتصال را تأیید کنید.'],
      ['آیا می‌توان سایت را به صفحه اصلی اضافه کرد؟', 'بله، برای این کار یک صفحه جداگانه با راهنما برای iPhone و Android داریم.'],
      ['آیا می‌توان سرورهای بیشتری اضافه کرد؟', 'بله، بعداً می‌توان کشورها و کارت‌های بیشتری اضافه کرد.'],
      ['آیا استفاده از این پروکسی امن است؟', 'بهتر است فقط از سرورهایی استفاده کنید که به آن‌ها اعتماد دارید و لیست را به‌روز نگه دارید.'],
    ],
  } as const;

  const seoText = {
    ru: {
      title: 'MTProto прокси для Telegram — бесплатно и быстро',
      p1: 'MTProxy Site — это сервис бесплатного MTProto-прокси для Telegram. Наш прокси-сервер расположен в Европе и обеспечивает стабильное соединение с высокой скоростью. Подключение занимает несколько секунд — достаточно нажать одну кнопку.',
      p2: 'MTProto — это протокол, разработанный командой Telegram для быстрой и защищённой передачи данных. В отличие от VPN, MTProto-прокси работает только с трафиком Telegram и не влияет на остальные приложения. Это удобный способ получить доступ к Telegram через рабочий прокси.',
      p3: 'Если Telegram заблокирован провайдером или работает нестабильно, можно использовать наш MTProto proxy для Telegram для обхода ограничений и восстановления соединения. Сервис подходит для Android, iPhone, iPad, Windows, macOS и Linux. Добавьте сайт на главный экран, чтобы всегда иметь быстрый доступ к актуальной ссылке на прокси Telegram.',
    },
    en: {
      title: 'MTProto proxy for Telegram — free and fast',
      p1: 'MTProxy Site is a free MTProto proxy service for Telegram. Our proxy server is located in Europe and provides stable high-speed access. Connection takes just a few seconds — simply press one button.',
      p2: 'MTProto is a protocol designed by the Telegram team for fast and secure data transfer. Unlike a VPN, an MTProto proxy only works with Telegram traffic and does not affect other apps. It is a convenient way to access Telegram through a working proxy.',
      p3: 'If Telegram is blocked by your provider or works unstably, you can use our Telegram MTProto proxy to bypass restrictions and restore access. The service works on Android, iPhone, iPad, Windows, macOS, and Linux. Add the site to your home screen for quick access to the current Telegram proxy link.',
    },
    fa: {
      title: 'پروکسی MTProto برای تلگرام — رایگان و سریع',
      p1: 'MTProxy Site یک سرویس رایگان MTProto proxy برای Telegram است. سرور ما در اروپا قرار دارد و اتصال پایدار و پرسرعت فراهم می‌کند. اتصال فقط چند ثانیه زمان می‌برد.',
      p2: 'MTProto پروتکلی است که توسط تیم Telegram برای انتقال سریع و امن داده طراحی شده است. برخلاف VPN، این پروکسی فقط روی ترافیک تلگرام اثر می‌گذارد و روی بقیه برنامه‌ها تأثیری ندارد.',
      p3: 'اگر تلگرام توسط ارائه‌دهنده اینترنت شما مسدود شده یا ناپایدار است، می‌توانید از پروکسی MTProto تلگرام ما برای دور زدن محدودیت‌ها و بازیابی دسترسی استفاده کنید. این سرویس روی Android، iPhone، iPad، Windows، macOS و Linux کار می‌کند.',
    },
  } as const;

  return (
    <main style={pageStyle}>
      <section style={{ ...container, paddingTop: 72, paddingBottom: 50 }}>
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
              <a href={proxyLink} style={primaryBtn}>
                {t.common.connect}
              </a>
              <Link href="/how" style={secondaryBtn}>
                {t.home.howTo}
              </Link>
            </div>

            <div
              style={{
                marginTop: 18,
                maxWidth: 760,
                color: '#555',
                lineHeight: 1.7,
                fontSize: 15,
              }}
            >
              {lang === 'ru' && (
                <>
                  Если отправляешь друзьям вне Telegram:
                  <br />
                  <a href={shareLink} style={{ color: '#111', wordBreak: 'break-all' }}>
                    {shareLink}
                  </a>
                </>
              )}
              {lang === 'en' && (
                <>
                  If you send it to friends outside Telegram:
                  <br />
                  <a href={shareLink} style={{ color: '#111', wordBreak: 'break-all' }}>
                    {shareLink}
                  </a>
                </>
              )}
              {lang === 'fa' && (
                <>
                  اگر لینک را خارج از تلگرام برای دوستان می‌فرستی:
                  <br />
                  <a href={shareLink} style={{ color: '#111', wordBreak: 'break-all' }}>
                    {shareLink}
                  </a>
                </>
              )}
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
                <div style={{ fontSize: 28, fontWeight: 700 }}>6</div>
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

            <a
              href={proxyLink}
              style={{
                ...primaryBtn,
                width: '100%',
                marginTop: 24,
                textAlign: 'center',
                boxSizing: 'border-box',
              }}
            >
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
      </section>

      <section style={{ ...container, paddingBottom: 60 }}>
        <div style={{ maxWidth: 900 }}>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              lineHeight: 1.05,
              margin: '0 0 22px',
              letterSpacing: '-0.03em',
            }}
          >
            {t.faq.title}
          </h2>

          <div style={{ ...cardStyle, padding: 28 }}>
            <div style={{ display: 'grid', gap: 14 }}>
              {faqItems[lang].map(([q, a], index) => (
                <details
                  key={index}
                  style={{
                    border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: 18,
                    padding: '18px 20px',
                    background: '#fff',
                  }}
                >
                  <summary
                    style={{
                      cursor: 'pointer',
                      fontWeight: 700,
                      fontSize: 18,
                    }}
                  >
                    {q}
                  </summary>
                  <p
                    style={{
                      color: '#666',
                      marginTop: 12,
                      lineHeight: 1.7,
                    }}
                  >
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ ...container, paddingBottom: 90 }}>
        <div style={{ ...cardStyle, padding: 32, maxWidth: 980 }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              lineHeight: 1.1,
              margin: '0 0 18px',
              letterSpacing: '-0.03em',
            }}
          >
            {seoText[lang].title}
          </h2>

          <p style={{ color: '#555', lineHeight: 1.8, fontSize: 17 }}>
            {seoText[lang].p1}
          </p>
          <p style={{ color: '#555', lineHeight: 1.8, fontSize: 17 }}>
            {seoText[lang].p2}
          </p>
          <p style={{ color: '#555', lineHeight: 1.8, fontSize: 17, marginBottom: 0 }}>
            {seoText[lang].p3}
          </p>
        </div>
      </section>
    </main>
  );
}
