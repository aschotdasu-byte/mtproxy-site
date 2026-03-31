export type Lang = 'ru' | 'en' | 'fa';

export const translations = {
  ru: {
    brand: 'MTProxy Site',
    nav: {
      home: 'Главная',
      proxy: 'Прокси',
      how: 'Как подключить',
      faq: 'FAQ',
      about: 'О нас',
      homescreen: 'На экран',
    },
    common: {
      backHome: '← На главную',
      connect: 'Подключить',
      status: 'Статус',
      ping: 'Пинг',
      protocol: 'Протокол',
      online: 'Онлайн',
      serverBadge: 'Сервер в Нидерландах',
      quickAccess: 'Быстрый доступ',
    },
    home: {
      title: 'Прокси для Telegram',
      subtitle:
        'Быстрый и стабильный доступ через сервер в Нидерландах. Теперь у сайта есть отдельные страницы для прокси, подключения, FAQ, раздела «О нас» и добавления ярлыка на экран.',
      goProxy: 'Перейти к прокси',
      howTo: 'Как подключить',
      openProxyPage: 'Открыть страницу прокси',
      server: 'Нидерланды · Amsterdam',
      pages: 'Страниц',
      uptime: 'Аптайм',
    },
    proxy: {
      title: 'Прокси',
      subtitle:
        'Здесь находится основной сервер для подключения к Telegram через MTProto proxy.',
      server: 'Нидерланды · Amsterdam',
    },
    how: {
      title: 'Как подключить',
      subtitle: 'Подключение занимает меньше минуты. Просто следуй этим шагам.',
      steps: [
        {
          title: 'Перейди в раздел «Прокси»',
          text: 'Открой страницу с доступным сервером.',
        },
        {
          title: 'Нажми кнопку «Подключить»',
          text: 'Telegram откроет ссылку прокси автоматически.',
        },
        {
          title: 'Подтверди подключение',
          text: 'После подтверждения прокси начнет работать.',
        },
      ],
    },
    faq: {
      title: 'FAQ',
      items: [
        {
          q: 'Это бесплатный прокси?',
          a: 'Да, сейчас доступен бесплатный сервер для подключения.',
        },
        {
          q: 'Работает ли на телефоне?',
          a: 'Да, сайт и подключение рассчитаны на мобильные устройства.',
        },
        {
          q: 'Можно добавить другие серверы?',
          a: 'Да, позже можно расширить список прокси и добавить новые страны.',
        },
      ],
    },
    about: {
      title: 'О нас',
      subtitle:
        'Мы сделали простой и удобный сайт для быстрого доступа к Telegram через MTProto proxy.',
      text:
        'Наша цель — дать пользователям понятный интерфейс, быстрый доступ к рабочим серверам и удобную инструкцию по подключению.',
      items: [
        'Публикуем доступные прокси',
        'Делаем подключение максимально простым',
        'Поддерживаем мобильные устройства',
        'Добавляем быстрый доступ на главный экран',
      ],
    },
    homescreen: {
      title: 'Добавить на экран',
      subtitle: 'Быстрый доступ к прокси одним нажатием',
      iphone: 'iPhone / iPad (Safari)',
      android: 'Android (Chrome)',
      iphoneSteps: [
        {
          title: 'Откройте сайт в Safari',
          text: 'Именно в Safari — из Chrome или Firefox не получится.',
        },
        {
          title: 'Нажмите «Поделиться»',
          text: 'Иконка с квадратом и стрелкой вверх внизу экрана.',
        },
        {
          title: 'Выберите «На экран Домой»',
          text: 'Пролистайте список и нажмите. Подтвердите добавление.',
        },
      ],
      androidSteps: [
        {
          title: 'Откройте сайт в Chrome',
          text: 'Или в другом Chromium-браузере.',
        },
        {
          title: 'Откройте меню',
          text: 'Три точки в правом верхнем углу браузера.',
        },
        {
          title: 'Нажмите «Добавить на главный экран»',
          text: 'Подтвердите — ярлык появится среди приложений.',
        },
      ],
    },
  },

  en: {
    brand: 'MTProxy Site',
    nav: {
      home: 'Home',
      proxy: 'Proxy',
      how: 'How to connect',
      faq: 'FAQ',
      about: 'About',
      homescreen: 'Add to Home',
    },
    common: {
      backHome: '← Back home',
      connect: 'Connect',
      status: 'Status',
      ping: 'Ping',
      protocol: 'Protocol',
      online: 'Online',
      serverBadge: 'Netherlands server',
      quickAccess: 'Quick access',
    },
    home: {
      title: 'Telegram Proxy',
      subtitle:
        'Fast and stable access through a server in the Netherlands. The site now has dedicated pages for proxy, instructions, FAQ, about, and home screen shortcut.',
      goProxy: 'Go to proxy',
      howTo: 'How to connect',
      openProxyPage: 'Open proxy page',
      server: 'Netherlands · Amsterdam',
      pages: 'Pages',
      uptime: 'Uptime',
    },
    proxy: {
      title: 'Proxy',
      subtitle:
        'This page contains the main server for connecting to Telegram via MTProto proxy.',
      server: 'Netherlands · Amsterdam',
    },
    how: {
      title: 'How to connect',
      subtitle: 'Connection takes less than a minute. Just follow these steps.',
      steps: [
        {
          title: 'Open the Proxy section',
          text: 'Go to the page with the available server.',
        },
        {
          title: 'Press the Connect button',
          text: 'Telegram will open the proxy link automatically.',
        },
        {
          title: 'Confirm connection',
          text: 'After confirmation, the proxy will start working.',
        },
      ],
    },
    faq: {
      title: 'FAQ',
      items: [
        {
          q: 'Is this proxy free?',
          a: 'Yes, a free server is currently available for connection.',
        },
        {
          q: 'Does it work on mobile?',
          a: 'Yes, the site and connection are designed for mobile devices.',
        },
        {
          q: 'Can more servers be added?',
          a: 'Yes, later the proxy list can be expanded with more countries.',
        },
      ],
    },
    about: {
      title: 'About',
      subtitle:
        'We created a simple and convenient site for quick access to Telegram via MTProto proxy.',
      text:
        'Our goal is to provide users with a clear interface, fast access to working servers, and easy connection instructions.',
      items: [
        'Publish available proxies',
        'Make connection as simple as possible',
        'Support mobile devices',
        'Add quick home screen access',
      ],
    },
    homescreen: {
      title: 'Add to Home Screen',
      subtitle: 'Quick access to proxy in one tap',
      iphone: 'iPhone / iPad (Safari)',
      android: 'Android (Chrome)',
      iphoneSteps: [
        {
          title: 'Open the site in Safari',
          text: 'It must be Safari — Chrome or Firefox will not work.',
        },
        {
          title: 'Tap Share',
          text: 'The square with an upward arrow at the bottom of the screen.',
        },
        {
          title: 'Choose Add to Home Screen',
          text: 'Scroll the list and confirm the action.',
        },
      ],
      androidSteps: [
        {
          title: 'Open the site in Chrome',
          text: 'Or any other Chromium-based browser.',
        },
        {
          title: 'Open the menu',
          text: 'Tap the three dots in the top-right corner.',
        },
        {
          title: 'Tap Add to Home screen',
          text: 'Confirm and the shortcut will appear among your apps.',
        },
      ],
    },
  },

  fa: {
    brand: 'MTProxy Site',
    nav: {
      home: 'خانه',
      proxy: 'پروکسی',
      how: 'نحوه اتصال',
      faq: 'سوالات متداول',
      about: 'درباره ما',
      homescreen: 'افزودن به صفحه',
    },
    common: {
      backHome: '← بازگشت به خانه',
      connect: 'اتصال',
      status: 'وضعیت',
      ping: 'پینگ',
      protocol: 'پروتکل',
      online: 'آنلاین',
      serverBadge: 'سرور هلند',
      quickAccess: 'دسترسی سریع',
    },
    home: {
      title: 'پروکسی تلگرام',
      subtitle:
        'دسترسی سریع و پایدار از طریق سرور هلند. این سایت اکنون صفحات جداگانه برای پروکسی، راهنما، سوالات متداول، درباره ما و افزودن به صفحه اصلی دارد.',
      goProxy: 'رفتن به پروکسی',
      howTo: 'نحوه اتصال',
      openProxyPage: 'باز کردن صفحه پروکسی',
      server: 'هلند · آمستردام',
      pages: 'صفحه',
      uptime: 'آپتایم',
    },
    proxy: {
      title: 'پروکسی',
      subtitle:
        'این صفحه شامل سرور اصلی برای اتصال به تلگرام از طریق MTProto proxy است.',
      server: 'هلند · آمستردام',
    },
    how: {
      title: 'نحوه اتصال',
      subtitle: 'اتصال کمتر از یک دقیقه طول می‌کشد. فقط این مراحل را دنبال کنید.',
      steps: [
        {
          title: 'بخش پروکسی را باز کنید',
          text: 'به صفحه سرور موجود بروید.',
        },
        {
          title: 'روی دکمه اتصال بزنید',
          text: 'تلگرام لینک پروکسی را به‌صورت خودکار باز می‌کند.',
        },
        {
          title: 'اتصال را تأیید کنید',
          text: 'بعد از تأیید، پروکسی شروع به کار می‌کند.',
        },
      ],
    },
    faq: {
      title: 'سوالات متداول',
      items: [
        {
          q: 'آیا این پروکسی رایگان است؟',
          a: 'بله، در حال حاضر یک سرور رایگان برای اتصال در دسترس است.',
        },
        {
          q: 'آیا روی موبایل کار می‌کند؟',
          a: 'بله، سایت و اتصال برای دستگاه‌های موبایل طراحی شده‌اند.',
        },
        {
          q: 'آیا می‌توان سرورهای بیشتری اضافه کرد؟',
          a: 'بله، بعداً می‌توان لیست پروکسی را گسترش داد.',
        },
      ],
    },
    about: {
      title: 'درباره ما',
      subtitle:
        'ما یک سایت ساده و کاربردی برای دسترسی سریع به تلگرام از طریق MTProto proxy ساخته‌ایم.',
      text:
        'هدف ما ارائه رابط کاربری شفاف، دسترسی سریع به سرورهای فعال و راهنمای ساده برای اتصال است.',
      items: [
        'انتشار پروکسی‌های موجود',
        'ساده کردن فرایند اتصال',
        'پشتیبانی از موبایل',
        'افزودن دسترسی سریع به صفحه اصلی',
      ],
    },
    homescreen: {
      title: 'افزودن به صفحه اصلی',
      subtitle: 'دسترسی سریع به پروکسی فقط با یک لمس',
      iphone: 'iPhone / iPad (Safari)',
      android: 'Android (Chrome)',
      iphoneSteps: [
        {
          title: 'سایت را در Safari باز کنید',
          text: 'باید Safari باشد؛ در Chrome یا Firefox کار نمی‌کند.',
        },
        {
          title: 'روی Share بزنید',
          text: 'آیکون مربع با فلش رو به بالا در پایین صفحه.',
        },
        {
          title: 'گزینه Add to Home Screen را بزنید',
          text: 'لیست را اسکرول کنید و تأیید کنید.',
        },
      ],
      androidSteps: [
        {
          title: 'سایت را در Chrome باز کنید',
          text: 'یا هر مرورگر مبتنی بر Chromium.',
        },
        {
          title: 'منو را باز کنید',
          text: 'سه نقطه در گوشه بالای سمت راست.',
        },
        {
          title: 'Add to Home screen را بزنید',
          text: 'تأیید کنید تا میانبر در بین اپ‌ها ظاهر شود.',
        },
      ],
    },
  },
} as const;
