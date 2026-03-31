import Link from 'next/link';

export default function AboutPage() {
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
    padding: 28,
    maxWidth: 860,
  };

  return (
    <main style={pageStyle}>
      <div style={container}>
        <Link href="/" style={{ color: '#666', textDecoration: 'none', fontSize: 14 }}>
          ← На главную
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
            О нас
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
            Мы сделали простой и удобный сайт для быстрого доступа к Telegram через
            MTProto proxy.
          </p>
        </div>

        <div style={cardStyle}>
          <p style={{ color: '#666', lineHeight: 1.8, marginTop: 0 }}>
            Наша цель — дать пользователям понятный интерфейс, быстрый доступ к
            рабочим серверам и удобную инструкцию по подключению.
          </p>

          <ul style={{ color: '#666', lineHeight: 2, paddingLeft: 20, marginBottom: 0 }}>
            <li>Публикуем доступные прокси</li>
            <li>Делаем подключение максимально простым</li>
            <li>Поддерживаем мобильные устройства</li>
            <li>Добавляем быстрый доступ на главный экран</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
