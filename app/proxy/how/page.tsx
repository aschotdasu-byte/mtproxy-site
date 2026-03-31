import Link from 'next/link';

export default function HowPage() {
  const container: React.CSSProperties = {
    maxWidth: 1000,
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  const step: React.CSSProperties = {
    border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: 22,
    padding: 22,
    background: '#fff',
    boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
  };

  return (
    <main style={{ minHeight: '100vh', background: '#fff', color: '#111' }}>
      <div style={container}>
        <Link href="/" style={{ color: '#555', textDecoration: 'none' }}>
          ← На главную
        </Link>

        <h1 style={{ fontSize: 44, marginTop: 20 }}>Как подключить</h1>
        <p style={{ color: '#666', fontSize: 18, lineHeight: 1.7 }}>
          Простая инструкция по подключению прокси.
        </p>

        <div style={{ display: 'grid', gap: 18, marginTop: 28 }}>
          <div style={step}>
            <h3>1. Открой страницу прокси</h3>
            <p style={{ color: '#666' }}>
              Перейди в раздел «Прокси» и нажми кнопку подключения.
            </p>
          </div>
          <div style={step}>
            <h3>2. Подтверди открытие Telegram</h3>
            <p style={{ color: '#666' }}>
              Telegram предложит включить прокси. Подтверди действие.
            </p>
          </div>
          <div style={step}>
            <h3>3. Начни пользоваться</h3>
            <p style={{ color: '#666' }}>
              После активации прокси соединение заработает автоматически.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
