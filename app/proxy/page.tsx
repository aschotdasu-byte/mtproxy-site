import Link from 'next/link';

export default function ProxyPage() {
  const proxyLink = 'tg://proxy?server=YOUR_SERVER&port=443&secret=YOUR_SECRET';

  const container: React.CSSProperties = {
    maxWidth: 1000,
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  const card: React.CSSProperties = {
    background: '#fff',
    border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: 24,
    padding: 24,
    boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
  };

  return (
    <main style={{ minHeight: '100vh', background: '#fff', color: '#111' }}>
      <div style={container}>
        <Link href="/" style={{ color: '#555', textDecoration: 'none' }}>
          ← На главную
        </Link>

        <h1 style={{ fontSize: 44, marginTop: 20, marginBottom: 12 }}>Прокси</h1>
        <p style={{ color: '#666', fontSize: 18, lineHeight: 1.7 }}>
          Здесь находится основной сервер для подключения к Telegram.
        </p>

        <div style={{ ...card, marginTop: 24 }}>
          <h2 style={{ marginTop: 0 }}>Нидерланды · Amsterdam</h2>
          <p style={{ color: '#666' }}>Стабильный MTProto сервер</p>

          <div style={{ marginTop: 20, display: 'grid', gap: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#666' }}>Пинг</span>
              <strong>35 ms</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#666' }}>Статус</span>
              <strong>Онлайн</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#666' }}>Протокол</span>
              <strong>MTProto</strong>
            </div>
          </div>

          <a
            href={proxyLink}
            style={{
              marginTop: 24,
              display: 'inline-block',
              background: '#111',
              color: '#fff',
              textDecoration: 'none',
              padding: '14px 22px',
              borderRadius: 16,
              fontWeight: 600,
            }}
          >
            Подключить
          </a>
        </div>
      </div>
    </main>
  );
}
