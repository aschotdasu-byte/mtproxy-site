import Link from 'next/link';

export default function AboutPage() {
  const container: React.CSSProperties = {
    maxWidth: 1000,
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  const card: React.CSSProperties = {
    border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: 24,
    padding: 24,
    background: '#fff',
    boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
  };

  return (
    <main style={{ minHeight: '100vh', background: '#fff', color: '#111' }}>
      <div style={container}>
        <Link href="/" style={{ color: '#555', textDecoration: 'none' }}>
          ← На главную
        </Link>

        <h1 style={{ fontSize: 44, marginTop: 20 }}>О нас</h1>
        <p style={{ color: '#666', fontSize: 18, lineHeight: 1.7 }}>
          Мы сделали простой сайт для быстрого доступа к Telegram через MTProto
          proxy. Наша цель — удобное подключение, понятный интерфейс и быстрый
          доступ с любого устройства.
        </p>

        <div style={{ ...card, marginTop: 24 }}>
          <h3 style={{ marginTop: 0 }}>Что мы делаем</h3>
          <ul style={{ color: '#666', lineHeight: 1.9 }}>
            <li>Публикуем рабочие прокси</li>
            <li>Даём понятные инструкции по подключению</li>
            <li>Поддерживаем мобильные устройства</li>
            <li>Добавляем быстрый доступ на главный экран</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
