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
    else if (userLang.startsWith('fa') || userLang.startsWith('ir')) setLang('fa');
    else setLang('en');
  }, []);

  useEffect(() => {
    localStorage.setItem('site-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = {
    ru: {
      title: 'Прокси для Telegram',
      subtitle: 'Быстрый доступ через сервер в Нидерландах',
      connect: 'Подключить'
    },
    en: {
      title: 'Telegram Proxy',
      subtitle: 'Fast access via Netherlands server',
      connect: 'Connect'
    },
    fa: {
      title: 'پروکسی تلگرام',
      subtitle: 'دسترسی سریع از طریق سرور هلند',
      connect: 'اتصال'
    }
  };

  return (
    <main style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>{t[lang].title}</h1>
      <p>{t[lang].subtitle}</p>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => setLang('ru')}>RU</button>
        <button onClick={() => setLang('en')} style={{ marginLeft: 10 }}>EN</button>
        <button onClick={() => setLang('fa')} style={{ marginLeft: 10 }}>FA</button>
      </div>

      <button style={{ marginTop: 20 }}>
        {t[lang].connect}
      </button>
    </main>
  );
}
