import Link from 'next/link';

export default function ProxyPage() {
  const proxyLink = 'tg://proxy?server=YOUR_SERVER&port=443&secret=YOUR_SECRET';

  return (
    <main style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <Link href="/">← На главную</Link>

      <h1>Прокси</h1>
      <p>Здесь находится сервер для подключения к Telegram.</p>

      <a
        href={proxyLink}
        style={{
          display: 'inline-block',
          marginTop: 20,
          padding: '12px 20px',
          background: 'black',
          color: 'white',
          borderRadius: 10,
          textDecoration: 'none',
        }}
      >
        Подключить
      </a>
    </main>
  );
}
