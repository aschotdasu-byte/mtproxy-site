'use client';

import { useEffect, useState } from 'react';

type Lang = 'ru' | 'en' | 'fa';

export default function Home() {
  const [lang, setLang] = useState<Lang>('ru');

  useEffect(() => {
    const savedLang = localStorage.getItem('site-lang') as Lang | null;

    if (savedLang === 'ru' || savedLang === 'en' || savedLang === 'fa') {
      setLang(savedLang);
      return;
    }

    const userLang = navigator.language.toLowerCase();

    if (userLang.startsWith('ru')) setLang('ru');
    else if (userLang.startsWith('fa')) setLang('fa');
    else setLang('en');
  }, []);

  useEffect(() => {
    localStorage.setItem('site-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.margin = '0';
    document.body.style.background = '#ffffff';
    document.body.style.color = '#0f0f10';
    document.body.style.fontFamily =
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  }, [lang]);

  const proxyLink =
    'tg://proxy?server=YOUR_SERVER&port=443&secret=YOUR_SECRET';

  const t = {
    ru: {
      brand: 'MTProxy Site',
      nav1: 'Главная',
      nav2: 'Прокси',
      nav3: 'Как подключить',
      nav4: 'FAQ',
      badge: 'Сервер в Нидерландах',
      title: 'Прокси для Telegram',
      subtitle:
        'Быстрый и стабильный доступ через сервер в Нидерландах. Простой интерфейс, переключение языков и удобная кнопка подключения.',
      connect: 'Подключить',
      how: 'Как подключить',
      cardTitle: 'Нидерланды · Amsterdam',
      ping: 'Пинг',
      status: 'Статус',
      online: 'Онлайн',
      protocol: 'Протокол',
      stepsTitle: 'Подключение за 3 шага',
      step1Title: 'Открой страницу',
      step1Text: 'Выбери нужный язык и нажми кнопку подключения.',
      step2Title: 'Подтверди переход',
      step2Text: 'Telegram откроет ссылку прокси и предложит включить сервер.',
      step3Title: 'Пользуйся Telegram',
      step3Text: 'После подтверждения прокси начнет работать автоматически.',
      faqTitle: 'Частые вопросы',
      faq1q: 'Это бесплатный прокси?',
      faq1a: 'Да, сейчас страница показывает один доступный сервер для подключения.',
      faq2q: 'Работает ли на телефоне?',
      faq2a: 'Да, страница адаптирована для смартфонов и планшетов.',
      faq3q: 'Можно ли добавить другие серверы?',
      faq3a: 'Да, позже можно добавить новые карточки серверов и отдельные ссылки.',
      footer: 'Минималистичный лендинг для быстрого доступа к Telegram.',
    },
    en: {
      brand: 'MTProxy Site',
      nav1: 'Home',
      nav2: 'Proxy',
      nav3: 'How to connect',
      nav4: 'FAQ',
      badge: 'Netherlands server',
      title: 'Telegram Proxy',
      subtitle:
        'Fast and stable access through a server in the Netherlands. Clean interface, language switcher, and a simple connect button.',
      connect: 'Connect',
      how: 'How to connect',
      cardTitle: 'Netherlands · Amsterdam',
      ping: 'Ping',
      status: 'Status',
      online: 'Online',
      protocol: 'Protocol',
      stepsTitle: 'Connect in 3 steps',
      step1Title: 'Open the page',
      step1Text: 'Choose your language and press the connect button.',
      step2Title: 'Confirm the action',
      step2Text: 'Telegram will open the proxy link and ask to enable the server.',
      step3Title: 'Use Telegram',
      step3Text: 'After confirmation, the proxy will work automatically.',
      faqTitle: 'Frequently asked questions',
      faq1q: 'Is this proxy free?',
      faq1a: 'Yes, the page currently shows one available server for connection.',
      faq2q: 'Does it work on mobile?',
      faq2a: 'Yes, the layout is optimized for phones and tablets.',
      faq3q: 'Can I add more servers?',
      faq3a: 'Yes, more server cards and links can be added later.',
      footer: 'A minimal landing page for quick Telegram access.',
    },
    fa: {
      brand: 'MTProxy Site',
      nav1: 'خانه',
      nav2: 'پروکسی',
      nav3: 'نحوه اتصال',
      nav4: 'سوالات متداول',
      badge: 'سرور هلند',
      title: 'پروکسی تلگرام',
      subtitle:
        'دسترسی سریع و پایدار از طریق سرور هلند. رابط ساده، تغییر زبان و دکمه اتصال سریع.',
      connect: 'اتصال',
      how: 'نحوه اتصال',
      cardTitle: 'هلند · آمستردام',
      ping: 'پینگ',
      status: 'وضعیت',
      online: 'آنلاین',
      protocol: 'پروتکل',
      stepsTitle: 'اتصال در ۳ مرحله',
      step1Title: 'صفحه را باز کنید',
      step1Text: 'زبان را انتخاب کنید و روی دکمه اتصال بزنید.',
      step2Title: 'تأیید کنید',
      step2Text: 'تلگرام لینک پروکسی را باز می‌کند و از شما تأیید می‌گیرد.',
      step3Title: 'از تلگرام استفاده کنید',
      step3Text: 'بعد از تأیید، پروکسی به صورت خودکار فعال می‌شود.',
      faqTitle: 'سوالات متداول',
      faq1q: 'آیا این پروکسی رایگان است؟',
      faq1a: 'بله، در حال حاضر این صفحه یک سرور آماده اتصال را نمایش می‌دهد.',
      faq2q: 'آیا روی موبایل کار می‌کند؟',
      faq2a: 'بله، طراحی صفحه برای موبایل و تبلت مناسب است.',
      faq3q: 'می‌توانم سرورهای بیشتری اضافه کنم؟',
      faq3a: 'بله، بعداً می‌توان کارت‌های بیشتر و لینک‌های جداگانه اضافه کرد.',
      footer: 'یک لندینگ مینیمال برای دسترسی سریع به تلگرام.',
    },
  } as const;

  const text = t[lang];

  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    background:
      'radial-gradient(circle at top, rgba(0,0,0,0.06), transparent 28%), #ffffff',
    color: '#0f0f10',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: 1180,
    margin: '0 auto',
    padding: '0 20px',
  };

  const headerStyle: React.CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 20,
    background: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(0,0,0,0.08)',
  };

  const pillButton = (active: boolean): React.CSSProperties => ({
    border: '1px solid rgba(0,0,0,0.08)',
    background: active ? '#111111' : '#ffffff',
    color: active ? '#ffffff' : '#444444',
    borderRadius: 999,
    padding: '8px 14px',
    fontSize: 13,
    cursor: 'pointer',
  });

  const navLink: React.CSSProperties = {
    color: '#555',
    fontSize: 14,
    textDecoration: 'none',
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
      <header style={headerStyle}>
        <div
          style={{
            ...containerStyle,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: 76,
            gap: 20,
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              textDecoration: 'none',
              color: '#111',
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
            <div style={{ fontWeight: 700, fontSize: 18 }}>{text.brand}</div>
          </a>

          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 22,
              flexWrap: 'wrap',
            }}
          >
            <a href="#home" style={navLink}>
              {text.nav1}
            </a>
            <a href="#proxy" style={navLink}>
              {text.nav2}
            </a>
            <a href="#steps" style={navLink}>
              {text.nav3}
            </a>
            <a href="#faq" style={navLink}>
              {text.nav4}
            </a>
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
            <button onClick={() => setLang('ru')} style={pillButton(lang === 'ru')}>
              RU
            </button>
            <button onClick={() => setLang('en')} style={pillButton(lang === 'en')}>
              EN
            </button>
            <button onClick={() => setLang('fa')} style={pillButton(lang === 'fa')}>
              FA
            </button>
          </div>
        </div>
      </header>

      <section id="home" style={{ ...containerStyle, paddingTop: 72, paddingBottom: 48 }}>
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
              {text.badge}
            </div>

            <h1
              style={{
                fontSize: 'clamp(42px, 7vw, 76px)',
                lineHeight: 1,
                margin: '0 0 18px',
                letterSpacing: '-0.04em',
              }}
            >
              {text.title}
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
              {text.subtitle}
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href={proxyLink} style={primaryBtn}>
                {text.connect}
              </a>
              <a href="#steps" style={secondaryBtn}>
                {text.how}
              </a>
            </div>
          </div>

          <div id="proxy" style={{ ...cardStyle, padding: 26, alignSelf: 'start' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'space-between',
                gap: 16,
              }}
            >
              <div>
                <div style={{ fontSize: 24, fontWeight: 700 }}>{text.cardTitle}</div>
                <div style={{ marginTop: 6, color: '#777', fontSize: 14 }}>NL-1</div>
              </div>
              <div
                style={{
                  padding: '8px 12px',
                  borderRadius: 999,
                  background: '#111111',
                  color: '#fff',
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
                <span style={{ color: '#666' }}>{text.ping}</span>
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
                <span style={{ color: '#666' }}>{text.status}</span>
                <strong>{text.online}</strong>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ color: '#666' }}>{text.protocol}</span>
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
              {text.connect}
            </a>
          </div>
        </div>
      </section>

      <section id="steps" style={{ ...containerStyle, paddingTop: 18, paddingBottom: 40 }}>
        <h2
          style={{
            fontSize: 34,
            margin: '0 0 22px',
            letterSpacing: '-0.03em',
          }}
        >
          {text.stepsTitle}
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 18,
          }}
        >
          {[
            { n: '01', title: text.step1Title, text: text.step1Text },
            { n: '02', title: text.step2Title, text: text.step2Text },
            { n: '03', title: text.step3Title, text: text.step3Text },
          ].map((item) => (
            <div key={item.n} style={{ ...cardStyle, padding: 22 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  background: '#111111',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                {item.n}
              </div>
              <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>
                {item.title}
              </div>
              <div style={{ color: '#666', lineHeight: 1.7 }}>{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" style={{ ...containerStyle, paddingTop: 18, paddingBottom: 70 }}>
        <div style={{ ...cardStyle, padding: 28 }}>
          <h2
            style={{
              fontSize: 34,
              margin: '0 0 18px',
              letterSpacing: '-0.03em',
            }}
          >
            {text.faqTitle}
          </h2>

          <div style={{ display: 'grid', gap: 14 }}>
            {[
              { q: text.faq1q, a: text.faq1a },
              { q: text.faq2q, a: text.faq2a },
              { q: text.faq3q, a: text.faq3a },
            ].map((item) => (
              <details
                key={item.q}
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
                    fontSize: 16,
                  }}
                >
                  {item.q}
                </summary>
                <p
                  style={{
                    margin: '12px 0 0',
                    color: '#666',
                    lineHeight: 1.7,
                  }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer
        style={{
          borderTop: '1px solid rgba(0,0,0,0.08)',
          padding: '24px 0 40px',
        }}
      >
        <div
          style={{
            ...containerStyle,
            display: 'flex',
            justifyContent: 'space-between',
            gap: 20,
            flexWrap: 'wrap',
            color: '#666',
            fontSize: 14,
          }}
        >
          <div>© 2026 {text.brand}</div>
          <div>{text.footer}</div>
        </div>
      </footer>
    </main>
  );
}
